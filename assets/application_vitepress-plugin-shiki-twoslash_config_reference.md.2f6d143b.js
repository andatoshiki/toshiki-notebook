import{_ as n,c as l,o as e,z as s,a,R as o}from"./chunks/framework.ade46834.js";const v=JSON.parse('{"title":"Config","description":"You can configure Twoslash to change code example output.","frontmatter":{"description":"You can configure Twoslash to change code example output.","title":"Config"},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/config/reference.md","filePath":"application/vitepress-plugin-shiki-twoslash/config/reference.md","lastUpdated":1694652899000}'),p={name:"application/vitepress-plugin-shiki-twoslash/config/reference.md"},t=s("h1",{id:"config",tabindex:"-1"},[a("Config "),s("a",{class:"header-anchor",href:"#config","aria-label":'Permalink to "Config"'},"​")],-1),c=s("h2",{id:"overview",tabindex:"-1"},[a("Overview "),s("a",{class:"header-anchor",href:"#overview","aria-label":'Permalink to "Overview"'},"​")],-1),r=s("p",null,[a("You can configure VitePress Twoslash using the "),s("code",null,"twoslash"),a(" property added to "),s("code",null,"defineConfig"),a(".")],-1),i=s("div",{class:"language-ts vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki solarized-dark twoslash lsp",style:{"background-color":"#002B36",color:"#839496"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#586E75"}},"// .vitepress/config.[ext]")]),s("div",{class:"line"},[s("span",{style:{color:"#859900"}},"import"),s("span",{style:{color:"#839496"}}," { "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) function defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig")]),s("span",{style:{color:"#839496"}}," } "),s("span",{style:{color:"#859900"}},"from"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},"'vitepress'")]),s("div",{class:"line"},[s("span",{style:{color:"#859900"}},"import"),s("span",{style:{color:"#839496"}}," { "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) function withTwoslash(config: UserConfig<DefaultTheme.Config>): Promise<UserConfig<DefaultTheme.Config>>
import withTwoslash`},"withTwoslash")]),s("span",{style:{color:"#839496"}},", "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) type TwoslashConfigSettings = any
import TwoslashConfigSettings`},"TwoslashConfigSettings")]),s("span",{style:{color:"#839496"}}," } "),s("span",{style:{color:"#859900"}},"from"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},"'@andatoshiki/vitepress-plugin-shiki-twoslash'")]),s("div",{class:"line"}," "),s("div",{class:"line"},[s("span",{style:{color:"#859900"}},"export"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"default"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) withTwoslash(config: UserConfig<DefaultTheme.Config>): Promise<UserConfig<DefaultTheme.Config>>
import withTwoslash`},"withTwoslash")]),s("span",{style:{color:"#839496"}},"(")]),s("div",{class:"line"},[s("span",{style:{color:"#839496"}},"    "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig")]),s("span",{style:{color:"#839496"}},"({")]),s("div",{class:"line"},[s("span",{style:{color:"#839496"}},[a("        "),s("data-lsp",{lsp:"(property) UserConfig<DefaultTheme.Config>.twoslash?: any"},"twoslash"),a(": {")])]),s("div",{class:"line"},[s("span",{style:{color:"#839496"}},"            "),s("span",{style:{color:"#586E75"}},"// Your VitePress Twoslash options")]),s("div",{class:"line"},[s("span",{style:{color:"#839496"}},"        },")]),s("div",{class:"line"},[s("span",{style:{color:"#839496"}},"    })")]),s("div",{class:"line"},[s("span",{style:{color:"#839496"}},")")])])])]),s("pre",{class:"shiki solarized-light twoslash lsp",style:{"background-color":"#FDF6E3",color:"#657B83"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#93A1A1"}},"// .vitepress/config.[ext]")]),s("div",{class:"line"},[s("span",{style:{color:"#859900"}},"import"),s("span",{style:{color:"#657B83"}}," { "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) function defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig")]),s("span",{style:{color:"#657B83"}}," } "),s("span",{style:{color:"#859900"}},"from"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},"'vitepress'")]),s("div",{class:"line"},[s("span",{style:{color:"#859900"}},"import"),s("span",{style:{color:"#657B83"}}," { "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) function withTwoslash(config: UserConfig<DefaultTheme.Config>): Promise<UserConfig<DefaultTheme.Config>>
import withTwoslash`},"withTwoslash")]),s("span",{style:{color:"#657B83"}},", "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) type TwoslashConfigSettings = any
import TwoslashConfigSettings`},"TwoslashConfigSettings")]),s("span",{style:{color:"#657B83"}}," } "),s("span",{style:{color:"#859900"}},"from"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},"'@andatoshiki/vitepress-plugin-shiki-twoslash'")]),s("div",{class:"line"}," "),s("div",{class:"line"},[s("span",{style:{color:"#859900"}},"export"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"default"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) withTwoslash(config: UserConfig<DefaultTheme.Config>): Promise<UserConfig<DefaultTheme.Config>>
import withTwoslash`},"withTwoslash")]),s("span",{style:{color:"#657B83"}},"(")]),s("div",{class:"line"},[s("span",{style:{color:"#657B83"}},"    "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig")]),s("span",{style:{color:"#657B83"}},"({")]),s("div",{class:"line"},[s("span",{style:{color:"#657B83"}},[a("        "),s("data-lsp",{lsp:"(property) UserConfig<DefaultTheme.Config>.twoslash?: any"},"twoslash"),a(": {")])]),s("div",{class:"line"},[s("span",{style:{color:"#657B83"}},"            "),s("span",{style:{color:"#93A1A1"}},"// Your VitePress Twoslash options")]),s("div",{class:"line"},[s("span",{style:{color:"#657B83"}},"        },")]),s("div",{class:"line"},[s("span",{style:{color:"#657B83"}},"    })")]),s("div",{class:"line"},[s("span",{style:{color:"#657B83"}},")")])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),d=o(`<div class="info custom-block"><p class="custom-block-title">INFO</p><p>In addition to the below config options, VitePress Twoslash also supports all <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer"><code>shiki</code></a> <code>HighlighterOptions</code> and <a href="https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ts-twoslasher" target="_blank" rel="noreferrer"><code>@typescript/twoslash</code></a> <code>TwoSlashOptions</code>.</p></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><h3 id="addtrybutton" tabindex="-1"><code>addTryButton</code> <a class="header-anchor" href="#addtrybutton" aria-label="Permalink to &quot;\`addTryButton\`&quot;">​</a></h3><p>A way to turn on the try buttons seen on the TS website.</p><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#839496;"> </span><span style="color:#859900;">default</span><span style="color:#839496;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#839496;">            addTryButton: </span><span style="color:#B58900;">true</span><span style="color:#839496;">, </span></span>
<span class="line"><span style="color:#839496;">        },</span></span>
<span class="line"><span style="color:#839496;">    })</span></span>
<span class="line"><span style="color:#839496;">)</span></span></code></pre><pre class="shiki solarized-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#657B83;"> </span><span style="color:#859900;">default</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#657B83;">(</span></span>
<span class="line"><span style="color:#657B83;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#657B83;">({</span></span>
<span class="line"><span style="color:#657B83;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#657B83;">            addTryButton: </span><span style="color:#B58900;">true</span><span style="color:#657B83;">, </span></span>
<span class="line"><span style="color:#657B83;">        },</span></span>
<span class="line"><span style="color:#657B83;">    })</span></span>
<span class="line"><span style="color:#657B83;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="alwayraisefortwoslashexceptions" tabindex="-1"><code>alwayRaiseForTwoslashExceptions</code> <a class="header-anchor" href="#alwayraisefortwoslashexceptions" aria-label="Permalink to &quot;\`alwayRaiseForTwoslashExceptions\`&quot;">​</a></h3><p>Instead of showing twoslash exceptions inline, throw the entire process like it will on CI.</p><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#839496;"> </span><span style="color:#859900;">default</span><span style="color:#839496;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#839496;">            alwayRaiseForTwoslashExceptions: </span><span style="color:#B58900;">true</span><span style="color:#839496;">, </span></span>
<span class="line"><span style="color:#839496;">        },</span></span>
<span class="line"><span style="color:#839496;">    })</span></span>
<span class="line"><span style="color:#839496;">)</span></span></code></pre><pre class="shiki solarized-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#657B83;"> </span><span style="color:#859900;">default</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#657B83;">(</span></span>
<span class="line"><span style="color:#657B83;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#657B83;">({</span></span>
<span class="line"><span style="color:#657B83;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#657B83;">            alwayRaiseForTwoslashExceptions: </span><span style="color:#B58900;">true</span><span style="color:#657B83;">, </span></span>
<span class="line"><span style="color:#657B83;">        },</span></span>
<span class="line"><span style="color:#657B83;">    })</span></span>
<span class="line"><span style="color:#657B83;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="disableimplicitreactimport" tabindex="-1"><code>disableImplicitReactImport</code> <a class="header-anchor" href="#disableimplicitreactimport" aria-label="Permalink to &quot;\`disableImplicitReactImport\`&quot;">​</a></h3><p>A way to disable implicit React imports on tsx/jsx language codeblocks</p><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#839496;"> </span><span style="color:#859900;">default</span><span style="color:#839496;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#839496;">            disableImplicitReactImport: </span><span style="color:#B58900;">true</span><span style="color:#839496;">, </span></span>
<span class="line"><span style="color:#839496;">        },</span></span>
<span class="line"><span style="color:#839496;">    })</span></span>
<span class="line"><span style="color:#839496;">)</span></span></code></pre><pre class="shiki solarized-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#657B83;"> </span><span style="color:#859900;">default</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#657B83;">(</span></span>
<span class="line"><span style="color:#657B83;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#657B83;">({</span></span>
<span class="line"><span style="color:#657B83;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#657B83;">            disableImplicitReactImport: </span><span style="color:#B58900;">true</span><span style="color:#657B83;">, </span></span>
<span class="line"><span style="color:#657B83;">        },</span></span>
<span class="line"><span style="color:#657B83;">    })</span></span>
<span class="line"><span style="color:#657B83;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="includejsdocinhover" tabindex="-1"><code>includeJSDocInHover</code> <a class="header-anchor" href="#includejsdocinhover" aria-label="Permalink to &quot;\`includeJSDocInHover\`&quot;">​</a></h3><p>Include JSDoc comments in the hovers.</p><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#839496;"> </span><span style="color:#859900;">default</span><span style="color:#839496;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#839496;">            includeJSDocInHover: </span><span style="color:#B58900;">true</span><span style="color:#839496;">, </span></span>
<span class="line"><span style="color:#839496;">        },</span></span>
<span class="line"><span style="color:#839496;">    })</span></span>
<span class="line"><span style="color:#839496;">)</span></span></code></pre><pre class="shiki solarized-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#657B83;"> </span><span style="color:#859900;">default</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#657B83;">(</span></span>
<span class="line"><span style="color:#657B83;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#657B83;">({</span></span>
<span class="line"><span style="color:#657B83;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#657B83;">            includeJSDocInHover: </span><span style="color:#B58900;">true</span><span style="color:#657B83;">, </span></span>
<span class="line"><span style="color:#657B83;">        },</span></span>
<span class="line"><span style="color:#657B83;">    })</span></span>
<span class="line"><span style="color:#657B83;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="ignorecodeblockswithcodefencemeta" tabindex="-1"><code>ignoreCodeblocksWithCodefenceMeta</code> <a class="header-anchor" href="#ignorecodeblockswithcodefencemeta" aria-label="Permalink to &quot;\`ignoreCodeblocksWithCodefenceMeta\`&quot;">​</a></h3><p>Ignore transforming certain code blocks.</p><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#839496;"> </span><span style="color:#859900;">default</span><span style="color:#839496;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#839496;">            ignoreCodeblocksWithCodefenceMeta: </span><span style="color:#B58900;">true</span><span style="color:#839496;">, </span></span>
<span class="line"><span style="color:#839496;">        },</span></span>
<span class="line"><span style="color:#839496;">    })</span></span>
<span class="line"><span style="color:#839496;">)</span></span></code></pre><pre class="shiki solarized-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#657B83;"> </span><span style="color:#859900;">default</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#657B83;">(</span></span>
<span class="line"><span style="color:#657B83;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#657B83;">({</span></span>
<span class="line"><span style="color:#657B83;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#657B83;">            ignoreCodeblocksWithCodefenceMeta: </span><span style="color:#B58900;">true</span><span style="color:#657B83;">, </span></span>
<span class="line"><span style="color:#657B83;">        },</span></span>
<span class="line"><span style="color:#657B83;">    })</span></span>
<span class="line"><span style="color:#657B83;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="wrapfragments" tabindex="-1"><code>wrapFragments</code> <a class="header-anchor" href="#wrapfragments" aria-label="Permalink to &quot;\`wrapFragments\`&quot;">​</a></h3><p>A way to add a div wrapper for multi-theme outputs.</p><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#839496;"> </span><span style="color:#859900;">default</span><span style="color:#839496;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#839496;">(</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#839496;">({</span></span>
<span class="line"><span style="color:#839496;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#839496;">            wrapFragments: </span><span style="color:#B58900;">true</span><span style="color:#839496;">, </span></span>
<span class="line"><span style="color:#839496;">        },</span></span>
<span class="line"><span style="color:#839496;">    })</span></span>
<span class="line"><span style="color:#839496;">)</span></span></code></pre><pre class="shiki solarized-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#859900;">export</span><span style="color:#657B83;"> </span><span style="color:#859900;">default</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">withTwoslash</span><span style="color:#657B83;">(</span></span>
<span class="line"><span style="color:#657B83;">    </span><span style="color:#268BD2;">defineConfig</span><span style="color:#657B83;">({</span></span>
<span class="line"><span style="color:#657B83;">        twoslash: {</span></span>
<span class="line has-focus"><span style="color:#657B83;">            wrapFragments: </span><span style="color:#B58900;">true</span><span style="color:#657B83;">, </span></span>
<span class="line"><span style="color:#657B83;">        },</span></span>
<span class="line"><span style="color:#657B83;">    })</span></span>
<span class="line"><span style="color:#657B83;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,26),y=[t,c,r,i,d];function h(u,f,g,b,m,B){return e(),l("div",null,y)}const C=n(p,[["render",h]]);export{v as __pageData,C as default};