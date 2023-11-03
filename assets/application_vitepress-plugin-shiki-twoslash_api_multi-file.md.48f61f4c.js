import{_ as a}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.250b3e56.js";import{_ as n,o,c as t,H as i,k as s,a as l,Q as p}from"./chunks/framework.b7580407.js";import"./chunks/commonjsHelpers.725317a4.js";const B=JSON.parse(`{"title":"Multi-file","description":"Twoslash code examples aren't limited to creating a single file. You can write any file to the virtual file system used by TypeScript to power your code examples.","frontmatter":{"description":"Twoslash code examples aren't limited to creating a single file. You can write any file to the virtual file system used by TypeScript to power your code examples.","title":"Multi-file"},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/api/multi-file.md","filePath":"application/vitepress-plugin-shiki-twoslash/api/multi-file.md","lastUpdated":1699051935000}`),c={name:"application/vitepress-plugin-shiki-twoslash/api/multi-file.md"},r=s("h1",{id:"multi-file",tabindex:"-1"},[l("Multi-file "),s("a",{class:"header-anchor",href:"#multi-file","aria-label":'Permalink to "Multi-file"'},"​")],-1),d=p('<p>Twoslash code examples aren&#39;t limited to creating a single file, by using <code>// @filename: [file]</code> you can write any file to the virtual file system used by TypeScript to power your code examples.</p><h2 id="filename-file" tabindex="-1"><code>@filename: [file]</code> <a class="header-anchor" href="#filename-file" aria-label="Permalink to &quot;`@filename: [file]`&quot;">​</a></h2><p>Most of the time, you don&#39;t need to think about the underlaying virtual file system in a code example, but when you have imports between them it becomes important to know. Twoslash will default to creating an <code>index.[type]</code> based on the langauge passed to the code example:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-zr0bp" id="tab-oXIbNII" checked="checked"><label for="tab-oXIbNII">output</label><input type="radio" name="group-zr0bp" id="tab-3Uq4Jra"><label for="tab-3Uq4Jra">markdown</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark-dimmed twoslash lsp" style="background-color:#22272e;color:#adbac7;"><div class="language-id">ts</div><div class="code-container"><code><div class="line"><span style="color:#768390;">// I&#39;m index.ts</span></div></code></div></pre><pre class="shiki github-light twoslash lsp" style="background-color:#fff;color:#24292e;"><div class="language-id">ts</div><div class="code-container"><code><div class="line"><span style="color:#6A737D;">// I&#39;m index.ts</span></div></code></div></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">```ts twoslash</span></span>\n<span class="line"><span style="color:#768390;">// I&#39;m index.ts</span></span>\n<span class="line"><span style="color:#ADBAC7;">```</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">```ts twoslash</span></span>\n<span class="line"><span style="color:#6A737D;">// I&#39;m index.ts</span></span>\n<span class="line"><span style="color:#24292E;">```</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-nndum" id="tab-AjTqPZe" checked="checked"><label for="tab-AjTqPZe">output</label><input type="radio" name="group-nndum" id="tab-YCF7PpO"><label for="tab-YCF7PpO">markdown</label></div><div class="blocks"><div class="language-tsx vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark-dimmed twoslash lsp" style="background-color:#22272e;color:#adbac7;"><div class="language-id">tsx</div><div class="code-container"><code><div class="line"><span style="color:#768390;">// I&#39;m index.tsx</span></div></code></div></pre><pre class="shiki github-light twoslash lsp" style="background-color:#fff;color:#24292e;"><div class="language-id">tsx</div><div class="code-container"><code><div class="line"><span style="color:#6A737D;">// I&#39;m index.tsx</span></div></code></div></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">```tsx twoslash</span></span>\n<span class="line"><span style="color:#768390;">// I&#39;m index.tsx</span></span>\n<span class="line"><span style="color:#ADBAC7;">```</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">```tsx twoslash</span></span>\n<span class="line"><span style="color:#6A737D;">// I&#39;m index.tsx</span></span>\n<span class="line"><span style="color:#24292E;">```</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-I6-N6" id="tab-jaafe9-" checked="checked"><label for="tab-jaafe9-">output</label><input type="radio" name="group-I6-N6" id="tab-ClyKZiE"><label for="tab-ClyKZiE">markdown</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark-dimmed twoslash lsp" style="background-color:#22272e;color:#adbac7;"><div class="language-id">js</div><div class="code-container"><code><div class="line"><span style="color:#768390;">// I&#39;m index.tjs</span></div></code></div></pre><pre class="shiki github-light twoslash lsp" style="background-color:#fff;color:#24292e;"><div class="language-id">js</div><div class="code-container"><code><div class="line"><span style="color:#6A737D;">// I&#39;m index.tjs</span></div></code></div></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">```js twoslash</span></span>\n<span class="line"><span style="color:#768390;">// I&#39;m index.tjs</span></span>\n<span class="line"><span style="color:#ADBAC7;">```</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">```js twoslash</span></span>\n<span class="line"><span style="color:#6A737D;">// I&#39;m index.tjs</span></span>\n<span class="line"><span style="color:#24292E;">```</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></div><p>Then until Twoslash hits another <code>// @filename: [file]</code>, the parser keeps adding new lines into the same file. After seeing <code>@filename</code> Twoslash creates a new virtual file-system file and adds the new lines to that. You can&#39;t edit a file after it was created, but you can overwrite it.</p><p>It can be any file. For example, if you want to quickly fake a node module:</p>',8),y=s("div",{class:"vp-code-group vp-adaptive-theme"},[s("div",{class:"tabs"},[s("input",{type:"radio",name:"group-ovkmV",id:"tab-d56pGM1",checked:"checked"}),s("label",{for:"tab-d56pGM1"},"output"),s("input",{type:"radio",name:"group-ovkmV",id:"tab-hEQfy3G"}),s("label",{for:"tab-hEQfy3G"},"markdown")]),s("div",{class:"blocks"},[s("div",{class:"language-ts vp-adaptive-theme active line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark-dimmed twoslash lsp",style:{"background-color":"#22272e",color:"#adbac7"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: node_modules/@types/mylib/index.d.ts")]),s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"export"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"function"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},[s("data-lsp",{lsp:"function doit(): string"},"doit")]),s("span",{style:{color:"#ADBAC7"}},"()"),s("span",{style:{color:"#F47067"}},":"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"string")]),s("div",{class:"line"}," "),s("div",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: index.ts")]),s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}},[l(" { "),s("data-lsp",{lsp:`(alias) function doit(): string
import doit`},"doit"),l(" } ")]),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'mylib'")]),s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},[s("data-lsp",{lsp:"var console: Console"},"console"),l(".")]),s("span",{style:{color:"#DCBDFB"}},[s("data-lsp",{lsp:"(method) Console.log(...data: any[]): void"},"log")]),s("span",{style:{color:"#ADBAC7"}},[l("("),s("data-lsp",{lsp:`(alias) function doit(): string
import doit`},"doit"),l(")")])])])])]),s("pre",{class:"shiki github-light twoslash lsp",style:{"background-color":"#fff",color:"#24292e"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: node_modules/@types/mylib/index.d.ts")]),s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},[s("data-lsp",{lsp:"function doit(): string"},"doit")]),s("span",{style:{color:"#24292E"}},"()"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string")]),s("div",{class:"line"}," "),s("div",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: index.ts")]),s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}},[l(" { "),s("data-lsp",{lsp:`(alias) function doit(): string
import doit`},"doit"),l(" } ")]),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mylib'")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},[s("data-lsp",{lsp:"var console: Console"},"console"),l(".")]),s("span",{style:{color:"#6F42C1"}},[s("data-lsp",{lsp:"(method) Console.log(...data: any[]): void"},"log")]),s("span",{style:{color:"#24292E"}},[l("("),s("data-lsp",{lsp:`(alias) function doit(): string
import doit`},"doit"),l(")")])])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])]),s("p",null,"This code example sets up the types for a non-existent npm module, and TypeScript picks it up as the definitions in the same way it would in a non-virtual TypeScript project."),s("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki github-dark-dimmed vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: node_modules/@types/mylib/index.d.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"export"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"function"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"doit"),s("span",{style:{color:"#ADBAC7"}},"()"),s("span",{style:{color:"#F47067"}},":"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"string")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: index.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}}," { doit } "),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'mylib'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"console."),s("span",{style:{color:"#DCBDFB"}},"log"),s("span",{style:{color:"#ADBAC7"}},"(doit)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: node_modules/@types/mylib/index.d.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"doit"),s("span",{style:{color:"#24292E"}},"()"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: index.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { doit } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mylib'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(doit)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br")])])])],-1),m=s("p",null,"You can also set up a JSON object which can be imported in a TypeScript file:",-1),u=s("div",{class:"vp-code-group vp-adaptive-theme"},[s("div",{class:"tabs"},[s("input",{type:"radio",name:"group-81pvk",id:"tab-6qtDygM",checked:"checked"}),s("label",{for:"tab-6qtDygM"},"output"),s("input",{type:"radio",name:"group-81pvk",id:"tab-cm-U88T"}),s("label",{for:"tab-cm-U88T"},"markdown")]),s("div",{class:"blocks"},[s("div",{class:"language-ts vp-adaptive-theme active line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark-dimmed twoslash lsp",style:{"background-color":"#22272e",color:"#adbac7"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: app.json")]),s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"{ "),s("span",{style:{color:"#96D0FF"}},'"version"'),s("span",{style:{color:"#ADBAC7"}},": "),s("span",{style:{color:"#96D0FF"}},'"23.2.3"'),s("span",{style:{color:"#ADBAC7"}}," }")]),s("div",{class:"line"}," "),s("div",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: index.ts")]),s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}},[l(),s("data-lsp",{lsp:"import appSettings"},"appSettings"),l()]),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},'"./app.json"')]),s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},[s("data-lsp",{lsp:"import appSettings"},"appSettings"),l("."),s("data-lsp",{lsp:'(property) "version": string',style:{"border-bottom":"solid 2px lightgrey"}},"version")])]),s("div",{class:"meta-line"},[s("span",{class:"popover-prefix"},"              "),s("span",{class:"popover"},[s("div",{class:"arrow"}),l('(property) "version": string')])])])])]),s("pre",{class:"shiki github-light twoslash lsp",style:{"background-color":"#fff",color:"#24292e"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: app.json")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},"{ "),s("span",{style:{color:"#032F62"}},'"version"'),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},'"23.2.3"'),s("span",{style:{color:"#24292E"}}," }")]),s("div",{class:"line"}," "),s("div",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: index.ts")]),s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}},[l(),s("data-lsp",{lsp:"import appSettings"},"appSettings"),l()]),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"./app.json"')]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},[s("data-lsp",{lsp:"import appSettings"},"appSettings"),l("."),s("data-lsp",{lsp:'(property) "version": string',style:{"border-bottom":"solid 2px lightgrey"}},"version")])]),s("div",{class:"meta-line"},[s("span",{class:"popover-prefix"},"              "),s("span",{class:"popover"},[s("div",{class:"arrow"}),l('(property) "version": string')])])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])]),s("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki github-dark-dimmed vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// @resolveJsonModule")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: app.json")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"{ "),s("span",{style:{color:"#96D0FF"}},'"version"'),s("span",{style:{color:"#ADBAC7"}},": "),s("span",{style:{color:"#96D0FF"}},'"23.2.3"'),s("span",{style:{color:"#ADBAC7"}}," }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: index.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}}," appSettings "),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},'"./app.json"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"appSettings.version")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"//           ^?")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @resolveJsonModule")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: app.json")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"{ "),s("span",{style:{color:"#032F62"}},'"version"'),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#032F62"}},'"23.2.3"'),s("span",{style:{color:"#24292E"}}," }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: index.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," appSettings "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"./app.json"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"appSettings.version")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//           ^?")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br")])])])],-1),b=s("p",null,[l("Finally, the following code allows importing non-TypeScript content. There is a "),s("code",null,".d.ts"),l(` file which globally says 'md files are OK to import' and 'the module "react" exists, but don't worry about the details'.`)],-1),v=s("p",null,[l("Then for a user, they only see the imports and exports inside "),s("code",null,"index.tsx"),l(".")],-1),h=s("div",{class:"vp-code-group vp-adaptive-theme"},[s("div",{class:"tabs"},[s("input",{type:"radio",name:"group-e0qGQ",id:"tab-1-8u2qz",checked:"checked"}),s("label",{for:"tab-1-8u2qz"},"output"),s("input",{type:"radio",name:"group-e0qGQ",id:"tab-EvdxuJW"}),s("label",{for:"tab-EvdxuJW"},"markdown")]),s("div",{class:"blocks"},[s("div",{class:"language-ts vp-adaptive-theme active line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark-dimmed twoslash lsp",style:{"background-color":"#22272e",color:"#adbac7"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}},[l(),s("data-lsp",{lsp:`(alias) module "react"
import React`},"React"),l()]),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},'"react"')]),s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}},[l(),s("data-lsp",{lsp:"import MultiFileDocs"},"MultiFileDocs"),l()]),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},'"./MultiFileDocs.mdx"')]),s("div",{class:"line"}," "),s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"export"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#F47067"}},"default"),s("span",{style:{color:"#F69D50"}}," () "),s("span",{style:{color:"#F47067"}},"=>"),s("span",{style:{color:"#F69D50"}},[l(" <"),s("data-lsp",{lsp:"import MultiFileDocs"},"MultiFileDocs"),l("/>")])])])])]),s("pre",{class:"shiki github-light twoslash lsp",style:{"background-color":"#fff",color:"#24292e"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}},[l(),s("data-lsp",{lsp:`(alias) module "react"
import React`},"React"),l()]),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"react"')]),s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}},[l(),s("data-lsp",{lsp:"import MultiFileDocs"},"MultiFileDocs"),l()]),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"./MultiFileDocs.mdx"')]),s("div",{class:"line"}," "),s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," <"),s("span",{style:{color:"#6F42C1"}},[s("data-lsp",{lsp:"import MultiFileDocs"},"MultiFileDocs")]),s("span",{style:{color:"#24292E"}},"/>")])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])]),s("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki github-dark-dimmed vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: ambient.d.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"declare"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"module"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'*.mdx'"),s("span",{style:{color:"#ADBAC7"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"export"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#F47067"}},"default"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#ADBAC7"}},"any")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"declare"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"module"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},'"react"')]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: MultiFileDocs.mdx")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"## "),s("span",{style:{color:"#F69D50"}},"Hello"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"world")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: index.tsx")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// ---cut---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}}," React "),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},'"react"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}}," MultiFileDocs "),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},'"./MultiFileDocs.mdx"')]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"export"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#F47067"}},"default"),s("span",{style:{color:"#F69D50"}}," () "),s("span",{style:{color:"#F47067"}},"=>"),s("span",{style:{color:"#F69D50"}}," <MultiFileDocs/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: ambient.d.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"declare"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"module"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'*.mdx'"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," any")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"declare"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"module"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"react"')]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: MultiFileDocs.mdx")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"## "),s("span",{style:{color:"#6F42C1"}},"Hello"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"world")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: index.tsx")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// ---cut---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," React "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"react"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," MultiFileDocs "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"./MultiFileDocs.mdx"')]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," <"),s("span",{style:{color:"#6F42C1"}},"MultiFileDocs"),s("span",{style:{color:"#24292E"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br")])])])],-1);function g(A,D,f,F,C,k){const e=a;return o(),t("div",null,[r,i(e,{readTime:"2",words:"477"}),d,y,m,u,b,v,h])}const _=n(c,[["render",g]]);export{B as __pageData,_ as default};
