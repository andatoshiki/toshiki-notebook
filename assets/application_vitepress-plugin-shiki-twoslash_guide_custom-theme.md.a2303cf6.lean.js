import{_ as o}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.65c6b98c.js";import{_ as e,o as r,c,k as s,a,E as t,O as l}from"./chunks/framework.c989bd33.js";import"./chunks/commonjsHelpers.725317a4.js";const m=JSON.parse('{"title":"Using a Custom Theme","description":"Customize the Twoslash interface to match your theme.","frontmatter":{"description":"Customize the Twoslash interface to match your theme.","title":"Using a Custom Theme"},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/guide/custom-theme.md","filePath":"application/vitepress-plugin-shiki-twoslash/guide/custom-theme.md","lastUpdated":1726418178000}'),y={name:"application/vitepress-plugin-shiki-twoslash/guide/custom-theme.md"};function i(C,n,A,d,D,h){const p=o;return r(),c("div",null,[n[0]||(n[0]=s("h1",{id:"using-a-custom-theme",tabindex:"-1"},[a("Using a Custom Theme "),s("a",{class:"header-anchor",href:"#using-a-custom-theme","aria-label":'Permalink to "Using a Custom Theme"'},"​")],-1)),t(p,{readTime:"2",words:"362"}),n[1]||(n[1]=l(`<p>Twoslash uses your <code>markdown.theme</code> for syntax highlighting, but there are a few other things you can do to customize the look and feel of your code examples — particulary the generated Twoslash interface.</p><h2 id="css-variables" tabindex="-1">CSS Variables <a class="header-anchor" href="#css-variables" aria-label="Permalink to &quot;CSS Variables&quot;">​</a></h2><p>The following CSS variables (and their defaults) are available to style Twoslash interface:</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#6CB6FF;">:root</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-annotation-fg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-text-1</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-brand</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-brand</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-error-bg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-red-dimm-2</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-error-fg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-text-1</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-logger-error-bg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-red-dimm-2</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-logger-error-fg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-red-dark</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-logger-fg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-text-1</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-logger-log-bg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-mute-dark</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-logger-log-fg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-gray</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-logger-warn-bg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-yellow-dimm-2</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-logger-warn-fg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-yellow-dark</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-lsp-bg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-bg-elv</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-lsp-border</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-divider</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-lsp-fg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-text-1</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-lsp-underline</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-text-2</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-lsp-shadow</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-shadow-2</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-query-bg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-mute-darker</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-query-fg-2</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-text-2</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">--vp-twoslash-c-query-fg</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">var</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">--vp-c-text-1</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">:root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-annotation-fg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-text-1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-brand</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-brand</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-error-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-red-dimm-2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-error-fg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-text-1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-logger-error-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-red-dimm-2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-logger-error-fg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-red-dark</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-logger-fg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-text-1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-logger-log-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-mute-dark</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-logger-log-fg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-gray</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-logger-warn-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-yellow-dimm-2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-logger-warn-fg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-yellow-dark</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-lsp-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-bg-elv</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-lsp-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-divider</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-lsp-fg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-text-1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-lsp-underline</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-text-2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-lsp-shadow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-shadow-2</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-query-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-mute-darker</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-query-fg-2</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-text-2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">--vp-twoslash-c-query-fg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-text-1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="dark-light-theme" tabindex="-1">Dark/Light Theme <a class="header-anchor" href="#dark-light-theme" aria-label="Permalink to &quot;Dark/Light Theme&quot;">​</a></h2><p>If you pass a responsive theme to <code>markdown.theme</code>, you probably also want to hide/show the correct theme based on the user&#39;s settings.</p>`,6)),n[2]||(n[2]=s("div",{class:"language-ts vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark-dimmed twoslash lsp",style:{"background-color":"#22272e",color:"#adbac7"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"export"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#F47067"}},"default"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#DCBDFB"}},[s("data-lsp",{lsp:`(alias) defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig")]),s("span",{style:{color:"#F69D50"}},"({")]),s("div",{class:"line"},[s("span",{style:{color:"#F69D50"}},"    "),s("span",{style:{color:"#ADBAC7"}},[s("data-lsp",{lsp:"(property) UserConfig<DefaultTheme.Config>.markdown?: MarkdownOptions | undefined"},"markdown"),a(": {")])]),s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},[a("        "),s("data-lsp",{lsp:"(property) MarkdownOptions.theme?: any"},"theme"),a(": { "),s("data-lsp",{lsp:"(property) dark: string"},"dark"),a(": ")]),s("span",{style:{color:"#96D0FF"}},"'vitesse-dark'"),s("span",{style:{color:"#ADBAC7"}},[a(", "),s("data-lsp",{lsp:"(property) light: string"},"light"),a(": ")]),s("span",{style:{color:"#96D0FF"}},"'vitesse-light'"),s("span",{style:{color:"#ADBAC7"}}," },")]),s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }"),s("span",{style:{color:"#F69D50"}},",")]),s("div",{class:"line"},[s("span",{style:{color:"#F69D50"}},"})")])])])]),s("pre",{class:"shiki github-light twoslash lsp",style:{"background-color":"#fff",color:"#24292e"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},[s("data-lsp",{lsp:`(alias) defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig")]),s("span",{style:{color:"#24292E"}},"({")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},[a("    "),s("data-lsp",{lsp:"(property) UserConfig<DefaultTheme.Config>.markdown?: MarkdownOptions | undefined"},"markdown"),a(": {")])]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},[a("        "),s("data-lsp",{lsp:"(property) MarkdownOptions.theme?: any"},"theme"),a(": { "),s("data-lsp",{lsp:"(property) dark: string"},"dark"),a(": ")]),s("span",{style:{color:"#032F62"}},"'vitesse-dark'"),s("span",{style:{color:"#24292E"}},[a(", "),s("data-lsp",{lsp:"(property) light: string"},"light"),a(": ")]),s("span",{style:{color:"#032F62"}},"'vitesse-light'"),s("span",{style:{color:"#24292E"}}," },")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},"})")])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1)),n[3]||(n[3]=l(`<p>You can do this with the following CSS:</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#768390;">/*</span></span>
<span class="line"><span style="color:#768390;"> * Hide block based on theme</span></span>
<span class="line"><span style="color:#768390;"> * \`[class*=&#39;-dark&#39;]\` matches \`&#39;vitesse-dark&#39;\`</span></span>
<span class="line"><span style="color:#768390;"> * \`[class*=&#39;-light&#39;]\` matches \`&#39;vitesse-light&#39;\`</span></span>
<span class="line"><span style="color:#768390;"> */</span></span>
<span class="line"><span style="color:#8DDB8C;">html</span><span style="color:#6CB6FF;">:not</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">.dark</span><span style="color:#ADBAC7;">) </span><span style="color:#8DDB8C;">pre</span><span style="color:#6CB6FF;">.shiki</span><span style="color:#ADBAC7;">[</span><span style="color:#6CB6FF;">class</span><span style="color:#F47067;">*=</span><span style="color:#96D0FF;">&#39;-dark&#39;</span><span style="color:#ADBAC7;">] {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">display</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">none</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#8DDB8C;">html</span><span style="color:#6CB6FF;">:not</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">.dark</span><span style="color:#ADBAC7;">) </span><span style="color:#8DDB8C;">pre</span><span style="color:#6CB6FF;">.shiki</span><span style="color:#ADBAC7;">[</span><span style="color:#6CB6FF;">class</span><span style="color:#F47067;">*=</span><span style="color:#96D0FF;">&#39;-light&#39;</span><span style="color:#ADBAC7;">] {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">display</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">block</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#8DDB8C;">html</span><span style="color:#6CB6FF;">.dark</span><span style="color:#ADBAC7;"> </span><span style="color:#8DDB8C;">pre</span><span style="color:#6CB6FF;">.shiki</span><span style="color:#ADBAC7;">[</span><span style="color:#6CB6FF;">class</span><span style="color:#F47067;">*=</span><span style="color:#96D0FF;">&#39;-dark&#39;</span><span style="color:#ADBAC7;">] {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">display</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">block</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#8DDB8C;">html</span><span style="color:#6CB6FF;">.dark</span><span style="color:#ADBAC7;"> </span><span style="color:#8DDB8C;">pre</span><span style="color:#6CB6FF;">.shiki</span><span style="color:#ADBAC7;">[</span><span style="color:#6CB6FF;">class</span><span style="color:#F47067;">*=</span><span style="color:#96D0FF;">&#39;-light&#39;</span><span style="color:#ADBAC7;">] {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">display</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">none</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * Hide block based on theme</span></span>
<span class="line"><span style="color:#6A737D;"> * \`[class*=&#39;-dark&#39;]\` matches \`&#39;vitesse-dark&#39;\`</span></span>
<span class="line"><span style="color:#6A737D;"> * \`[class*=&#39;-light&#39;]\` matches \`&#39;vitesse-light&#39;\`</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#22863A;">html</span><span style="color:#6F42C1;">:not</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">.dark</span><span style="color:#24292E;">) </span><span style="color:#22863A;">pre</span><span style="color:#6F42C1;">.shiki</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">*=</span><span style="color:#032F62;">&#39;-dark&#39;</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#22863A;">html</span><span style="color:#6F42C1;">:not</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">.dark</span><span style="color:#24292E;">) </span><span style="color:#22863A;">pre</span><span style="color:#6F42C1;">.shiki</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">*=</span><span style="color:#032F62;">&#39;-light&#39;</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#22863A;">html</span><span style="color:#6F42C1;">.dark</span><span style="color:#24292E;"> </span><span style="color:#22863A;">pre</span><span style="color:#6F42C1;">.shiki</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">*=</span><span style="color:#032F62;">&#39;-dark&#39;</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#22863A;">html</span><span style="color:#6F42C1;">.dark</span><span style="color:#24292E;"> </span><span style="color:#22863A;">pre</span><span style="color:#6F42C1;">.shiki</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">*=</span><span style="color:#032F62;">&#39;-light&#39;</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,2))])}const E=e(y,[["render",i]]);export{m as __pageData,E as default};