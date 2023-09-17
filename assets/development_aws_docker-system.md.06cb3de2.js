import{_ as n}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.70cf5f11.js";import{_ as e,a as o,b as p,c as l,d as r,e as t,f as c,g as i}from"./chunks/ecs.73d77e6a.js";import{_ as y,o as d,c as u,H as m,k as s,a as h,Q as g}from"./chunks/framework.b7580407.js";import"./chunks/commonjsHelpers.725317a4.js";const x=JSON.parse('{"title":"Docker 入門","description":"","frontmatter":{},"headers":[],"relativePath":"development/aws/docker-system.md","filePath":"development/aws/docker-system.md","lastUpdated":1694942052000}'),k={name:"development/aws/docker-system.md"},b=s("h1",{id:"docker-入門",tabindex:"-1"},[h("Docker 入門 "),s("a",{class:"header-anchor",href:"#docker-入門","aria-label":'Permalink to "Docker 入門"'},"​")],-1),A=g('<p>ここまでの章で扱ってきたハンズオンでは，<strong>単一のサーバー</strong>を立ち上げ，それに SSH でログインをして，コマンドを叩くことで計算を行ってきた． いわば，<em>パーソナルコンピュータの延長</em>のような形でクラウドを使ってきたわけである． このような，インターネットのどこからでもアクセスできるパーソナルコンピュータとしてのクラウドという使い方も，もちろん便利であるし，いろいろな応用の可能性がある． しかし，これだけではクラウドの本当の価値は十分に発揮されていないと言うべきだろう． (#chap_cloud_basics) で述べたように，現代的なクラウドの一番の強みは自由に計算機の規模を拡大できることにある． すなわち，<strong>多数のサーバーを同時に起動し，複数のジョブを分散並列的に実行させることで大量のデータを処理してこそ，クラウドの本領が発揮される</strong>のである．</p><p>本章からはじまる 3 章分 (<a href="#sec_docker_introduction">Docker 入門</a>, (#sec_fargate_qabot), (#sec_aws_batch)) を使って，クラウドを利用することでどのように大規模な計算システムを構築しビッグデータの解析に立ち向かうのか，その片鱗をお見せしたい． とくに，前章で扱った深層学習をどのようにビッグデータに適用していくかという点に焦点を絞って議論していきたい． そのための前準備として，本章では <a href="https://www.docker.com/" target="_blank" rel="noreferrer">Docker</a> とよばれる計算機環境の仮想化ソフトウェアを紹介する (<a href="#fig:docker_logo">figure_title</a>)． 現代のクラウドは Docker なしには成り立たないといっても過言ではないだろう． クラウドに限らず，ローカルで行う計算処理にも Docker は大変便利である． AWS からは少し話が離れるが，しっかりと理解して前に進んでもらいたい．</p><h2 id="機械学習の大規模化" tabindex="-1">機械学習の大規模化 <a class="header-anchor" href="#機械学習の大規模化" aria-label="Permalink to &quot;機械学習の大規模化&quot;">​</a></h2><p>先ほどから&quot;計算システムの大規模化&quot;と繰り返し唱えているが，それは具体的にはどのようなものを指しているのか？ ここでは大規模データを処理するための計算機システムを，機械学習を例にとって見てみよう．</p><p>(#sec_scientific_computing) で紹介した <a href="https://github.com/openai/gpt-3" target="_blank" rel="noreferrer">GPT-3</a> のような，超巨大な数のパラメータを有する深層学習モデルを学習させたいとしよう． そのような計算を行いたい場合，一つのサーバーでは計算力が到底足りない． したがって，典型的には <a href="#big_dnn_training">figure_title</a> に示すような計算システムの設計がなされる． すなわち，大量の教師データを小さなチャンクとして複数のマシンに分散し，並列的にニューラルネットのパラメータを最適化していくという構造である．</p><p><img src="'+e+'" alt="複数の計算機を使った大規模な深層学習モデルの訓練"></p><p>あるいは，学習済みのモデルを大量のデータに適用し，解析を行いたいとしよう． たとえば， SNS のプラットフォームで大量の画像が与えられて，それぞれの写真に何が写っているのかをラベルづけする，などのアプリケーションを想定できる． そのような場合は， <a href="#big_dnn_inference">figure_title</a> のようなアーキテクチャが考えられるだろう． すなわち，大量のデータを複数のマシンで分割し，それぞれのマシンで推論の計算を行うというような構造である．</p><p><img src="'+o+'" alt="複数の計算機による深層学習モデルを使った推論計算"></p><p>このような複数の計算機を同時に走らせるようなアプリケーションをクラウド上で実現するには，どのようにすればよいのだろうか？</p><p>重要なポイントとして， <a href="#big_dnn_training">figure_title</a> や <a href="#big_dnn_inference">figure_title</a> で起動している複数のマシンは，<strong>基本的に全く同一の OS・計算環境を有している</strong>点である． ここで，個人のコンピュータで行うようなインストールの操作を，各マシンで行うこともできるが，それは大変な手間であるし，メンテナンスも面倒だろう． すなわち，大規模な計算システムを構築するには，<strong>簡単に計算環境を複製できるような仕組み</strong>が必要であるということがわかる．</p><p>そのような目的を実現するために使われるのが， <a href="https://www.docker.com/" target="_blank" rel="noreferrer">Docker</a> とよばれるソフトウェアである．</p><h2 id="docker-とは" tabindex="-1">Docker とは <a class="header-anchor" href="#docker-とは" aria-label="Permalink to &quot;Docker とは&quot;">​</a></h2><p><img src="'+p+'" alt="Docker のアイコン"></p><p>Docker とは， <strong>コンテナ (Container)</strong> とよばれる仮想環境下で，ホスト OS とは独立した別の計算環境を走らせるためのソフトウェアである． Docker を使うことで， OS を含めたすべてのプログラムをコンパクトにパッケージングすることが可能になる (パッケージされた一つの計算環境のことを **イメージ (Image)**とよぶ)． Docker を使うことで，クラウドのサーバー上に瞬時に計算環境を複製することが可能になり， <a href="#big_dnn_inference">figure_title</a> で見たような複数の計算機を同時に走らせるためのシステムが実現できる．</p><p>Docker は 2013 年に Solomon Hykes らを中心に開発され，それ以降爆発的に普及し，クラウドコンピューティングだけでなく，機械学習・科学計算の文脈などでも欠かすことのできないソフトウェアとなった． Docker はエンタープライズ向けの製品を除き無料で使用することができ，コアの部分は <a href="https://github.com/moby/moby" target="_blank" rel="noreferrer">オープンソースプロジェクト</a> として公開されている． Docker は Linux, Windows, Mac いずれの OS でも提供されている． 概念としては， Docker は仮想マシン (Virtual machine; VM) にとても近い． ここでは， VM との対比をしながら，Docker とはなにかを簡単に説明しよう．</p><p>仮想マシン (VM) とは，ホストとなるマシンの上に，仮想化された OS を走らせる技術である (<a href="#docker_vs_vm">figure_title</a>)． VM には <strong>ハイパーバイザー (Hypervisor)</strong> とよばれるレイヤーが存在する． Hypervisor はまず，物理的な計算機リソース (CPU, RAM, network など) を分割し，仮想化する． たとえば， ホストマシンに物理的な CPU が 4 コアあるとして，ハイパーバイザーはそれを (2,2) 個の組に仮想的に分割することができる． VM 上で起動する OS には，ハイパーバイザーによって仮想化されたハードウェアが割り当てられる． VM 上で起動する OS は基本的に完全に独立であり，たとえば OS-A は OS-B に割り当てられた CPU やメモリー領域にアクセスすることはできない (これを isolation とよぶ)． VM を作成するための有名なソフトウェアとしては， <a href="https://www.vmware.com/" target="_blank" rel="noreferrer">VMware</a>， <a href="https://www.virtualbox.org/" target="_blank" rel="noreferrer">VirtualBox</a>， <a href="https://xenproject.org/" target="_blank" rel="noreferrer">Xen</a> などがある． また，これまで触ってきた EC2 も，基本的に VM 技術を使うことで所望のスペックをもった仮想マシンがユーザーに提示される．</p><p>Docker も， VM と同様に，仮想化された OS をホストの OS 上に走らせるための技術である． VM に対し， Docker ではハードウェアレベルの仮想化は行われておらず，すべての<strong>仮想化はソフトウェアレベルで実現されている</strong> (<a href="#docker_vs_vm">figure_title</a>)． Docker で走る仮想 OS は，<strong>多くの部分をホストの OS に依存しており，結果として非常にコンパクトである</strong>． その結果， Docker で仮想 OS を起動するために要する時間は， VM に比べて圧倒的に早い． また， パッケージ化された環境 (=イメージ) のサイズも完全な OS に比べ圧倒的に小さくなるので，ネットワークを通じたやり取りが非常に高速化される点も重要である 加えて， VM のいくつかの実装では，メタル (仮想化マシンに対して，物理的なハードウェア上で直接起動する場合のこと) と比べ，ハイパーバイザーレイヤーでのオーバーヘッドなどにより性能が低下することが知られているが， Docker ではメタルとほぼ同様の性能を引き出すことができるとされている．</p><p>その他， VM との相違点などはたくさんあるのだが，ここではこれ以上詳細には立ち入らない． 大事なのは， <strong>Docker とはとてもコンパクトかつハイパフォーマンスな仮想計算環境を作るツールである</strong>，という点である． その手軽さゆえに，2013 年の登場以降，クラウドシステムでの利用が急速に増加し，現代のクラウドでは欠くことのできない中心的な技術になっている．</p><p><img src="'+l+'" alt="Docker (左) と VM (右) の比較 (画像出典: https://www.docker.com/blog/containers-replacing-virtual-machines/)"></p><p>職業的プログラマーにとっての&quot;三種の神器&quot;とはなんだろうか？ 多様な意見があると思うが，筆者は <strong>Git</strong>, <strong>Vim</strong> そして <strong>Docker</strong> を挙げたい．</p><p>Git は多くの読者がご存じの通り，コードの変更を追跡するためのシステムである． Linux の作成者である Linus Torvalds によって 2005 年に誕生した． チームでの開発を進める際には欠かせないツールだ．</p><p>Vim は 1991 年から 30 年以上の間プログラマーたちに愛されてきたテキストエディターである． <a href="https://insights.stackoverflow.com/survey/2019#technology-development-environments-and-tools-all-respondents" target="_blank" rel="noreferrer">Stackoverflow が行った 2019 年のアンケート</a> によると，開発環境の部門で 5 位の人気を獲得している． たくさんのショートカットと様々なカスタム設定が提供されているので，初見の人にはなかなかハードルが高いが，一度マスターすれば他のモダンなエディターや統合開発環境に負けない，あるいはそれ以上の開発体験を実現することができる．</p><p>これらの十年以上の歴史あるツールに並んで，第三番目の三種の神器として挙げたいのが Docker だ． Docker はプログラマーの開発のワークフローを一変させた． たとえば，プロジェクトごとに Docker イメージを作成することで，どの OS・コンピュータ でも全く同じ計算環境で開発・テストを実行することができるようになった． また， <a href="https://en.wikipedia.org/wiki/DevOps" target="_blank" rel="noreferrer">DevOps</a> や <a href="https://en.wikipedia.org/wiki/Continuous_integration" target="_blank" rel="noreferrer">CI</a> / <a href="https://en.wikipedia.org/wiki/Continuous_delivery" target="_blank" rel="noreferrer">CD</a> (Continuous Integration / Continuous Deployment) といった最近の開発ワークフローも Docker のようなコンテナ技術の存在に立脚している． さらにはサーバーレスコンピューティング ( (#sec_serverless)) といった概念も，コンテナ技術の生んだ大きな技術革新といえる．</p><p>あなたにとっての三種の神器はなんだろうか？ また，これからの未来ではどんな新しいツールが三種の神器としてプログラマーのワークフローを革新していくだろうか？</p><h2 id="docker-チュートリアル" tabindex="-1">Docker チュートリアル <a class="header-anchor" href="#docker-チュートリアル" aria-label="Permalink to &quot;Docker チュートリアル&quot;">​</a></h2><p>Docker とはなにかを理解するためには，実際に触って動かしてみるのが一番有効な手立てである． ここでは， Docker の簡単なチュートリアルを行っていく．</p><p>Docker のインストールについては， (#sec:install_docker) および <a href="https://docs.docker.com/engine/install/" target="_blank" rel="noreferrer">公式のドキュメンテーション</a> を参照してもらいたい． Docker のインストールが完了している前提で，以下は話を進めるものとする．</p><h3 id="docker-用語集" tabindex="-1">Docker 用語集 <a class="header-anchor" href="#docker-用語集" aria-label="Permalink to &quot;Docker 用語集&quot;">​</a></h3><p>Docker を使い始めるに当たり，最初に主要な用語を解説しよう． 次のパラグラフで太字で強調された用語を頭に入れた上で，続くチュートリアルに取り組んでいただきたい．</p><p>Docker を起動する際の大まかなステップを示したのが <a href="#fig:docker_image_container">figure_title</a> である． パッケージされた一つの計算環境のことを **イメージ (Image)**とよぶ． イメージは， Docker Hub などのリポジトリで配布されているものをダウンロードするか，自分でカスタムのイメージを作成することも可能である． イメージを作成するための”レシピ”を記述したファイルが <strong>Dockerfile</strong> である． Dockerfile からイメージを作成する操作を <strong>build</strong> とよぶ． イメージがホストマシンのメモリにロードされ，起動状態にある計算環境のことを <strong>コンテナ (Container)</strong> とよぶ． Container を起動するために使用されるコマンドが <strong>run</strong> である．</p><p><img src="'+r+'" alt="Image と Container"></p><h3 id="イメージをダウンロード" tabindex="-1">イメージをダウンロード <a class="header-anchor" href="#イメージをダウンロード" aria-label="Permalink to &quot;イメージをダウンロード&quot;">​</a></h3><p>パッケージ化された Docker の仮想環境 (= <strong>イメージ (Image)</strong>) は， <a href="https://hub.docker.com/" target="_blank" rel="noreferrer">Docker Hub</a> からダウンロードできる． Docker Hub には，個人や企業・団体が作成した Docker イメージが集められており， GitHub などと同じ感覚で，オープンな形で公開されている．</p><p>たとえば， Ubuntu のイメージは <a href="https://hub.docker.com/_/ubuntu" target="_blank" rel="noreferrer">Ubuntu の公式リポジトリ</a> で公開されており， <code>pull</code> コマンドを使うことでローカルにダウンロードすることができる．</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#268BD2;">$</span><span style="color:#839496;"> </span><span style="color:#2AA198;">docker</span><span style="color:#839496;"> </span><span style="color:#2AA198;">pull</span><span style="color:#839496;"> </span><span style="color:#2AA198;">ubuntu:18.04</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#268BD2;">$</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">docker</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">pull</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">ubuntu:18.04</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>ここで，イメージ名の <code>:</code> (コロン) 以降に続く文字列を <strong>タグ (tag)</strong> と呼び，主にバージョンを指定するなどの目的で使われる．</p><p><code>pull</code> コマンドはデフォルトでは Docker Hub でイメージを検索し，ダウンロードを行う． Docker イメージを公開するためのデータベース (レジストリ (registry) とよぶ) は Docker Hub だけではなく，たとえば GitLab や GitHub は独自のレジストリ機能を提供しているし，個人のサーバーでレジストリを立ち上げることも可能である． Docker Hub 以外のレジストリから pull するには， <code>myregistry.local:5000/testing/test-image</code> のように，イメージ名の先頭につける形でレジストリのアドレス (さらにオプションとしてポート番号) を指定する．</p><h3 id="コンテナを起動" tabindex="-1">コンテナを起動 <a class="header-anchor" href="#コンテナを起動" aria-label="Permalink to &quot;コンテナを起動&quot;">​</a></h3><p>Pull してきたイメージを起動するには， <code>run</code> コマンドを使う．</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#268BD2;">$</span><span style="color:#839496;"> </span><span style="color:#2AA198;">docker</span><span style="color:#839496;"> </span><span style="color:#2AA198;">run</span><span style="color:#839496;"> </span><span style="color:#CB4B16;">-it</span><span style="color:#839496;"> </span><span style="color:#2AA198;">ubuntu:18.04</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#268BD2;">$</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">docker</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">run</span><span style="color:#657B83;"> </span><span style="color:#CB4B16;">-it</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">ubuntu:18.04</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>ここで， <code>-it</code> とは，インタラクティブな shell のセッションを開始するために必要なオプションである．</p><p>このコマンドを実行すると，仮想化された Ubuntu が起動され，コマンドラインからコマンドが打ち込めるようになる (<a href="#docker_shell">figure_title</a>)． このように起動状態にある計算環境 (ランタイム) のことを <strong>Container (コンテナ)</strong> とよぶ．</p><p><img src="'+t+`" alt="Docker を使って ubuntu:18.04 イメージを起動"></p><p>ここで使用した <code>ubuntu:18.04</code> のイメージは，空の Ubuntu OS だが，すでにプログラムがインストール済みのものもある． これは， (#sec_jupyter_and_deep_learning) でみた DLAMI と概念として似ている． たとえば， PyTorch がインストール済みのイメージは <a href="https://hub.docker.com/r/pytorch/pytorch" target="_blank" rel="noreferrer">PyTorch 公式の Docker Hub リポジトリ</a> で公開されている．</p><p>これを起動してみよう．</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#268BD2;">$</span><span style="color:#839496;"> </span><span style="color:#2AA198;">docker</span><span style="color:#839496;"> </span><span style="color:#2AA198;">run</span><span style="color:#839496;"> </span><span style="color:#CB4B16;">-it</span><span style="color:#839496;"> </span><span style="color:#2AA198;">pytorch/pytorch</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#268BD2;">$</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">docker</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">run</span><span style="color:#657B83;"> </span><span style="color:#CB4B16;">-it</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">pytorch/pytorch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>docker run</code> を実行したとき，ローカルに該当するイメージが見つからない場合は，自動的に Docker Hub からダウンロードされる．</p><p>pytorch のコンテナが起動したら， Python のシェルを立ち上げて， pytorch をインポートしてみよう．</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#268BD2;">$</span><span style="color:#839496;"> </span><span style="color:#2AA198;">python3</span></span>
<span class="line"><span style="color:#268BD2;">Python</span><span style="color:#839496;"> </span><span style="color:#D33682;">3.7</span><span style="color:#2AA198;">.7</span><span style="color:#839496;"> (default, </span><span style="color:#2AA198;">May</span><span style="color:#839496;">  </span><span style="color:#D33682;">7</span><span style="color:#839496;"> </span><span style="color:#D33682;">2020</span><span style="color:#2AA198;">,</span><span style="color:#839496;"> </span><span style="color:#D33682;">21</span><span style="color:#2AA198;">:25:33</span><span style="color:#839496;">)</span></span>
<span class="line"><span style="color:#839496;">[GCC </span><span style="color:#D33682;">7.3</span><span style="color:#839496;">.0] :: Anaconda, Inc. on linux</span></span>
<span class="line"><span style="color:#268BD2;">Type</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;help&quot;,</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;copyright&quot;,</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;credits&quot;</span><span style="color:#839496;"> </span><span style="color:#2AA198;">or</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;license&quot;</span><span style="color:#839496;"> </span><span style="color:#2AA198;">for</span><span style="color:#839496;"> </span><span style="color:#2AA198;">more</span><span style="color:#839496;"> </span><span style="color:#2AA198;">information.</span></span>
<span class="line"><span style="color:#839496;">&gt;&gt;&gt; </span><span style="color:#268BD2;">import</span><span style="color:#839496;"> </span><span style="color:#2AA198;">torch</span></span>
<span class="line"><span style="color:#839496;">&gt;&gt;&gt; </span><span style="color:#268BD2;">torch.cuda.is_available</span><span style="color:#839496;">()</span></span>
<span class="line"><span style="color:#839496;">False</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#268BD2;">$</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">python3</span></span>
<span class="line"><span style="color:#268BD2;">Python</span><span style="color:#657B83;"> </span><span style="color:#D33682;">3.7</span><span style="color:#2AA198;">.7</span><span style="color:#657B83;"> (default, </span><span style="color:#2AA198;">May</span><span style="color:#657B83;">  </span><span style="color:#D33682;">7</span><span style="color:#657B83;"> </span><span style="color:#D33682;">2020</span><span style="color:#2AA198;">,</span><span style="color:#657B83;"> </span><span style="color:#D33682;">21</span><span style="color:#2AA198;">:25:33</span><span style="color:#657B83;">)</span></span>
<span class="line"><span style="color:#657B83;">[GCC </span><span style="color:#D33682;">7.3</span><span style="color:#657B83;">.0] :: Anaconda, Inc. on linux</span></span>
<span class="line"><span style="color:#268BD2;">Type</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&quot;help&quot;,</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&quot;copyright&quot;,</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&quot;credits&quot;</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">or</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&quot;license&quot;</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">for</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">more</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">information.</span></span>
<span class="line"><span style="color:#657B83;">&gt;&gt;&gt; </span><span style="color:#268BD2;">import</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">torch</span></span>
<span class="line"><span style="color:#657B83;">&gt;&gt;&gt; </span><span style="color:#268BD2;">torch.cuda.is_available</span><span style="color:#657B83;">()</span></span>
<span class="line"><span style="color:#657B83;">False</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>このように， Docker を使うことで簡単に特定の OS・プログラムの入った計算環境を再現することが可能になる．</p><h3 id="自分だけのイメージを作る" tabindex="-1">自分だけのイメージを作る <a class="header-anchor" href="#自分だけのイメージを作る" aria-label="Permalink to &quot;自分だけのイメージを作る&quot;">​</a></h3><p>自分の使うソフトウェア・ライブラリがインストールされた，自分だけのイメージを作ることも可能である．</p><p>たとえば， <a href="https://hub.docker.com/repository/docker/tomomano/labc" target="_blank" rel="noreferrer">本書のハンズオン実行用に提供している docker イメージ</a> には， Python, Node.js, AWS CLI, AWS CDK などのソフトウェアがインストール済みであり，ダウンロードしてくるだけですぐにハンズオンのプログラムが実行できるようになっている．</p><p>カスタムの docker イメージを作るには， <code>Dockerfile</code> という名前のついたファイルを用意し，その中にどんなプログラムをインストールするかなどを記述していく．</p><p>具体例として，本書で提供している Docker イメージのレシピを見てみよう (<a href="https://github.com/andatoshiki/toshiki-notebookblob/main/docker/Dockerfile" target="_blank" rel="noreferrer">docker/Dockerfile</a>)．</p><div class="language-dockerfile vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#859900;">FROM</span><span style="color:#839496;"> node:12</span></span>
<span class="line"><span style="color:#859900;">LABEL</span><span style="color:#839496;"> maintainer=</span><span style="color:#2AA198;">&quot;Tomoyuki Mano&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">RUN</span><span style="color:#839496;"> apt-get update \\</span></span>
<span class="line"><span style="color:#839496;">    &amp;&amp; apt-get install nano</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;">#</span></span>
<span class="line"><span style="color:#859900;">RUN</span><span style="color:#839496;"> cd /opt \\</span></span>
<span class="line"><span style="color:#839496;">    &amp;&amp; curl -q </span><span style="color:#2AA198;">&quot;https://www.python.org/ftp/python/3.7.6/Python-3.7.6.tgz&quot;</span><span style="color:#839496;"> -o Python-3.7.6.tgz \\</span></span>
<span class="line"><span style="color:#839496;">    &amp;&amp; tar -xzf Python-3.7.6.tgz \\</span></span>
<span class="line"><span style="color:#839496;">    &amp;&amp; cd Python-3.7.6 \\</span></span>
<span class="line"><span style="color:#839496;">    &amp;&amp; ./configure --enable-optimizations \\</span></span>
<span class="line"><span style="color:#839496;">    &amp;&amp; make install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">RUN</span><span style="color:#839496;"> cd /opt \\</span></span>
<span class="line"><span style="color:#839496;">    &amp;&amp; curl </span><span style="color:#2AA198;">&quot;https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip&quot;</span><span style="color:#839496;"> -o </span><span style="color:#2AA198;">&quot;awscliv2.zip&quot;</span><span style="color:#839496;"> \\</span></span>
<span class="line"><span style="color:#839496;">    &amp;&amp; unzip awscliv2.zip \\</span></span>
<span class="line"><span style="color:#839496;">    &amp;&amp; ./aws/install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;">#</span></span>
<span class="line"><span style="color:#859900;">RUN</span><span style="color:#839496;"> npm install -g aws-cdk@1.100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># clean up unnecessary files</span></span>
<span class="line"><span style="color:#859900;">RUN</span><span style="color:#839496;"> rm -rf /opt/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;"># copy hands-on source code in /root/</span></span>
<span class="line"><span style="color:#859900;">COPY</span><span style="color:#839496;"> handson/ /root/handson</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#859900;">FROM</span><span style="color:#657B83;"> node:12</span></span>
<span class="line"><span style="color:#859900;">LABEL</span><span style="color:#657B83;"> maintainer=</span><span style="color:#2AA198;">&quot;Tomoyuki Mano&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">RUN</span><span style="color:#657B83;"> apt-get update \\</span></span>
<span class="line"><span style="color:#657B83;">    &amp;&amp; apt-get install nano</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-style:italic;">#</span></span>
<span class="line"><span style="color:#859900;">RUN</span><span style="color:#657B83;"> cd /opt \\</span></span>
<span class="line"><span style="color:#657B83;">    &amp;&amp; curl -q </span><span style="color:#2AA198;">&quot;https://www.python.org/ftp/python/3.7.6/Python-3.7.6.tgz&quot;</span><span style="color:#657B83;"> -o Python-3.7.6.tgz \\</span></span>
<span class="line"><span style="color:#657B83;">    &amp;&amp; tar -xzf Python-3.7.6.tgz \\</span></span>
<span class="line"><span style="color:#657B83;">    &amp;&amp; cd Python-3.7.6 \\</span></span>
<span class="line"><span style="color:#657B83;">    &amp;&amp; ./configure --enable-optimizations \\</span></span>
<span class="line"><span style="color:#657B83;">    &amp;&amp; make install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">RUN</span><span style="color:#657B83;"> cd /opt \\</span></span>
<span class="line"><span style="color:#657B83;">    &amp;&amp; curl </span><span style="color:#2AA198;">&quot;https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip&quot;</span><span style="color:#657B83;"> -o </span><span style="color:#2AA198;">&quot;awscliv2.zip&quot;</span><span style="color:#657B83;"> \\</span></span>
<span class="line"><span style="color:#657B83;">    &amp;&amp; unzip awscliv2.zip \\</span></span>
<span class="line"><span style="color:#657B83;">    &amp;&amp; ./aws/install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-style:italic;">#</span></span>
<span class="line"><span style="color:#859900;">RUN</span><span style="color:#657B83;"> npm install -g aws-cdk@1.100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-style:italic;"># clean up unnecessary files</span></span>
<span class="line"><span style="color:#859900;">RUN</span><span style="color:#657B83;"> rm -rf /opt/*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-style:italic;"># copy hands-on source code in /root/</span></span>
<span class="line"><span style="color:#859900;">COPY</span><span style="color:#657B83;"> handson/ /root/handson</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><code>Dockerfile</code> の中身の説明は詳しくは行わないが，たとえば上のコードで &lt;1&gt; で示したところは， Python 3.7 のインストールを実行している． また， &lt;2&gt; で示したところは， AWS CDK のインストールを行っていることがわかるだろう． このように，リアルな OS で行うのと同じ流れでインストールのコマンドを逐一記述していくことで，自分だけの Docker イメージを作成することができる． 一度イメージを作成すれば，それを配布することで，他者も同一の計算環境を簡単に再構成することができる．</p><p>&quot;ぼくの環境ではそのプログラム走ったのにな…&quot; というのは，プログラミング初心者ではよく耳にする会話だが， Docker を使いこなせばそのような心配とは無縁である． そのような意味で，クラウド以外の場面でも， Docker の有用性・汎用性は極めて高い．</p><p>コンテナを用いた仮想計算環境ツールとして Docker を紹介したが， ほかに選択肢はないのか？ よくぞ聞いてくれた！ Docker の登場以降，複数のコンテナベースの仮想環境ツールが開発されてきた． いずれのツールも，概念や API については Docker と共通するものが多いが，Docker にはない独自の特徴を提供している． ここではその中でも有名ないくつかを紹介しよう．</p><p><a href="https://github.com/hpcng/singularity" target="_blank" rel="noreferrer">Singularity</a> は科学計算や HPC (High Performance Computing) の分野で人気の高いコンテナプラットフォームである． Singularity では大学・研究機関の HPC クラスターでの運用に適したような設計が施されている． たとえば， Docker は基本的には root 権限で実行されるのに対し， Singularity はユーザー権限 (コマンドを実行したユーザー自身) でプログラムが実行される． root 権限での実行は Web サーバーのように個人・企業がある特定のサービスのために運用するサーバーでは問題ないが，多数のユーザーが多様な目的で計算を実行する HPC クラスターでは問題となる． また，Singularity は独自のイメージの作成方法・エコシステムをもっているが， Docker イメージを Singularity のイメージに変換し実行する機能も有している．</p><p><a href="https://github.com/containers/podman" target="_blank" rel="noreferrer">podman</a> は Red Hat 社によって開発されたもう一つのコンテナプラットフォームである． podman は基本的に Docker と同一のコマンドを採用しているが，実装は Red Hat によってスクラッチから行われた． podman では， Singularity と同様にユーザー権限でのプログラムの実行を可能であり，クラウドおよび HPC の両方の環境に対応するコンテナプラットフォームを目指して作られた． また，その名前にあるとおり pod とよばれる独自の概念が導入されている．</p><p>著者の個人的な意見としては，現時点では Docker をマスターしておけば当面は困ることはないと考えるが，興味のある読者はぜひこれらのツールも試してみてはいかがだろうか？</p><h2 id="elastic-container-service-ecs" tabindex="-1">Elastic Container Service (ECS) <a class="header-anchor" href="#elastic-container-service-ecs" aria-label="Permalink to &quot;Elastic Container Service (ECS)&quot;">​</a></h2><p><img src="`+c+'" alt="ECS のアイコン"></p><p>ここまでに説明してきたように， Docker を使うことで仮想計算環境を簡単に複製・起動することが可能になる． 本章の最後の話題として， AWS 上で Docker を使った計算システムを構築する方法を解説しよう．</p><p><strong>Elastic Container Service (ECS)</strong> とは， Docker を使った計算機クラスターを AWS 上に作成するためのツールである (<a href="#fig:logo_ecs">figure_title</a>)． ECS を使用することで， Docker にパッケージされたアプリケーションを計算機クラスターに投入したり，計算機クラスターのインスタンスを追加・削除する操作 (=スケーリング) を行うことができる．</p><p>ECS の概要を示したのが <a href="#ecs_overview">figure_title</a> である． ECS は，<strong>タスク (Task)</strong> と呼ばれる単位で管理された計算ジョブを受け付ける． システムにタスクが投入されると，ECS は最初にタスクで指定された Docker イメージを外部レジストリからダウンロードしてくる． 外部レジストリとしては， Docker Hub や AWS 独自の Docker レジストリである <strong>ECR (Elastic Container Registry)</strong> を指定することができる．</p><p>ECS の次の重要な役割はタスクの配置である． あらかじめ定義されたクラスター内で，計算負荷が小さい仮想インスタンスを選び出し，そこに Docker イメージを配置することで指定された計算タスクが開始される． &quot;計算負荷が小さい仮想インスタンスを選び出す&quot; と言ったが，具体的にどのような戦略・ポリシーでこの選択を行うかは，ユーザーの指定したパラメータに従う．</p><p>また，クラスターのスケーリングも ECS における重要な概念である． スケーリングとは，クラスター内のインスタンスの計算負荷をモニタリングし，計算負荷に応じてインスタンスの起動・停止を行う操作を指す． クラスター全体の計算負荷が指定された閾値 (たとえば 80%の稼働率) を超えていた場合，新たな仮想インスタンスをクラスター内に立ち上げる操作を scale-out (スケールアウト) とよび， 負荷が減った場合に不要なインスタンスを停止する操作を scale-in (スケールイン) とよぶ． クラスターのスケーリングは， ECS がほかの AWS のサービスと連携することで実現される． 具体的には， EC2 の <strong>Auto scaling group (ASG)</strong> や <strong>Fargate</strong> の２つの選択肢が多くの場合選択される． <strong>ASG</strong> については (#sec_aws_batch), Fargate については (#sec_fargate_qabot) でより詳細に解説する．</p><p>これら一連のタスクの管理を， ECS は自動でやってくれる． クラスターのスケーリングやタスクの配置に関してのパラメータを一度指定してしまえば，ユーザーは (ほとんどなにも考えずに) 大量のタスクを投入することができる． クラスターのスケーリングによってタスクの量にちょうど十分なだけのインスタンスが起動し，タスクが完了した後は不要なインスタンスはすべて停止される．</p><p>さて，ここまで説明的な話が続いてしまったが，次章からは早速 Docker と AWS を使って大規模な並列計算システムを構築していこう！</p><p><img src="'+i+'" alt="ECS の概要"></p>',72);function f(_,D,B,v,C,S){const a=n;return d(),u("div",null,[b,m(a,{readTime:"8",words:"2.2k"}),A])}const E=y(k,[["render",f]]);export{x as __pageData,E as default};
