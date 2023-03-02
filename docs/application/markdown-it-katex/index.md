---
title: '@andatoshiki/markdown-it-katex'
description: Documentation for Toshiki's markdown-it-katex fork as an alternative for GitHub readme mirror in case site inaccessibility due to SNI interference by GFW for users in China
---

# @andatoshiki/markdown-it-katex

> Add graceful $\KaTeX$ rendering to your Markdown like a charm with `markdown-it` plugin.

## 1: Installation

Before you start using this plugin, make sure you have already installed the default `markdown-it` parser; if not, please run the following command or refer to the official [`markdown-it`](https://github.com/markdown-it/markdown-it#install) documentation.

```sh
$ npm install markdown-it --save
```

First install package with your preferred package manager (npm, yarn, pnpm), or include javascript before the closing `</body>` for markdown-it-katex's core utils to be loaded for the static page.

::: code-group

```sh [npm]
$ npm install -D @andatoshiki/markdown-it-katex
```

```sh [yarn]
$ yarn add --dev @andatoshiki/markdown-it-katex
```

```sh [pnpm]
$ pnpm add -D @andatoshiki/markdown-it-katex
```

```html [cdn]
<!-- your other body contents ... -->
    <script src="https://unpkg.com/@andatoshiki/markdown-it-katex@0.0.3/markdown-it-katex.min.js"></script>
</body>
```

:::

Including KaTeX CSS is necessary in the way you are convenient with, either link the stylesheet from a third party CDN into the local HTML `<head>` tag or import it into a currently linked CSS stylesheets to enable styles for KaTeX globally as follows,

Or, you could clone or download the entire repository source of [KaTeX](https://github.com/katex/katex) and self load the fonts/styles/scripts locally, but if you prefer loading from third-party CDN with faster load speed when deployed to save your server resources, the following CDN links might be your choice, you can always switch to other platforms based on your need.

::: code-group

```html [jsdelivr]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16/dist/katex.min.css" />
```

```html [jsd-gcore]
<link rel="stylesheet" href="https://gcore.jsdelivr.net/npm/katex@0.16/dist/katex.min.css" />
```

```html [jsd-fastly]
<link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/katex@0.16/dist/katex.min.css" />
```

```html [cdnjs]
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.0/katex.min.css" />
```

```html [unpkg]
<link rel="stylesheet" href="https://unpkg.com/katex@0.16.0/dist/katex.min.css" />
```

```scss [scss or css]
// ... your other styles
@import 'https://cdnjs.toshiki.dev/ajax/libs/KaTeX/0.16.0/katex.min.css';
```

:::

If you are using the default markdown-it parser, I personally recommend that you use the GitHub markdown CSS ([github-markdown-css](https://github.com/sindresorhus/github-markdown-css/)) for styling your HTML output with a similar style replica of GitHub's markdown styling to your familiarity.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@5.2.0/github-markdown.min.css" />
```

This forked project maintained by [Anda Toshiki](https://github.com/andatoshiki) comes with the update of KaTeX components with higher style version support (this documentation uses KaTeX version `16.0`, without hassels), later versions may works, but no guarantees are given by the developers, if you are not obsessed with the latest released version, `16.0` may fits your need for loading KaTeX on a personal blog site or small educational sites; yet it should work fully functionally.

::: danger Warning

Since this project is a fork of the [original](https://www.npmjs.com/package/markdown-it-katex) markdown-it-katex project that hasn't been receiving any active updates of its code source for years, the latest katex style version supported is somewhere around `ver. 0.9.0` which clearly is outdated and results in broken styles with overflowing and other potential bug presents.

:::

## 2: Usage

RTo render equations, you need to include the `markdown-it-katex` plugin in the `markdown-it` components in your JavaScript or TypeScript file as follows,

::: code-group

```js [js]
var md = require('markdown-it')(),
    mk = require('andatoshiki/markdown-it-katex')

md.use(mk)

// double backslash is required for javascript strings, but not html input
var result = md.render('# Math Rulez! \n  $\\sqrt{3x-1}+(1+x)^2$')
```

```ts [ts]
import * as mk from 'markdown-it-katex'
import * as MarkdownIt from '@andatoshiki/markdown-it'

const md = new MarkdownIt()
md.use(mk)

// double backslash is not required for TypeScript strings or template literals
const result = md.render('# Math Rulez! \n  $\\sqrt{3x-1}+(1+x)^2$')
```

:::

### 3: Configuration

The following list of variable are the customizable components of `markdown-it-katex`, adjust to your needs,

-   `katex`: You can change KaTeX version by passing the instance.
-   `blockClass`: Class added to KaTeX block.
-   Apply any other [KaTeX options](https://katex.org/docs/options.html) if needed as a regard to the docs

```js
md.use(mk, { blockClass: 'math-block', errorColor: ' #cc0000' })
```

## 4: Examples

### 4.1: Inline math

To render your LaTeX equations inline, enclose them with a single dollar sign `$` on each side of the equation as follows,

```tex
$\sqrt{3x-1}+(1+x)^2$
```

rendered output equation as follows, $\sqrt{3x-1}+(1+x)^2$.

### 4.2: Blocked math

To render blocks, use double dollar sign (`$$`). This mode utilizes larger symbols and centers the result as a block displayed as a `<div>` block in HTML output, as follows,

```tex
$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}
$$
```

the above block equation renders the LaTeX equation as a block with output as follows,

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}
$$

## 5: Syntax

Math parsing in markdown is designed to comply with the "latex-in-markdown" conventions set by [Pandoc](https://pandoc.org),

Anything between two `$` characters will be treated as TeX math. The opening `$` must have a non-space character immediately to its right, while the closing $ must have a non-space character immediately to its left, and must not be followed immediately by a digit. Thus, `$20,000` and `$30,000` won’t parse as math. If for some reason you need to enclose text in literal `$` characters, backslash-escape them and they won’t be treated as math delimiters.

> -   Pandoc. “Pandoc - Pandoc User’s Guide.” Pandoc.org, pandoc.org/MANUAL.html#math. Accessed 2 Mar. 2023.

## 6: Supported math syntax

KaTeX is a popular, open-source math typesetting library that is based on TeX and LaTeX. It is designed to be easy to use, and to provide high-quality mathematical typesetting for web applications, refer to the following pages of the document for the full list of function support in KaTeX.

::: info Note

Due to the large number of equations rendered on the next following pages, it might takes time to entirely load the webpage, please be patient if the webpage seems to not respond; or it could be a result of slow network connection to correctly render all the equation that causes broken formulas, refresh the page to proceed.

:::
