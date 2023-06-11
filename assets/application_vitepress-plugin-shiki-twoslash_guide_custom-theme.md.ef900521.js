import{_ as l,c as p,o as e,R as n,z as s,a}from"./chunks/framework.ade46834.js";const u=JSON.parse('{"title":"Using a Custom Theme","description":"Customize the Twoslash interface to match your theme.","frontmatter":{"description":"Customize the Twoslash interface to match your theme.","title":"Using a Custom Theme"},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/guide/custom-theme.md","filePath":"application/vitepress-plugin-shiki-twoslash/guide/custom-theme.md","lastUpdated":1686500894000}'),o={name:"application/vitepress-plugin-shiki-twoslash/guide/custom-theme.md"},r=n(`<h1 id="using-a-custom-theme" tabindex="-1">Using a Custom Theme <a class="header-anchor" href="#using-a-custom-theme" aria-label="Permalink to &quot;Using a Custom Theme&quot;">​</a></h1><p>Twoslash uses your <code>markdown.theme</code> for syntax highlighting, but there are a few other things you can do to customize the look and feel of your code examples — particulary the generated Twoslash interface.</p><h2 id="css-variables" tabindex="-1">CSS Variables <a class="header-anchor" href="#css-variables" aria-label="Permalink to &quot;CSS Variables&quot;">​</a></h2><p>The following CSS variables (and their defaults) are available to style Twoslash interface:</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#93A1A1;">:root</span><span style="color:#839496;"> {</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-annotation-fg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-text-1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-brand: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-brand);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-error-bg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-red-dimm-2);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-error-fg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-text-1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-logger-error-bg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-red-dimm-2);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-logger-error-fg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-red-dark);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-logger-fg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-text-1);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-logger-log-bg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-mute-dark);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-logger-log-fg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-gray);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-logger-warn-bg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-yellow-dimm-2);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-logger-warn-fg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-yellow-dark);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-lsp-bg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-bg-elv);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-lsp-border: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-divider);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-lsp-fg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-text-1);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-lsp-underline: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-text-2);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-lsp-shadow: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-shadow-2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-query-bg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-mute-darker);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-query-fg-2: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-text-2);</span></span>
<span class="line"><span style="color:#839496;">    --vp-twoslash-c-query-fg: </span><span style="color:#268BD2;">var</span><span style="color:#839496;">(--vp-c-text-1);</span></span>
<span class="line"><span style="color:#839496;">}</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#93A1A1;">:root</span><span style="color:#657B83;"> {</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-annotation-fg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-text-1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-brand: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-brand);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-error-bg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-red-dimm-2);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-error-fg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-text-1);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-logger-error-bg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-red-dimm-2);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-logger-error-fg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-red-dark);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-logger-fg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-text-1);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-logger-log-bg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-mute-dark);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-logger-log-fg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-gray);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-logger-warn-bg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-yellow-dimm-2);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-logger-warn-fg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-yellow-dark);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-lsp-bg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-bg-elv);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-lsp-border: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-divider);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-lsp-fg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-text-1);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-lsp-underline: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-text-2);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-lsp-shadow: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-shadow-2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-query-bg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-mute-darker);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-query-fg-2: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-text-2);</span></span>
<span class="line"><span style="color:#657B83;">    --vp-twoslash-c-query-fg: </span><span style="color:#268BD2;">var</span><span style="color:#657B83;">(--vp-c-text-1);</span></span>
<span class="line"><span style="color:#657B83;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="dark-light-theme" tabindex="-1">Dark/Light Theme <a class="header-anchor" href="#dark-light-theme" aria-label="Permalink to &quot;Dark/Light Theme&quot;">​</a></h2><p>If you pass a responsive theme to <code>markdown.theme</code>, you probably also want to hide/show the correct theme based on the user&#39;s settings.</p>`,7),t=s("div",{class:"language-ts vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki solarized-dark twoslash lsp",style:{"background-color":"#002B36",color:"#839496"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#859900"}},"export"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"default"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig")]),s("span",{style:{color:"#839496"}},"({")]),s("div",{class:"line"},[s("span",{style:{color:"#839496"}},[a("    "),s("data-lsp",{lsp:"(property) UserConfig<DefaultTheme.Config>.markdown?: MarkdownOptions | undefined"},"markdown"),a(": {")])]),s("div",{class:"line"},[s("span",{style:{color:"#839496"}},[a("        "),s("data-lsp",{lsp:"(property) MarkdownOptions.theme?: any"},"theme"),a(": { "),s("data-lsp",{lsp:"(property) dark: string"},"dark"),a(": ")]),s("span",{style:{color:"#2AA198"}},"'vitesse-dark'"),s("span",{style:{color:"#839496"}},[a(", "),s("data-lsp",{lsp:"(property) light: string"},"light"),a(": ")]),s("span",{style:{color:"#2AA198"}},"'vitesse-light'"),s("span",{style:{color:"#839496"}}," },")]),s("div",{class:"line"},[s("span",{style:{color:"#839496"}},"    },")]),s("div",{class:"line"},[s("span",{style:{color:"#839496"}},"})")])])])]),s("pre",{class:"shiki solarized-light twoslash lsp",style:{"background-color":"#FDF6E3",color:"#657B83"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#859900"}},"export"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"default"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:`(alias) defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig")]),s("span",{style:{color:"#657B83"}},"({")]),s("div",{class:"line"},[s("span",{style:{color:"#657B83"}},[a("    "),s("data-lsp",{lsp:"(property) UserConfig<DefaultTheme.Config>.markdown?: MarkdownOptions | undefined"},"markdown"),a(": {")])]),s("div",{class:"line"},[s("span",{style:{color:"#657B83"}},[a("        "),s("data-lsp",{lsp:"(property) MarkdownOptions.theme?: any"},"theme"),a(": { "),s("data-lsp",{lsp:"(property) dark: string"},"dark"),a(": ")]),s("span",{style:{color:"#2AA198"}},"'vitesse-dark'"),s("span",{style:{color:"#657B83"}},[a(", "),s("data-lsp",{lsp:"(property) light: string"},"light"),a(": ")]),s("span",{style:{color:"#2AA198"}},"'vitesse-light'"),s("span",{style:{color:"#657B83"}}," },")]),s("div",{class:"line"},[s("span",{style:{color:"#657B83"}},"    },")]),s("div",{class:"line"},[s("span",{style:{color:"#657B83"}},"})")])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),c=n(`<p>You can do this with the following CSS:</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#586E75;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"> * Hide block based on theme</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"> * \`[class*=&#39;-dark&#39;]\` matches \`&#39;vitesse-dark&#39;\`</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"> * \`[class*=&#39;-light&#39;]\` matches \`&#39;vitesse-light&#39;\`</span></span>
<span class="line"><span style="color:#586E75;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#268BD2;">html</span><span style="color:#93A1A1;">:not</span><span style="color:#839496;">(</span><span style="color:#93A1A1;">.dark</span><span style="color:#839496;">) </span><span style="color:#268BD2;">pre</span><span style="color:#93A1A1;">.shiki</span><span style="color:#839496;">[</span><span style="color:#93A1A1;">class</span><span style="color:#859900;">*=</span><span style="color:#2AA198;">&#39;-dark&#39;</span><span style="color:#839496;">] {</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#859900;">display</span><span style="color:#839496;">: none;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"><span style="color:#268BD2;">html</span><span style="color:#93A1A1;">:not</span><span style="color:#839496;">(</span><span style="color:#93A1A1;">.dark</span><span style="color:#839496;">) </span><span style="color:#268BD2;">pre</span><span style="color:#93A1A1;">.shiki</span><span style="color:#839496;">[</span><span style="color:#93A1A1;">class</span><span style="color:#859900;">*=</span><span style="color:#2AA198;">&#39;-light&#39;</span><span style="color:#839496;">] {</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#859900;">display</span><span style="color:#839496;">: block;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"><span style="color:#268BD2;">html</span><span style="color:#93A1A1;">.dark</span><span style="color:#839496;"> </span><span style="color:#268BD2;">pre</span><span style="color:#93A1A1;">.shiki</span><span style="color:#839496;">[</span><span style="color:#93A1A1;">class</span><span style="color:#859900;">*=</span><span style="color:#2AA198;">&#39;-dark&#39;</span><span style="color:#839496;">] {</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#859900;">display</span><span style="color:#839496;">: block;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"><span style="color:#268BD2;">html</span><span style="color:#93A1A1;">.dark</span><span style="color:#839496;"> </span><span style="color:#268BD2;">pre</span><span style="color:#93A1A1;">.shiki</span><span style="color:#839496;">[</span><span style="color:#93A1A1;">class</span><span style="color:#859900;">*=</span><span style="color:#2AA198;">&#39;-light&#39;</span><span style="color:#839496;">] {</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#859900;">display</span><span style="color:#839496;">: none;</span></span>
<span class="line"><span style="color:#839496;">}</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#93A1A1;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#93A1A1;font-style:italic;"> * Hide block based on theme</span></span>
<span class="line"><span style="color:#93A1A1;font-style:italic;"> * \`[class*=&#39;-dark&#39;]\` matches \`&#39;vitesse-dark&#39;\`</span></span>
<span class="line"><span style="color:#93A1A1;font-style:italic;"> * \`[class*=&#39;-light&#39;]\` matches \`&#39;vitesse-light&#39;\`</span></span>
<span class="line"><span style="color:#93A1A1;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#268BD2;">html</span><span style="color:#93A1A1;">:not</span><span style="color:#657B83;">(</span><span style="color:#93A1A1;">.dark</span><span style="color:#657B83;">) </span><span style="color:#268BD2;">pre</span><span style="color:#93A1A1;">.shiki</span><span style="color:#657B83;">[</span><span style="color:#93A1A1;">class</span><span style="color:#859900;">*=</span><span style="color:#2AA198;">&#39;-dark&#39;</span><span style="color:#657B83;">] {</span></span>
<span class="line"><span style="color:#657B83;">    </span><span style="color:#859900;">display</span><span style="color:#657B83;">: none;</span></span>
<span class="line"><span style="color:#657B83;">}</span></span>
<span class="line"><span style="color:#268BD2;">html</span><span style="color:#93A1A1;">:not</span><span style="color:#657B83;">(</span><span style="color:#93A1A1;">.dark</span><span style="color:#657B83;">) </span><span style="color:#268BD2;">pre</span><span style="color:#93A1A1;">.shiki</span><span style="color:#657B83;">[</span><span style="color:#93A1A1;">class</span><span style="color:#859900;">*=</span><span style="color:#2AA198;">&#39;-light&#39;</span><span style="color:#657B83;">] {</span></span>
<span class="line"><span style="color:#657B83;">    </span><span style="color:#859900;">display</span><span style="color:#657B83;">: block;</span></span>
<span class="line"><span style="color:#657B83;">}</span></span>
<span class="line"><span style="color:#268BD2;">html</span><span style="color:#93A1A1;">.dark</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">pre</span><span style="color:#93A1A1;">.shiki</span><span style="color:#657B83;">[</span><span style="color:#93A1A1;">class</span><span style="color:#859900;">*=</span><span style="color:#2AA198;">&#39;-dark&#39;</span><span style="color:#657B83;">] {</span></span>
<span class="line"><span style="color:#657B83;">    </span><span style="color:#859900;">display</span><span style="color:#657B83;">: block;</span></span>
<span class="line"><span style="color:#657B83;">}</span></span>
<span class="line"><span style="color:#268BD2;">html</span><span style="color:#93A1A1;">.dark</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">pre</span><span style="color:#93A1A1;">.shiki</span><span style="color:#657B83;">[</span><span style="color:#93A1A1;">class</span><span style="color:#859900;">*=</span><span style="color:#2AA198;">&#39;-light&#39;</span><span style="color:#657B83;">] {</span></span>
<span class="line"><span style="color:#657B83;">    </span><span style="color:#859900;">display</span><span style="color:#657B83;">: none;</span></span>
<span class="line"><span style="color:#657B83;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,2),i=[r,t,c];function y(d,h,v,m,g,b){return e(),p("div",null,i)}const A=l(o,[["render",y]]);export{u as __pageData,A as default};
