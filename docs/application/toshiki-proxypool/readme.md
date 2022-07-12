# 俊樹のProxypool

> The all-in-one crawler/scraper for crunching free proxy nodes of SS, SSR, vmess, trojan and much more based off your needs!

[![wakatime status](https://wakatime.com/badge/user/0fcd442a-865e-46f3-a0dd-ed1aa418da6b/project/9e775601-9ce8-4982-a1b8-ac352cf49df8.svg)](https://wakatime.com/badge/user/0fcd442a-865e-46f3-a0dd-ed1aa418da6b/project/9e775601-9ce8-4982-a1b8-ac352cf49df8)
[![chat on telegram](https://img.shields.io/badge/Telegram-@andatoshiki-green?style=flat&logo=telegram)](https://t.me/awesomeandatoshiki)
[![go built stats](https://img.shields.io/github/workflow/status/andatoshiki/toshiki-proxypool/Go?style=flat)](https://github.com/andatoshiki/toshiki-proxypool/actions)
[![Github Actions](https://goreportcard.com/badge/github.com/andatoshiki/toshiki-proxypool)](https://goreportcard.com/report/github.com/andatoshiki/toshiki-proxypool)
[![release](https://img.shields.io/github/release/andatoshiki/toshiki-proxypool/all.svg?style=flat)](https://github.com/andatoshiki/toshiki-proxypool/releases)
[![codeql](https://github.com/andatoshiki/toshiki-proxypool/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/andatoshiki/toshiki-proxypool/actions/workflows/codeql-analysis.yml)
[![docker build](https://github.com/andatoshiki/toshiki-proxypool/actions/workflows/docker.yml/badge.svg)](https://github.com/andatoshiki/toshiki-proxypool/actions/workflows/docker.yml)
[![github issues](https://img.shields.io/github/issues/andatoshiki/toshiki-proxypool?label=issues&logo=github)](https://github.com/andatoshiki/toshiki-proxypool/issues)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fandatoshiki%2Ftoshiki-proxypool.svg?type=small)](https://app.fossa.com/projects/git%2Bgithub.com%2Fandatoshiki%2Ftoshiki-proxypool?ref=badge_small)
[![codecov](https://codecov.io/gh/andatoshiki/toshiki-proxypool/branch/master/graph/badge.svg?token=X9A19Q2HXS)](https://codecov.io/gh/andatoshiki/toshiki-proxypool)
[![](https://data.jsdelivr.com/v1/package/gh/andatoshiki/toshiki-proxypool-ui/badge)](https://www.jsdelivr.com/package/gh/andatoshiki/toshiki-proxypool-ui)

## Read Before You Proceed

::: warning
Note that this project was **originally** released by **[sansui233](https://github.com/Sansui233/proxypool)** licensed under **[GNU](https://www.gnu.org/licenses/licenses.en.html)** for project derivational development and distribution; As required by original developers, project content contained under [proxypool](https://github.com/Sansui233/proxypool) and its affiliates **MUST** be copyleft yet pointing the credit of the original developer. *Hence this project and its assets in contained is a new branch & version published and secondarily developed from the original project*, please understand and ensure copywrites are **pointing the original author** for your own development.
:::

## What is [toshiki-proxypool](https://github.com/andatoshiki/toshiki-proxypool/)?

Toshiki's proxypool is a forked project secondarily developed/rebased project from [zu1k/proxypool](github.com/z1uk/proxypool) for crunching free SS, SSR, Vmess
Toshiki's proxypool contains a complete suite of SS, SSR, vmess, trojan node crawler written in GoLang and complied into a compiled into a Linux image for VPS deployment, you can also try deployment for Heroku, completely free to use, see the next section for further info.

### What does it support?

- **🧩 Extensible**: Support SSS, SSR, vmess, trojan & a variable types of nodes.
- **💬 Telegram**: Telegram channel sniffer & crawling.
- **🎲 Featured**: Support address subscription sniffer, analysis & crawling.
- **🌐 Web**: Open network vague crawling.
- **🕒 Cron**: Timed crawling & updates supported via `cron` job.
- **🎨 Customizable**: Customizable crawl source via configuration `yaml` file.
- **🎀 Automated**: Automatically detect uptime and availability of nodes.
- **🎯 Convenient**: Serve direct config files for clash, surge for importation.
- **🔮 Subscription**: Provide direct SS, SSR, vmess, sip002 subscription.
- **🎠 Deployable**: Easy deployment, **VPS/Heroku/Local/Docker** deployment supported.
- **🍔 Customizable**: Allowed to whitelist the countries to your demand.
- ...

## Why does [toshiki-proxypool](https://github.com/andatoshiki/toshiki-proxypool/) exists?

- ***The original author is no longer maintaining the original project, thus this project exists.***

- **Issues function will be disabled in this repository for preventing further affairs and issues from happening.**

## Installation

### [Heroku](https://www.heroku.com/)

Click the button below and fill in the basic information


其中 `DOMAIN` 需要填写为你需要绑定的域名，`CONFIG_FILE` 需要填写你的配置文件路径。

> heroku app域名为appname.herokuapp.com。项目内配置文件为./config/config.yaml

配置文件模板见 `config/config.yaml` 文件，可选项区域均可不填。完整配置选项请查看[配置文件说明](https://github.com/andatoshiki/toshiki-proxypool/wiki/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E)。


[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://signup.heroku.com/deploy?redirect-url=https%3A%2F%2Fdashboard.heroku.com%2Fnew%3Fbutton-url%3Dhttps%253A%252F%252Fgithub.com%252Fandatoshiki%252Ftoshiki-proxypool%26template%3Dhttps%253A%252F%252Fgithub.com%252Fandatoshiki%252Ftoshiki-proxypool)

> 因为爬虫程序需要持续运行，所以至少选择 $7/月 的配置
> 免费配置长时间无人访问会被heroku强制停止


### 从源码编译

需要安装Golang 

```bash
$ go get -u -v github.com/andatoshiki/toshiki-proxypool
```

运行

```bash
$ go run main.go -c ./config/config.yaml
```

编译

```bash
make
```

### 下载预编译程序

从这里下载预编译好的程序 [release](https://github.com/andatoshiki/toshiki-proxypool/releases)。

### use docker

```sh
docker pull docker.pkg.github.com/andatoshiki/toshiki-proxypool/proxypool:latest
```

## 使用

运行该程序需要具有访问完整互联网的能力。

### 修改配置文件

首先修改 config.yaml 中的必要配置信息。带有默认值的字段均可不填写。完整的配置选项见[配置文件说明](https://github.com/andatoshiki/toshiki-proxypool/wiki/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E)

### 启动程序

使用 `-c` 参数指定配置文件路径，支持http链接

```shell
proxypool -c ./config/config.yaml
```

如果需要部署到VPS，更多细节请[查看wiki](https://github.com/andatoshiki/toshiki-proxypool/wiki/%E9%83%A8%E7%BD%B2%E5%88%B0VPS-Step-by-Step)。

## Clash配置文件

远程部署时Clash配置文件访问：https://domain/clash/config

本地运行时Clash配置文件访问：http://127.0.0.1:[端口]/clash/localconfig

## 本地检查节点可用性

此项非必须。为了提高实际可用性，可选择增加一个本地服务器，检测远程proxypool节点在本地的可用性并提供配置，见[proxypoolCheck](https://github.com/andatoshiki/toshiki-proxypoolCheck)。

## screenshot

![](https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/screenshot.png)

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fandatoshiki%2Ftoshiki-proxypool.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fandatoshiki%2Ftoshiki-proxypool?ref=badge_shield)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fandatoshiki%2Ftoshiki-proxypool.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fandatoshiki%2Ftoshiki-proxypool?ref=badge_large)

### required

## 333

## 3223

### 234234234

### 23982934923

### 23982934923

### 23982934923

### 23982934923

$$
\left(\sum_{i, j=1}^{n} \frac{\left(S_{t}\right)_{i j}\left\|W_{t+1}^{T} x_{i}-W_{t+1}^{T} x_{j}\right\|_{2}^{2}}{2\left\|W_{t}^{T} x_{i}-W_{t}^{T} x_{j}\right\|_{2}}-\right.
$$

$$
\begin{aligned}
&\iint_{S} P \mathbf{i} \cdot \mathbf{n} d S=\iiint_{E} \frac{\partial P}{\partial x} d V \\
&\iint_{S} Q \mathbf{j} \cdot \mathbf{n} d S=\iiint_{E} \frac{\partial Q}{\partial y} d V \\
&\iint_{S} R \mathbf{k} \cdot \mathbf{n} d S=\iiint_{E} \frac{\partial R}{\partial z} d V
\end{aligned}
$$

$$
\begin{aligned}
f^{\prime}(x) &=\lim _{h \rightarrow 0} \frac{\left((x+h)^{2}-2(x+h)\right)-\left(x^{2}-2 x\right)}{h} \\
&=\lim _{h \rightarrow 0} \frac{x^{2}+2 x h+h^{2}-2 x-2 h-x^{2}+2 x}{h} \\
&=\lim _{h \rightarrow 0} \frac{2 x h-2 h+h^{2}}{h} \\
&=\lim _{h \rightarrow 0} \frac{h(2 x-2+h)}{h} \\
&=\lim _{h \rightarrow 0}(2 x-2+h) \\
&=2 x-2
\end{aligned}
$$