# Web サービスの作り方

ここからが，本書第三部の内容になる． これまでのセクションでは，仮想サーバーをクラウド上に起動し，そこで計算を走らせる方法について解説をしてきた． EC2, ECS, Fargate, Batch などを利用して，動的にスケールするクラスターを構成し，並列にタスクを実行するクラウドシステムを実装してきた． 振り返ると，これまで紹介してきた内容は，**自分自身が行いたい計算をクラウドを駆使することで実現する**，という用途にフォーカスしていたことに気がつくだろう． 一方で，**広く一般の人々に使ってもらえるような計算サービス・データベース**を提供する，というのもクラウドの重要な役割として挙げられる．

本章から始まる第三部では，前回までとは少し方向性を変え，どのようにしてクラウド上にアプリケーションを展開し，広く一般の人に使ってもらうか，という点を講義したいと思う． これを通じて，どのようにして世の中のウェブサービスができ上がっているのかを知り，さらにどうやって自分でそのようなアプリケーションをゼロから構築するのか，という点を学んでもらう． その過程で，サーバーレスアーキテクチャという最新のクラウド設計手法を解説する．

その前準備として，本章ではどのようにしてウェブサービスが出来上がっているのか，その背後にある技術の概要を解説する． 用語の解説が中心となるが，後のハンズオンを実装するために必須の知識であるので，理解して前に進むよう心がけよう．

## ウェブサービスの仕組み  — Twitter を例に

あなたがパソコンやスマートフォンから Twitter, Facebook, YouTube などのウェブサービスにアクセスしたとき，実際にどのようなことが行われ，コンテンツが提示されているのだろうか？

