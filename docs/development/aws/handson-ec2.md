# Hands-on \#1: 初めての EC2 インスタンスを起動する

ハンズオンの第一回では， CDK を使って EC2 のインスタンス(仮想サーバー)を作成し，SSH でサーバーにログインする，という演習を行う． このハンズオンを終えれば，あなたは自分だけのサーバーを AWS 上に立ち上げ，自由に計算を走らせることができるようになるのである！

## 準備

ハンズオンのソースコードは GitHub の [handson/ec2-get-started](https://github.com/andatoshiki/toshiki-notebooktree/main/handson/ec2-get-started) に置いてある．

このハンズオンは，基本的に [AWS の無料枠](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc) の範囲内で実行することができる．

まずは，ハンズオンを実行するための環境を整える． これらの環境整備は，後のハンズオンでも前提となるものなので確実にミスなく行っていただきたい．

-   **AWS Account**: ハンズオンを実行するには個人の AWS アカウントが必要である． AWS アカウントの取得については [???](#sec:create_aws_account) を参照のこと．

-   **Python と Node.js**: 本ハンズオンを実行するには，Python (3.6 以上)，Node.js (12.0 以上) がインストールされていなければならない．

-   **AWS CLI**: AWS CLI のインストールについては， [???](#aws_cli_install) を参照． ここに記載されている認証鍵の設定も済ませておくこと．

-   **AWS CDK**: AWS CDK のインストールについては， [???](#aws_cdk_install) を参照．

-   **ソースコードのダウンロード**: 本ハンズオンで使用するプログラムのソースコードを，以下のコマンドを使って GitHub からダウンロードする．

```shell
$ git clone https://github.com/tomomano/learn-aws-by-coding.git
```

あるいは， <https://github.com/tomomano/learn-aws-by-coding> のページに行って，右上のダウンロードボタンからダウンロードすることもできる．

**Docker を使用する場合**

Python, Node.js, AWS CDK など，ハンズオンのプログラムを実行するために必要なプログラム/ライブラリがインストール済みの Docker image を用意した． また，ハンズオンのソースコードもパッケージ済みである． Docker の使い方を知っている読者は，これを使えば，諸々のインストールをする必要なく，すぐにハンズオンのプログラムを実行できる．

使用方法については [???](#sec_handson_docker) を参照のこと．

## SSH

**SSH (secure shell)** は Unix 系のリモートサーバーに安全にアクセスするためのツールである． 本ハンズオンでは， SSH を使って仮想サーバーにアクセスする． SSH に慣れていない読者のため，簡単な説明をここで行おう．

SSH による通信はすべて暗号化されているので，機密情報をインターネットを介して安全に送受信することができる． 本ハンズオンで，リモートのサーバーにアクセスするための SSH クライアントがローカルマシンにインストールされている必要がある． SSH クライアントは Linux/Mac には標準搭載されている． Windows の場合は WSL をインストールすることで SSH クライアントを利用することを推奨する ([???](#environments) を参照)．

SSH コマンドの基本的な使い方を次に示す． `<host name>` はアクセスする先のサーバーの IP アドレスや DNS によるホストネームが入る． `<user name>` は接続する先のユーザー名である．

```shell
$ ssh <user name>@<host name>
```

SSH は平文のパスワードによる認証を行うこともできるが，より強固なセキュリティを施すため，**公開鍵暗号方式(Public Key Cryptography)による認証**を行うことが強く推奨されており， EC2 はこの方法でしかアクセスを許していない． 公開鍵暗号方式の仕組みについては各自勉強してほしい． 本ハンズオンにおいて大事なことは，**EC2 インスタンスが公開鍵(Public key)を保持し，クライアントとなるコンピュータ(読者自身のコンピュータ)が秘密鍵(Private key)を保持する**，という点である． EC2 のインスタンスには秘密鍵を持ったコンピュータのみがアクセスすることができる．逆に言うと，秘密鍵が漏洩すると第三者もサーバーにアクセスできることになるので，**秘密鍵は絶対に漏洩することのないよう注意して管理する**．

SSH コマンドでは，ログインのために使用する秘密鍵ファイルを `-i` もしくは `--identity_file` のオプションで指定することができる． たとえば，次のように使う．

```shell
$ ssh -i Ec2SecretKey.pem <user name>@<host name>
```

## アプリケーションの説明

このハンズオンで作成するアプリケーションの概要を [figure_title](#handson_01_architecture) に示す．

![ハンズオン#1で作製するアプリケーションのアーキテクチャ](imgs/handson-01/app_architecture.png)

このアプリケーションではまず，**VPC (Virtual Private Cloud)** を使ってプライベートな仮想ネットワーク環境を立ち上げている． その VPC の public subnet の内側に，**EC2 (Elatic Compute Cloud)** の仮想サーバーを配置する． さらに，セキュリティのため， **Security Group** による EC2 インスタンスへのアクセス制限を設定している． このようにして作成された仮想サーバーに，SSH を使ってアクセスし，簡単な計算を行う．

[figure_title](#handson_01_architecture) のようなアプリケーションを，CDK を使って構築する．

早速ではあるが，今回のハンズオンで使用するプログラムを見てみよう ([handson/ec2-get-started/app.py](https://github.com/andatoshiki/toshiki-notebookblob/main/handson/ec2-get-started/app.py))．

```python
class MyFirstEc2(core.Stack):

    def __init__(self, scope: core.App, name: str, key_name: str, **kwargs) -> None:
        super().__init__(scope, name, **kwargs)

        #
        vpc = ec2.Vpc(
            self, "MyFirstEc2-Vpc",
            max_azs=1,
            cidr="10.10.0.0/23",
            subnet_configuration=[
                ec2.SubnetConfiguration(
                    name="public",
                    subnet_type=ec2.SubnetType.PUBLIC,
                )
            ],
            nat_gateways=0,
        )

        #
        sg = ec2.SecurityGroup(
            self, "MyFirstEc2Vpc-Sg",
            vpc=vpc,
            allow_all_outbound=True,
        )
        sg.add_ingress_rule(
            peer=ec2.Peer.any_ipv4(),
            connection=ec2.Port.tcp(22),
        )

        #
        host = ec2.Instance(
            self, "MyFirstEc2Instance",
            instance_type=ec2.InstanceType("t2.micro"),
            machine_image=ec2.MachineImage.latest_amazon_linux(),
            vpc=vpc,
            vpc_subnets=ec2.SubnetSelection(subnet_type=ec2.SubnetType.PUBLIC),
            security_group=sg,
            key_name=key_name
        )
```

-   まず最初に，VPC を定義する．

-   次に， security group (SG) を定義している． ここでは，任意の IPv4 のアドレスからの，ポート 22 (SSH の接続に使用される)への接続を許可している． それ以外の接続は拒絶される．

-   最後に，上記で作った VPC と SG が付与された EC2 インスタンスを作成している． インスタンスタイプは `t2.micro` を選択し， [Amazon Linux](https://aws.amazon.com/amazon-linux-ami/) を OS として設定している．

それぞれについて，もう少し詳しく説明しよう．

### VPC (Virtual Private Cloud)

**VPC のアイコン.**

![VPC](imgs/aws_logos/VPC.png)

VPC は AWS 上にプライベートな仮想ネットワーク環境を構築するツールである．高度な計算システムを構築するには，複数のサーバーを連動させて計算を行う必要があるが，そのような場合に互いのアドレスなどを管理する必要があり，そういった目的で VPC は有用である．

本ハンズオンでは，サーバーは一つしか起動しないので，VPC の恩恵はよく分からないかもしれない．しかし，EC2 インスタンスは必ず VPC の中に配置されなければならない，という制約があるので，このハンズオンでもミニマルな VPC を構成している．

興味のある読者のために，VPC のコードについてもう少し詳しく説明しよう．

```python
vpc = ec2.Vpc(
    self, "MyFirstEc2-Vpc",
    max_azs=1,
    cidr="10.10.0.0/23",
    subnet_configuration=[
        ec2.SubnetConfiguration(
            name="public",
            subnet_type=ec2.SubnetType.PUBLIC,
        )
    ],
    nat_gateways=0,
)
```

-   `max_azs=1` : このパラメータは，前章で説明した avaialibility zone (AZ) を設定している． このハンズオンでは，特にデータセンターの障害などを気にする必要はないので `1` にしている．

-   `cidr="10.10.0.0/23"` : このパラメータは，VPC 内の IPv4 のレンジを指定している． CIDR 記法については， [Wikipedia](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)などを参照． `10.10.0.0/23` は `10.10.0.0` から `10.10.1.255` までの 512 個の連続したアドレス範囲を指している． つまり，この VPC では最大で 512 個のユニークな IPv4 アドレスが使えることになる． 今回はサーバーは一つなので 512 個は明らかに多すぎるが，VPC はアドレスの数はどれだけ作成しても無料なので，多めに作成した．

-   `subnet_configuration=...` : このパラメータは，VPC にどのようなサブネットを作るか，を決めている． サブネットの種類には **private subnet** と **public subnet** の二種類がある． private subnet は基本的にインターネットとは遮断されたサブネット環境である． インターネットと繋がっていないので，セキュリティは極めて高く， VPC 内のサーバーとのみ通信を行えばよい EC2 インスタンスはここに配置する． Public subnet とはインターネットに繋がったサブネットである． 本ハンズオンで作成するサーバーは，外から SSH でログインを行いたいので， Public subnet 内に配置する． より詳細な記述は [公式ドキュメンテーション](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#vpc-subnet-basics) を参照．

-   `natgateways=0` : これは少し高度な内容なので省略する (興味のある読者は [公式ドキュメンテーション](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)を参照)． が，**これを 0 にしておかないと，NAT Gateway の利用料金が発生してしまうので，注意！**

### Security Group

Security group (SG) は， EC2 インスタンスに付与することのできる仮想ファイアーウォールである． たとえば，特定の IP アドレスから来た接続を許可・拒絶したり　(インバウンド・トラフィックの制限) ，逆に特定の IP アドレスへのアクセスを禁止したり (アウトバウンド・トラフィックの制限) することができる．

コードの該当部分を見てみよう．

```python
sg = ec2.SecurityGroup(
    self, "MyFirstEc2Vpc-Sg",
    vpc=vpc,
    allow_all_outbound=True,
)
sg.add_ingress_rule(
    peer=ec2.Peer.any_ipv4(),
    connection=ec2.Port.tcp(22),
)
```

本ハンズオンでは， SSH による外部からの接続を許容するため， `sg.add_ingress_rule(peer=ec2.Peer.any_ipv4(), connection=ec2.Port.tcp(22))` により，すべての IPv4 アドレスからのポート 22 番へのアクセスを許容している． また， SSH で EC2 インスタンスにログインしたのち，インターネットからプログラムなどをダウンロードできるよう， `allow_all_outbound=True` のパラメータを設定している．

SSH はデフォルトでは 22 番ポートを使用するのが慣例である．

セキュリティ上の観点からは，SSH の接続は自宅や大学・職場など特定の地点からの接続のみを許す方が望ましい．

### EC2 (Elastic Compute Cloud)

**EC2 のアイコン.**

![EC2](imgs/aws_logos/EC2.png)

EC2 は AWS 上に仮想サーバーを立ち上げるサービスである． 個々の起動状態にある仮想サーバーのことをインスタンス (instance) とよぶ (しかし，口語的なコミュニケーションにおいては，サーバーとインスタンスという言葉は相互互換的に用いられることが多い)．

EC2 では用途に応じて様々なインスタンスタイプが提供されている． [table_title](#ec2_instance_types) に，代表的なインスタンスタイプの例を挙げる (執筆時点での情報)． EC2 のインスタンスタイプのすべてのリストは [公式ドキュメンテーション "Amazon EC2 Instance Types"](https://aws.amazon.com/ec2/instance-types/) で見ることができる．

### EC2 instance types

| Instance     | vCPU | Memory (GiB) | Network bandwidth (Gbps) | Price per hour ($) |
| ------------ | ---- | ------------ | ------------------------ | ------------------ |
| t2.micro     | 1    | 1            | -                        | 0.0116             |
| t2.small     | 1    | 2            | -                        | 0.023              |
| t2.medium    | 2    | 4            | -                        | 0.0464             |
| c5.24xlarge  | 96   | 192          | 25                       | 4.08               |
| c5n.18xlarge | 72   | 192          | 100                      | 3.888              |
| x1e.16xlarge | 64   | 1952         | 10                       | 13.344             |

[table_title](#ec2_instance_types) からわかるように， CPU は 1 コアから 96 コアまで，メモリーは 1GB から 2TB 以上まで，ネットワーク帯域は最大で 100Gbps まで，幅広く選択することができる． また，時間あたりの料金は，CPU・メモリーの占有数にほぼ比例する形で増加する． EC2 はサーバーの起動時間を秒単位で記録しており，**利用料金は使用時間に比例する形で決定される**． 例えば， `t2.medium` のインスタンスを 10 時間起動した場合，0.0464 \* 10 = 0.464 ドルの料金が発生する．

AWS には [無料利用枠](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc) というものがあり， `t2.micro` であれば月に 750 時間までは無料で利用することができる．

[table_title](#ec2_instance_types) の価格は `us-east-1` のものである． リージョンによって多少価格設定が異なる．

上記で t2.micro の $0.0116 / hour という金額は， On-demand インスタンスというタイプを選択した場合の価格である． EC2 ではほかに， [Spot instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html) とよばれるインスタンスも存在しする． Spot instance は，AWS のデータセンターの負荷が増えた場合，ユーザーのプログラムが実行中であっても AWS の判断により強制シャットダウンされる，という不便さを抱えているのだが，その分大幅に安い料金設定になっている． AWS で一時的に生じた余剰な空き CPU をユーザーに割安で貸し出す，という発想である． 科学計算やウェブサーバーなどの用途でコストを削減する目的で， Spot Instance を活用する事例も多数報告されている．

EC2 インスタンスを定義しているコードの該当部分を見てみよう．

```python
host = ec2.Instance(
    self, "MyFirstEc2Instance",
    instance_type=ec2.InstanceType("t2.micro"),
    machine_image=ec2.MachineImage.latest_amazon_linux(),
    vpc=vpc,
    vpc_subnets=ec2.SubnetSelection(subnet_type=ec2.SubnetType.PUBLIC),
    security_group=sg,
    key_name=key_name
)
```

ここでは， `t2.micro` というインスタンスタイプを選択している． さらに， `machine_image` として， [Amazon Linux](https://aws.amazon.com/amazon-linux-ami/) を選択している (Machine image は OS と似た概念である． Machine image については， [???](#sec_jupyter_and_deep_learning) でより詳しく触れる)． さらに，上で定義した VPC, SG をこのインスタンスに付与している．

以上が，今回使用するプログラムの簡単な解説であった． ミニマルな形のプログラムではあるが，仮想サーバーを作成するのに必要なステップがおわかりいただけただろうか？

## プログラムを実行する

さて，ハンズオンのコードの理解ができたところで，プログラムを実際に実行してみよう．繰り返しになるが， [準備](#handson_01_prep) での準備ができていることが前提である．

### Python の依存ライブラリのインストール

まずは，Python の依存ライブラリをインストールする．以下では，Python のライブラリを管理するツールとして， [venv](https://docs.python.org/3/library/venv.html) を使用する．

まずは， `handson/ec2-get-started` のディレクトリに移動しよう．

```shell
$ cd handson/ec2-get-started
```

ディレクトリを移動したら， `venv` で新しい仮想環境を作成し，インストールを実行する．

```shell
$ python3 -m venv .env
$ source .env/bin/activate
$ pip install -r requirements.txt
```

これで Python の環境構築は完了だ．

`venv` の簡単な説明は [???](#venv_quick_guide) に記述してある．

環境によっては `pip` ではなく `pip3` あるいは `python3 -m pip` に置き換える必要がある．

### AWS のシークレットキーをセットする

AWS CLI および AWS CDK を使うには， AWS のシークレットキーが設定されている必要がある． シークレットキーの発行については [???](#aws_secrets) を参照のこと． シークレットキーを発行したら， [???](#aws_cli_install) を参照し，コマンドラインの設定を行う．

手順をここに短く要約すると，一つ目の方法は `AWS_ACCESS_KEY_ID` などの環境変数を設定するやり方である． もう一つの方法は， `~/.aws/credentials` に認証情報を保存しておく方式である． シークレットキーの設定は AWS CLI/CDK を使用するうえで共通のステップになるので，しっかりと理解しておくように．

### SSH 鍵を生成

EC2 インスタンスには SSH を使ってログインする． EC2 インスタンスを作成するのに先行して，今回のハンズオンで専用に使う SSH の公開鍵・秘密鍵のペアを準備する必要がある．

次の AWS CLI コマンドにより， `HirakeGoma` という名前のついた鍵を生成する．

```shell
$ export KEY_NAME="HirakeGoma"
$ aws ec2 create-key-pair --key-name ${KEY_NAME} --query 'KeyMaterial' --output text > ${KEY_NAME}.pem
```

このコマンドを実行すると，現在のディレクトリに `HirakeGoma.pem` というファイルが作成される．これが，サーバーにアクセスするための秘密鍵である． SSH でこの鍵を使うため， `~/.ssh/` のディレクトリに鍵を移動する． さらに，秘密鍵が書き換えられたり第三者に閲覧されないよう，ファイルのアクセス権限を `400` に設定する．

```shell
$ mv HirakeGoma.pem ~/.ssh/
$ chmod 400 ~/.ssh/HirakeGoma.pem
```

### デプロイを実行

これまでのステップで， EC2 インスタンスをデプロイするための準備が整った！ 早速，次のコマンドによりアプリケーションを AWS にデプロイしよう． `-c key_name="HirakeGoma"` というオプションで，先ほど生成した `HirakeGoma` という名前の鍵を使うよう指定している．

```shell
$ cdk deploy -c key_name="HirakeGoma"
```

このコマンドを実行すると， VPC， EC2 などが AWS 上に展開される． そして，コマンドの出力の最後に [figure_title](#handson_01_cdk_output) のような出力が得られるはずである． **出力の中で `InstancePublicIp` に続く数字が，起動したインスタンスのパブリック IP アドレスである．** IP アドレスはデプロイごとにランダムなアドレスが割り当てられる．

![CDKデプロイ実行後の出力](imgs/handson-01/cdk_output.png)

### SSH でログイン

早速，SSH 　で接続してみよう．

```shell
$ ssh -i ~/.ssh/HirakeGoma.pem ec2-user@<IP address>
```

`-i` オプションで，先ほど生成した秘密鍵を指定している． EC2 インスタンスにはデフォルトで `ec2-user` という名前のユーザーが作られているので，それを使用する． 最後に， `<IP address>` の部分は自身が作成した EC2 インスタンスの IP アドレスで置き換える (`12.345.678.9` など）．

ログインに成功すると， [figure_title](#fig_handson_01_ssh_login) のような画面が表示される． リモートのサーバーにログインしているので，プロンプトが `[ec2-user@ip-10-10-1-217 ~]$` のようになっていることを確認しよう．

![SSH で EC2 インスタンスにログイン](imgs/handson-01/ssh_login.png)

**おめでとう！これで，めでたく AWS 上に EC2 仮想サーバーを起動し，リモートからアクセスできるようになった！**

### 起動した EC2 インスタンスで遊んでみる

せっかく新しいインスタンスを起動したので，少し遊んでみよう．

ログインした EC2 インスタンスで，次のコマンドを実行してみよう． CPU の情報を取得することができる．

```shell
$ cat /proc/cpuinfo

processor       : 0
vendor_id       : GenuineIntel
cpu family      : 6
model           : 63
model name      : Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz
stepping        : 2
microcode       : 0x43
cpu MHz         : 2400.096
cache size      : 30720 KB
```

次に，実行中のプロセスやメモリの消費を見てみよう．

```bash
$  top -n 1

top - 09:29:19 up 43 min,  1 user,  load average: 0.00, 0.00, 0.00
Tasks:  76 total,   1 running,  51 sleeping,   0 stopped,   0 zombie
Cpu(s):  0.3%us,  0.3%sy,  0.1%ni, 98.9%id,  0.2%wa,  0.0%hi,  0.0%si,  0.2%st
Mem:   1009140k total,   270760k used,   738380k free,    14340k buffers
Swap:        0k total,        0k used,        0k free,   185856k cached

  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND
    1 root      20   0 19696 2596 2268 S  0.0  0.3   0:01.21 init
    2 root      20   0     0    0    0 S  0.0  0.0   0:00.00 kthreadd
    3 root      20   0     0    0    0 I  0.0  0.0   0:00.00 kworker/0:0
```

`t2.micro` インスタンスなので， 1009140k = 1GB のメモリーがあることがわかる．

今回起動したインスタンスには Python 2 はインストール済みだが， Python 3 は入っていない． Python 3.6 のインストールを行ってみよう． インストールは簡単である．

```shell
$ sudo yum update -y
$ sudo yum install -y python36
```

インストールした Python を起動してみよう．

```shell
$ python3
Python 3.6.10 (default, Feb 10 2020, 19:55:14)
[GCC 4.8.5 20150623 (Red Hat 4.8.5-28)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

Python のインタープリタが起動した！ `Ctrl + D` あるいは `exit()` と入力することで，インタープリタを閉じることができる．

さて，サーバーでのお遊びはこんなところにしておこう (興味があれば各自いろいろと試してみると良い) ． 次のコマンドでログアウトする．

```shell
$ exit
```

### AWS コンソールから確認

これまでは，すべてコマンドラインから EC2 に関連する操作を行ってきた． EC2 インスタンスの状態を確認したり，サーバーをシャットダウンするなどの操作は，AWS コンソールから実行することもできる． 軽くこれを紹介しよう．

まず，ウェブブラウザを開いて AWS コンソールにログインする． ログインしたら， `Services` から `EC2` を検索(選択)する． 次に，左のサイドバーの `Instances` とページをたどる. すると， [figure_title](#aws_ec2_console) のような画面が得られるはずである． この画面で，自分のアカウントの管理下にあるインスタンスを確認できる． 同様に，VPC・SG についてもコンソールから確認できる．

![EC2 コンソール画面](imgs/handson-01/ec2_console.png)

**コンソール右上で，正しいリージョン (今回の場合は ap-northeast-1, Tokyo) が選択されているか，注意する！**

前章で CloudFormation について触れたが，今回デプロイしたアプリケーションも，CloudFormation のスタックとして管理されている． **スタック (stack)** とは， AWS リソースの集合のことを指す． 今回の場合は， VPC/EC2/SG などがスタックの中に含まれている． コンソールで `CloudFormation` のページに行ってみよう ([figure_title](#aws_cloudformation_console))．

![CloudFormation コンソール画面](imgs/handson-01/cloudformation_console.png)

"MyFirstEc2" という名前のスタックがあることが確認できる． クリックをして中身を見てみると，EC2, VPC などのリソースがこのスタックに紐付いていることがわかる．

### スタックを削除

これにて，第一回のハンズオンで説明すべき事柄はすべて完了した． 最後に，使わなくなったスタックを削除しよう． スタックの削除には，二つの方法がある．

一つ目の方法は，前節の Cloudformation のコンソール画面で， "Delete" ボタンを押すことである ([figure_title](#cloudformation_delete))． すると，スタックの状態が `"DELETE_IN_PROGRESS"` に変わり，削除が完了すると CloudFormation のスタックの一覧から消える．

![CloudFormationコンソール画面から，スタックを削除](imgs/handson-01/cloudformation_delete.png)

二つ目の方法は，コマンドラインから行う方法である． 先ほど，デプロイを行ったコマンドラインに戻ろう． そうしたら，次のコマンドを実行する．

```shell
$ cdk destroy
```

このコマンドを実行すると，スタックの削除が始まる． 削除した後は，VPC, EC2 など，すべて跡形もなく消え去っていることを自身で確かめよう． CloudFormation を用いることで関連するすべての AWS リソースを一度に管理・削除することができるので，大変便利である．

**スタックの削除は各自で必ず行うこと！** 行わなかった場合， EC2 インスタンスの料金が発生し続けることになる！

また，本ハンズオンのために作成した SSH 鍵ペアも不要なので，削除しておく． まず， EC2 側に登録してある公開鍵を削除する． これも，コンソールおよびコマンドラインの二つの方法で実行できる．

コンソールから実行するには， `EC2` の画面に行き，左のサイドバーの `Key Pairs` を選択する． 鍵の一覧が表示されるので， `HirakeGoma` とある鍵にチェックを入れ，画面右上の `Actions` から， `Delete` を実行する ([figure_title](#delete_ec2_key_pair))．

![EC2でSSH鍵ペアを削除](imgs/handson-01/ec2_keypair_console.png)

コマンドラインから実行するには，次のコマンドを使う．

```shell
$ aws ec2 delete-key-pair --key-name "HirakeGoma"
```

最後に，ローカルのコンピュータから鍵を削除する．

```shell
$ rm -f ~/.ssh/HirakeGoma.pem
```

これで，クラウドの片付けもすべて終了だ．

なお，頻繁に EC2 インスタンスを起動したりする場合は，いちいち SSH 鍵を削除する必要はない．

## 小括

ここまでが，本書の第一部の内容である． 盛りだくさんの内容であったが，ついてこれたであろうか？

[???](#chap_cloud_basics) では，クラウドの定義と用語の説明を行ったあと，なぜクラウドを使うのか，という点を議論した． 続いて [???](#sec_aws_general_introduction) では，クラウドを学ぶ具体的なプラットフォームとして AWS を取り上げ， AWS を使用するにあたり最低限必要な知識と用語の説明を行った． さらに， [Hands-on \#1: 初めての EC2 インスタンスを起動する](#sec_first_ec2) のハンズオンでは AWS CLI と AWS CDK を使って，自身のプライベートなサーバーを AWS 上に立ち上げる演習を行った．

これらを通じて，いかに簡単に (たった数行のコマンドで！) 仮想サーバーを立ち上げたり，削除したりすることができるか，体験できただろう． 筆者は，[???](#chap_cloud_basics) でクラウドの最も重要な側面はダイナミックに計算リソースを拡大・縮小できることである，と述べた． この言葉の意味が，ハンズオンを通じてより明らかになっただろうか？ ここで学んだ技術を少し応用するだけで，自分のウェブページをホストする仮想サーバーを作成したり，大量のコアを搭載した EC2 インスタンスを用意して科学計算を実行するなど，いろいろなアプリケーションが実現できる．

次章からは，今回学んだクラウドの技術を基に，より現実に即した問題を解くことを体験してもらう． お楽しみに！
