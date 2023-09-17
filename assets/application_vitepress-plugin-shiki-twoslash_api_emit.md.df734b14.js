import{_ as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.70cf5f11.js";import{_ as n,o,c as e,H as p,k as s,a as t,Q as c}from"./chunks/framework.b7580407.js";import"./chunks/commonjsHelpers.725317a4.js";const f=JSON.parse('{"title":"Emit","description":"You can replace the contents of your code examples with the results of running TypeScript over the project.","frontmatter":{"description":"You can replace the contents of your code examples with the results of running TypeScript over the project.","title":"Emit"},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/api/emit.md","filePath":"application/vitepress-plugin-shiki-twoslash/api/emit.md","lastUpdated":1694942052000}'),r={name:"application/vitepress-plugin-shiki-twoslash/api/emit.md"},i=s("h1",{id:"emit",tabindex:"-1"},[t("Emit "),s("a",{class:"header-anchor",href:"#emit","aria-label":'Permalink to "Emit"'},"​")],-1),d=c('<p>Running a Twoslash code example is a full TypeScript compiler run that will create files inside the virtual file system. You can replace the contents of your code examples with the results of running TypeScript over the project.</p><h2 id="showemit" tabindex="-1"><code>@showEmit</code> <a class="header-anchor" href="#showemit" aria-label="Permalink to &quot;`@showEmit`&quot;">​</a></h2><p><code>// @showEmit</code> is the main command to tell Shiki Twoslash that you want to replace the output of your code example with the equivalent <code>.js</code> file.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-kQaG9" id="tab-QaOGSJy" checked="checked"><label for="tab-QaOGSJy">output</label><input type="radio" name="group-kQaG9" id="tab-7cN4CG5"><label for="tab-7cN4CG5">markdown</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark twoslash lsp" style="background-color:#002B36;color:#839496;"><div class="language-id">ts</div><div class="code-container"><code><div class="line"><span style="color:#2AA198;">&quot;use strict&quot;</span><span style="color:#839496;">;</span></div><div class="line"><span style="color:#93A1A1;">const</span><span style="color:#839496;"> </span><span style="color:#268BD2;">level</span><span style="color:#839496;"> </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39;Danger&#39;</span><span style="color:#839496;">;</span></div><div class="line"> </div></code></div></pre><pre class="shiki solarized-light twoslash lsp" style="background-color:#FDF6E3;color:#657B83;"><div class="language-id">ts</div><div class="code-container"><code><div class="line"><span style="color:#2AA198;">&quot;use strict&quot;</span><span style="color:#657B83;">;</span></div><div class="line"><span style="color:#586E75;">const</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">level</span><span style="color:#657B83;"> </span><span style="color:#859900;">=</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&#39;Danger&#39;</span><span style="color:#657B83;">;</span></div><div class="line"> </div></code></div></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">```ts twoslash</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @showEmit</span></span>\n<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#839496;"> </span><span style="color:#268BD2;">level</span><span style="color:#859900;">:</span><span style="color:#839496;"> </span><span style="color:#859900;">string</span><span style="color:#839496;"> </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39;Danger&#39;</span></span>\n<span class="line"><span style="color:#839496;">```</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">```ts twoslash</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @showEmit</span></span>\n<span class="line"><span style="color:#586E75;font-weight:bold;">const</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">level</span><span style="color:#859900;">:</span><span style="color:#657B83;"> </span><span style="color:#859900;">string</span><span style="color:#657B83;"> </span><span style="color:#859900;">=</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&#39;Danger&#39;</span></span>\n<span class="line"><span style="color:#657B83;">```</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div></div><h2 id="showemittedfile-file" tabindex="-1"><code>@showEmittedFile: [file]</code> <a class="header-anchor" href="#showemittedfile-file" aria-label="Permalink to &quot;`@showEmittedFile: [file]`&quot;">​</a></h2><p>While the <code>.js</code> file is probably the most useful file out of the box, TypeScript does emit other files if you have the right flags enabled (<code>.d.ts</code> and <code>.map</code>) but also when you have a multi-file code sample — you might need to tell Twoslash which file to show. For all these cases you can also add <code>@showEmittedFile: [file]</code> to tell Twoslash which file you want to show.</p><p>Shows emitted <code>.d.ts</code> for a TypeScript code example:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-CSSY2" id="tab-LM9NlJX" checked="checked"><label for="tab-LM9NlJX">markdown</label><input type="radio" name="group-CSSY2" id="tab-vciJZ2I"><label for="tab-vciJZ2I">output</label></div><div class="blocks"><div class="language-md vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">```ts twoslash</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @declaration</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @showEmit</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @showEmittedFile: index.d.ts</span></span>\n<span class="line"><span style="color:#859900;">export</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#839496;"> </span><span style="color:#268BD2;">hello</span><span style="color:#839496;"> </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39;world&#39;</span></span>\n<span class="line"><span style="color:#839496;">```</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">```ts twoslash</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @declaration</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @showEmit</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @showEmittedFile: index.d.ts</span></span>\n<span class="line"><span style="color:#859900;">export</span><span style="color:#657B83;"> </span><span style="color:#586E75;font-weight:bold;">const</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">hello</span><span style="color:#657B83;"> </span><span style="color:#859900;">=</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&#39;world&#39;</span></span>\n<span class="line"><span style="color:#657B83;">```</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark twoslash lsp" style="background-color:#002B36;color:#839496;"><div class="language-id">ts</div><div class="code-container"><code><div class="line"><span style="color:#859900;">export</span><span style="color:#839496;"> </span><span style="color:#93A1A1;">declare</span><span style="color:#839496;"> </span><span style="color:#93A1A1;">const</span><span style="color:#839496;"> </span><span style="color:#268BD2;">hello</span><span style="color:#839496;"> </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;world&quot;</span><span style="color:#839496;">;</span></div><div class="line"> </div></code></div></pre><pre class="shiki solarized-light twoslash lsp" style="background-color:#FDF6E3;color:#657B83;"><div class="language-id">ts</div><div class="code-container"><code><div class="line"><span style="color:#859900;">export</span><span style="color:#657B83;"> </span><span style="color:#586E75;">declare</span><span style="color:#657B83;"> </span><span style="color:#586E75;">const</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">hello</span><span style="color:#657B83;"> </span><span style="color:#859900;">=</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&quot;world&quot;</span><span style="color:#657B83;">;</span></div><div class="line"> </div></code></div></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p>Shows emitted <code>.map</code> files:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-eJWCc" id="tab-UX29_2I" checked="checked"><label for="tab-UX29_2I">markdown</label><input type="radio" name="group-eJWCc" id="tab-E6yt1SA"><label for="tab-E6yt1SA">output</label></div><div class="blocks"><div class="language-md vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">```ts twoslash</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @sourceMap</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @showEmit</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @showEmittedFile: index.js.map</span></span>\n<span class="line"><span style="color:#859900;">export</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#839496;"> </span><span style="color:#268BD2;">hello</span><span style="color:#839496;"> </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39;world&#39;</span></span>\n<span class="line"><span style="color:#839496;">```</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">```ts twoslash</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @sourceMap</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @showEmit</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @showEmittedFile: index.js.map</span></span>\n<span class="line"><span style="color:#859900;">export</span><span style="color:#657B83;"> </span><span style="color:#586E75;font-weight:bold;">const</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">hello</span><span style="color:#657B83;"> </span><span style="color:#859900;">=</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&#39;world&#39;</span></span>\n<span class="line"><span style="color:#657B83;">```</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark twoslash lsp" style="background-color:#002B36;color:#839496;"><div class="language-id">ts</div><div class="code-container"><code><div class="line"><span style="color:#839496;">{</span><span style="color:#2AA198;">&quot;version&quot;</span><span style="color:#839496;">:</span><span style="color:#D33682;">3</span><span style="color:#839496;">,</span><span style="color:#2AA198;">&quot;file&quot;</span><span style="color:#839496;">:</span><span style="color:#2AA198;">&quot;index.js&quot;</span><span style="color:#839496;">,</span><span style="color:#2AA198;">&quot;sourceRoot&quot;</span><span style="color:#839496;">:</span><span style="color:#2AA198;">&quot;&quot;</span><span style="color:#839496;">,</span><span style="color:#2AA198;">&quot;sources&quot;</span><span style="color:#839496;">:[</span><span style="color:#2AA198;">&quot;index.ts&quot;</span><span style="color:#839496;">],</span><span style="color:#2AA198;">&quot;names&quot;</span><span style="color:#839496;">:[],</span><span style="color:#2AA198;">&quot;mappings&quot;</span><span style="color:#839496;">:</span><span style="color:#2AA198;">&quot;AAAA,MAAM,CAAC,MAAM,KAAK,GAAG,OAAO,CAAA&quot;</span><span style="color:#839496;">}</span></div></code></div></pre><pre class="shiki solarized-light twoslash lsp" style="background-color:#FDF6E3;color:#657B83;"><div class="language-id">ts</div><div class="code-container"><code><div class="line"><span style="color:#657B83;">{</span><span style="color:#2AA198;">&quot;version&quot;</span><span style="color:#657B83;">:</span><span style="color:#D33682;">3</span><span style="color:#657B83;">,</span><span style="color:#2AA198;">&quot;file&quot;</span><span style="color:#657B83;">:</span><span style="color:#2AA198;">&quot;index.js&quot;</span><span style="color:#657B83;">,</span><span style="color:#2AA198;">&quot;sourceRoot&quot;</span><span style="color:#657B83;">:</span><span style="color:#2AA198;">&quot;&quot;</span><span style="color:#657B83;">,</span><span style="color:#2AA198;">&quot;sources&quot;</span><span style="color:#657B83;">:[</span><span style="color:#2AA198;">&quot;index.ts&quot;</span><span style="color:#657B83;">],</span><span style="color:#2AA198;">&quot;names&quot;</span><span style="color:#657B83;">:[],</span><span style="color:#2AA198;">&quot;mappings&quot;</span><span style="color:#657B83;">:</span><span style="color:#2AA198;">&quot;AAAA,MAAM,CAAC,MAAM,KAAK,GAAG,OAAO,CAAA&quot;</span><span style="color:#657B83;">}</span></div></code></div></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-EQSJJ" id="tab-wsHAdTx" checked="checked"><label for="tab-wsHAdTx">markdown</label><input type="radio" name="group-EQSJJ" id="tab-5T0qFbG"><label for="tab-5T0qFbG">output</label></div><div class="blocks"><div class="language-md vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">```ts twoslash</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @declaration</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @declarationMap</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @showEmit</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @showEmittedFile: index.d.ts.map</span></span>\n<span class="line"><span style="color:#859900;">export</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#839496;"> </span><span style="color:#268BD2;">hello</span><span style="color:#839496;"> </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39;world&#39;</span></span>\n<span class="line"><span style="color:#839496;">```</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">```ts twoslash</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @declaration</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @declarationMap</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @showEmit</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @showEmittedFile: index.d.ts.map</span></span>\n<span class="line"><span style="color:#859900;">export</span><span style="color:#657B83;"> </span><span style="color:#586E75;font-weight:bold;">const</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">hello</span><span style="color:#657B83;"> </span><span style="color:#859900;">=</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&#39;world&#39;</span></span>\n<span class="line"><span style="color:#657B83;">```</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki solarized-dark twoslash lsp" style="background-color:#002B36;color:#839496;"><div class="language-id">ts</div><div class="code-container"><code><div class="line"><span style="color:#839496;">{</span><span style="color:#2AA198;">&quot;version&quot;</span><span style="color:#839496;">:</span><span style="color:#D33682;">3</span><span style="color:#839496;">,</span><span style="color:#2AA198;">&quot;file&quot;</span><span style="color:#839496;">:</span><span style="color:#2AA198;">&quot;index.d.ts&quot;</span><span style="color:#839496;">,</span><span style="color:#2AA198;">&quot;sourceRoot&quot;</span><span style="color:#839496;">:</span><span style="color:#2AA198;">&quot;&quot;</span><span style="color:#839496;">,</span><span style="color:#2AA198;">&quot;sources&quot;</span><span style="color:#839496;">:[</span><span style="color:#2AA198;">&quot;index.ts&quot;</span><span style="color:#839496;">],</span><span style="color:#2AA198;">&quot;names&quot;</span><span style="color:#839496;">:[],</span><span style="color:#2AA198;">&quot;mappings&quot;</span><span style="color:#839496;">:</span><span style="color:#2AA198;">&quot;AAAA,eAAO,MAAM,KAAK,UAAU,CAAA&quot;</span><span style="color:#839496;">}</span></div></code></div></pre><pre class="shiki solarized-light twoslash lsp" style="background-color:#FDF6E3;color:#657B83;"><div class="language-id">ts</div><div class="code-container"><code><div class="line"><span style="color:#657B83;">{</span><span style="color:#2AA198;">&quot;version&quot;</span><span style="color:#657B83;">:</span><span style="color:#D33682;">3</span><span style="color:#657B83;">,</span><span style="color:#2AA198;">&quot;file&quot;</span><span style="color:#657B83;">:</span><span style="color:#2AA198;">&quot;index.d.ts&quot;</span><span style="color:#657B83;">,</span><span style="color:#2AA198;">&quot;sourceRoot&quot;</span><span style="color:#657B83;">:</span><span style="color:#2AA198;">&quot;&quot;</span><span style="color:#657B83;">,</span><span style="color:#2AA198;">&quot;sources&quot;</span><span style="color:#657B83;">:[</span><span style="color:#2AA198;">&quot;index.ts&quot;</span><span style="color:#657B83;">],</span><span style="color:#2AA198;">&quot;names&quot;</span><span style="color:#657B83;">:[],</span><span style="color:#2AA198;">&quot;mappings&quot;</span><span style="color:#657B83;">:</span><span style="color:#2AA198;">&quot;AAAA,eAAO,MAAM,KAAK,UAAU,CAAA&quot;</span><span style="color:#657B83;">}</span></div></code></div></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div>',11);function y(u,A,h,v,m,b){const a=l;return o(),e("div",null,[i,p(a,{readTime:"1",words:"264"}),d])}const B=n(r,[["render",y]]);export{f as __pageData,B as default};