HTTP を通じたサーバーとクライアントのデータのやり取りは，すでに知っている読者も多いだろうし，逆にすべて解説しようとすると紙面が足りないので，ここではエッセンスの説明のみにとどめる． 以降では [Twitter](https://twitter.com) を具体例として，背後にあるサーバーとクライアントの間の通信を概説しよう． 概念図としては [figure_title](#fig:web_server) のような通信がクライアントとサーバーの間で行われていることになる．

![クライアントと Web サーバーの通信の概念図](./assets/web_server.png)

前提として，クライアントとサーバーの通信は **HTTP (Hypertext Transfer Protocol)** を使って行われる． また，最近では，暗号化された HTTP である **HTTPS (HTTPS (Hypertext Transfer Protocol Secure))** を用いることがスタンダードになってきている． 第一のステップとして，クライアントは HTTP(S) 通信によってサーバーから静的なコンテンツを取得する． 静的なコンテンツとは， **HTML (Hyptertext Markup Language)** で記述されたウェブページの文書本体， **CSS (Cascading Style Sheets)** で記述されたページのデザインやレイアウトファイル，そして **JavaScript (JS)** で記述されたページの動的な挙動を定義したプログラム，が含まれる． Twitter を含む現代的なウェブアプリケーションの設計では，この静的なファイル群はページの”枠”を定義するだけで，中身となるコンテンツ (例: ツイートの一覧) は別途 **API (Application Programming Interface)** によって取得されなければならない． そこで，クライアントは先のステップで取得された JavaScript で定義されたプログラムに従って，サーバーに API を送信し，ツイートや画像データを取得する． この際，テキストデータのやり取りには **JSON (JavaScript Object Notation)** というフォーマットが用いられることが多い． 画像や動画などのコンテンツも同様に API により取得される． このようにして取得されたテキストや画像が，HTML の文書に埋め込まれることで，最終的にユーザーに提示されるページが完成するのである． また，新しいツイートを投稿するときにも，クライアントから API を通じてサーバーのデータベースにデータが書き込まれる．

## REST API

API (Application Programming Interface) とはこれまで何度も出てきた言葉であるが，ここではよりフォーマルな定義付けを行う． API とはあるソフトウェア・アプリケーションが，外部のソフトウェアに対してコマンドやデータをやり取りするための媒介の一般的総称である． とくに，ウェブサービスの文脈では，サーバーが外界に対して提示しているコマンドの一覧のことを意味する． クライアントは，提示されている API から適切なコマンドを使うことによって，所望のデータを取得したり，あるいはサーバーにデータを送信したりする．

とくに，ウェブの文脈では **REST (Representational State Transfer)** とよばれる設計思想に基づいた API が現在では最も一般的に使われている． REST の設計指針に従った API のことを **REST API** あるいは **RESTful API** とよんだりする．

REST API は， [figure_title](#rest_api) に示したような **Method** と **URI (Universal Resource Identifier)** の組からなる．

![REST API](./assets/rest_api.png)

Method (メソッド) とは，どのような操作を行いたいかを抽象的に表す，**"動詞"** として捉えることができる． メソッドには HTTP 規格で定義された 9 個の動詞 (verb) を使用することができる． この中でも， `GET`, `POST`, `PUT`, `PATCH`, `DELETE` の 5 個が最も頻繁に使用される ([table_title](#tab:rest_api_methods))． この 5 つのメソッドによる操作を総称して **CRUD** (create, read, update, and delete) とよぶ．

<table><caption>REST API Methods</caption><colgroup><col style="width: 25%" /><col style="width: 75%" /></colgroup><thead><tr class="header"><th>メソッド</th><th>意図される動作</th></tr></thead><tbody><tr class="odd"><td><p>GET</p></td><td><p>要素を取得する</p></td></tr><tr class="even"><td><p>POST</p></td><td><p>新しい要素を作成する</p></td></tr><tr class="odd"><td><p>PUT</p></td><td><p>既存の要素を新しい要素と置き換える</p></td></tr><tr class="even"><td><p>PATCH</p></td><td><p>既存の要素の一部を更新する</p></td></tr><tr class="odd"><td><p>DELETE</p></td><td><p>要素を削除する</p></td></tr></tbody></table>

一方， URI は操作が行われる対象，すなわち **"目的語"** を表す． ウェブの文脈では操作が行われる対象のことをしばしば **リソース** とよぶ． URI は多くの場合 http または https から始まるウェブサーバーのアドレスから始まり， / (スラッシュ) 以降に所望のリソースのパスが指定される． [figure_title](#rest_api) の例で言えば， `https://api.twitter.com` というアドレスの `/1.1/status/home_timeline` というリソースを取得 (GET) せよ，という意味になる (なお，ここで `1.1` という数字は API のバージョンを示している)． この API リクエストによって，ユーザーのホームのタイムラインのツイートの一覧が取得される．

REST API のメソッドには， [table_title](#tab:rest_api_methods) で挙げたもの以外に， HTTP プロトコルで定義されているほかのメソッド (OPTIONS, TRACE など) を用いることもできるが，あまり一般的ではない．

また，これらのメソッドだけでは動詞として表現しきれないこともあるが， URI の名前でより意味を明確にすることもある． メソッドの使い方も，要素を削除する際は必ず `DELETE` を使わなければならない，という決まりもなく，たとえば， Twitter API でツイートを消す API は `POST statuses/destroy/:id` で定義されている． 最終的には，各ウェブサービスが公開している API ドキュメンテーションを読んで，それぞれの API がどんな操作をするのかを調べる必要がある．

REST の概念は 2000 年代初頭に確立され，今日の API 設計のスタンダードとなった． 一方で，ウェブのテクノロジーが進歩するにつれて，新たな API の設計アプローチの需要も高まっている． 近年とくに人気を集めているのが， [GraphQL](https://graphql.org/) と呼ばれる API の設計方法である． GraphQL は Facebook 社によって最初に作られ，現在は GraghQL Foundation によって維持と更新がされている． GraphQL を使用すると，クライアントは REST と比較してより柔軟性の高いデータのクエリを行うことができるなど，いくつかの利点がある． キーワードだけでも知っておくと，今後役に立つだろう．

## Twitter API

もう少し具体的にウェブサービスの API を体験する目的で，ここでは Twitter の API を見てみよう． Twitter が提供している API の一覧は [Twitter の Developer Documentation](https://developer.twitter.com/en/docs/api-reference-index) で見ることができる． いくつかの代表的な API を [table_title](#tab_twitter_api) にまとめた．

<table><caption>Twitter API</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>エンドポイント</th><th>動作</th></tr></thead><tbody><tr class="odd"><td><p><code>GET statuses/home_timeline</code></p></td><td><p>ホームのタイムラインのツイートの一覧を取得する．</p></td></tr><tr class="even"><td><p><code>GET statuses/show/:id</code></p></td><td><p><code>:id</code> で指定されたツイートの詳細情報を取得する．</p></td></tr><tr class="odd"><td><p><code>GET search</code></p></td><td><p>ツイートの検索を実行する．</p></td></tr><tr class="even"><td><p><code>POST statuses/update</code></p></td><td><p>新しいツイートを投稿する．</p></td></tr><tr class="odd"><td><p><code>POST media/upload</code></p></td><td><p>画像をアップロードする</p></td></tr><tr class="even"><td><p><code>POST statuses/destroy/:id</code></p></td><td><p><code>:id</code> で指定されたツイートを削除する．</p></td></tr><tr class="odd"><td><p><code>POST statuses/retweet/:id</code></p></td><td><p><code>:id</code> で指定されたツイートをリツイートする．</p></td></tr><tr class="even"><td><p><code>POST statuses/unretweet/:id</code></p></td><td><p><code>:id</code> で指定されたツイートのリツイートを取り消す．</p></td></tr><tr class="odd"><td><p><code>POST favorites/create</code></p></td><td><p>選択したツイートを"いいね"する．</p></td></tr><tr class="even"><td><p><code>POST favorites/destroy</code></p></td><td><p>選択したツイートを"いいね"を取り消す．</p></td></tr></tbody></table>

この API リストをもとに， Twitter のアプリまたはウェブサイトを開いたときに起こるクライアントとサーバーの通信をシミュレートしてみよう．

ユーザーが Twitter を開くと，まず最初に `GET statuses/home_timeline` の API リクエストによって，ユーザーのホームのタイムラインのツイートのリストが取得される． 個々のツイートは JSON 形式のデータになっており， `id`, `text`, `user`, `coordinates`, `entities` などの属性を含む． `id` はツイートに固有な ID を表し， `text` はツイートの本文を含んでいる． `user` はツイートを投稿したユーザーの名前やプロフィール画像の URL などを含んだ JSON データになっている． `coordinates` にはツイートが発信された地理的な座標が記録されている． また， `entities` にはツイートに関連するメディアファイル (画像など) のリンクなどの情報が埋め込まれている． `GET statuses/home_timeline` からは直近のツイートのリスト (リストが長すぎる場合は途中で切られたもの) が取得される． もしツイートの ID を知っている場合は `GET statuses/show/:id` を呼ぶことによって， `:id` パラメータで指定された特定のツイートを取得することができる．

ツイートの検索を行うためには `GET search` API を使用する． この API には，ツイートに含まれる単語や，ハッシュタグ，ツイートの発信された日時や場所など，様々なクエリの条件を渡すことができる． API からは， `GET statuses/home_timeline` などと同様， JSON 形式のツイートのデータが返される．

ユーザーが新しいツイートを投稿するには `POST statuses/update` のエンドポイントを利用する． `POST statuses/update` には，ツイートの文章や，リプライの場合はリプライ先のツイートの ID などのデータを送信する． また，ツイートに画像データを添付したい場合は， `POST media/upload` を併せて使用する． ツイートの削除を行うには， `POST statuses/destroy/:id` を用いる．

そのほか，頻繁に行われる操作としては， `POST statuses/retweet/:id` と `POST statuses/unretweet/:id` がある． これらは， `:id` で指定されるツイートに対して，それぞれリツイートを実行あるいは取り消すための API である． また， `POST favorites/create`，`POST favorites/destroy` を使用することによって，選択されたツイートに"いいね"を追加したり，取り消したりする操作を行う．

このような一連の操作が， Twitter のアプリの背後では行われている． また，自分自身でボットを作成したい場合は，これらの API を適切に組み合わせ，カスタムのプログラムを書くことで実現される．

このように， API はあらゆるウェブサービスを作るうえで一番基礎となる要素である． 次からの章では本章で紹介した用語が何度も出てくるので，頭の片隅に置いたうえで読み進めていただきたい．
