import{_ as n,c as a,o,R as e,z as s,a as l}from"./chunks/framework.ade46834.js";const w=JSON.parse('{"title":"Includes","description":"Include re-usable TypeScript blocks in your code examples.","frontmatter":{"description":"Include re-usable TypeScript blocks in your code examples.","title":"Includes"},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/api/includes.md","filePath":"application/vitepress-plugin-shiki-twoslash/api/includes.md","lastUpdated":1686507725000}'),t={name:"application/vitepress-plugin-shiki-twoslash/api/includes.md"},r=e('<h1 id="includes" tabindex="-1">Includes <a class="header-anchor" href="#includes" aria-label="Permalink to &quot;Includes&quot;">​</a></h1><p>As your documentation grows, you may need a way of re-using code blocks to prevent code duplication. Shiki Twoslash provides a simple includes system.</p><h2 id="defining-a-re-usable-block" tabindex="-1">Defining a re-usable block <a class="header-anchor" href="#defining-a-re-usable-block" aria-label="Permalink to &quot;Defining a re-usable block&quot;">​</a></h2><p>Re-usable code blocks are defined by the <code>twoslash</code> language, followed by the <code>include</code> keyword and the reference name of your choice.</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">```twoslash include myBlock</span></span>\n<span class="line"><span style="color:#839496;">type SomeString = string</span></span>\n<span class="line"><span style="color:#839496;">```</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">```twoslash include myBlock</span></span>\n<span class="line"><span style="color:#657B83;">type SomeString = string</span></span>\n<span class="line"><span style="color:#657B83;">```</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="incremental-steps" tabindex="-1">Incremental steps <a class="header-anchor" href="#incremental-steps" aria-label="Permalink to &quot;Incremental steps&quot;">​</a></h3><p>Shiki Twoslash also provide the ability to define incremental steps through the definition of re-usable blocks. This means whenever a new step is delimited down the code, it will also include previous steps. These are <strong>not groups</strong>.</p><ul><li>Incremental steps are delimited by <code>// - [name of the step]</code></li><li>They are named <strong>at the end</strong> of the actual code</li></ul><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">```twoslash include myBlockWithSteps</span></span>\n<span class="line"><span style="color:#839496;">type SomeString = string</span></span>\n<span class="line"><span style="color:#839496;">// - base</span></span>\n<span class="line"><span style="color:#839496;">type SomeUser = { name: string; mail?: SomeUserMail }</span></span>\n<span class="line"><span style="color:#839496;">type SomeUserMail = { content: string; verified: boolean }</span></span>\n<span class="line"><span style="color:#839496;">// - afterUserDefinitions</span></span>\n<span class="line"><span style="color:#839496;">type SomeGroup = { name: string; members: SomeUser[] }</span></span>\n<span class="line"><span style="color:#839496;">// - afterGroupDefinitions</span></span>\n<span class="line"><span style="color:#839496;">```</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">```twoslash include myBlockWithSteps</span></span>\n<span class="line"><span style="color:#657B83;">type SomeString = string</span></span>\n<span class="line"><span style="color:#657B83;">// - base</span></span>\n<span class="line"><span style="color:#657B83;">type SomeUser = { name: string; mail?: SomeUserMail }</span></span>\n<span class="line"><span style="color:#657B83;">type SomeUserMail = { content: string; verified: boolean }</span></span>\n<span class="line"><span style="color:#657B83;">// - afterUserDefinitions</span></span>\n<span class="line"><span style="color:#657B83;">type SomeGroup = { name: string; members: SomeUser[] }</span></span>\n<span class="line"><span style="color:#657B83;">// - afterGroupDefinitions</span></span>\n<span class="line"><span style="color:#657B83;">```</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="including-a-whole-block" tabindex="-1">Including a whole block <a class="header-anchor" href="#including-a-whole-block" aria-label="Permalink to &quot;Including a whole block&quot;">​</a></h2><p>To include a re-usable block, add <code>// @include: [block name]</code> in your code block.</p><div class="language-twoslash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">twoslash</span><pre></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',12),p=s("div",{class:"vp-code-group vp-adaptive-theme"},[s("div",{class:"tabs"},[s("input",{type:"radio",name:"group-kj9uz",id:"tab-7wenfLZ",checked:"checked"}),s("label",{for:"tab-7wenfLZ"},"output"),s("input",{type:"radio",name:"group-kj9uz",id:"tab-Hl0a_fE"}),s("label",{for:"tab-Hl0a_fE"},"markdown")]),s("div",{class:"blocks"},[s("div",{class:"language-ts vp-adaptive-theme active line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki solarized-dark twoslash lsp",style:{"background-color":"#002B36",color:"#839496"},active:"true"},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#93A1A1"}},"type"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:"type SomeString = string"},"SomeString")]),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#93A1A1"}},"const"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:"const a: string"},"a")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:"type SomeString = string"},"SomeString")]),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},"'string'")])])])]),s("pre",{class:"shiki solarized-light twoslash lsp",style:{"background-color":"#FDF6E3",color:"#657B83"},active:"true"},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#586E75"}},"type"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:"type SomeString = string"},"SomeString")]),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#586E75"}},"const"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:"const a: string"},"a")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:"type SomeString = string"},"SomeString")]),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},"'string'")])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])]),s("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki solarized-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```twoslash include myBlock")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"type SomeString = string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#586E75","font-style":"italic"}},"// @include: myBlock")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#93A1A1","font-weight":"bold"}},"const"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"a"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#CB4B16"}},"SomeString"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},"'string'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```")])])]),s("pre",{class:"shiki solarized-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```twoslash include myBlock")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"type SomeString = string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#93A1A1","font-style":"italic"}},"// @include: myBlock")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#586E75","font-weight":"bold"}},"const"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"a"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#CB4B16"}},"SomeString"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},"'string'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br")])])])],-1),c=e('<h2 id="including-a-block-step" tabindex="-1">Including a block step <a class="header-anchor" href="#including-a-block-step" aria-label="Permalink to &quot;Including a block step&quot;">​</a></h2><p>To include a re-usable block at a specific step, add <code>// @include: [block name]-[step name]</code> in your code block.</p><div class="language-twoslash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">twoslash</span><pre></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',3),i=s("div",{class:"vp-code-group vp-adaptive-theme"},[s("div",{class:"tabs"},[s("input",{type:"radio",name:"group-yv4zH",id:"tab-xWbc8IE",checked:"checked"}),s("label",{for:"tab-xWbc8IE"},"output"),s("input",{type:"radio",name:"group-yv4zH",id:"tab-YDNw5lI"}),s("label",{for:"tab-YDNw5lI"},"markdown")]),s("div",{class:"blocks"},[s("div",{class:"language-ts vp-adaptive-theme active line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki solarized-dark twoslash lsp",style:{"background-color":"#002B36",color:"#839496"},active:"true"},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#93A1A1"}},"type"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:"type SomeString = string"},"SomeString")]),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#93A1A1"}},"type"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:`type SomeUser = {
    name: string;
    mail?: SomeUserMail | undefined;
}`},"SomeUser")]),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}},[l(" { "),s("data-lsp",{lsp:"(property) name: string"},"name")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"string"),s("span",{style:{color:"#839496"}},[l("; "),s("data-lsp",{lsp:"(property) mail?: SomeUserMail | undefined"},"mail")]),s("span",{style:{color:"#859900"}},"?:"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:`type SomeUserMail = {
    content: string;
    verified: boolean;
}`},"SomeUserMail")]),s("span",{style:{color:"#839496"}}," }")]),s("div",{class:"line"},[s("span",{style:{color:"#93A1A1"}},"type"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:`type SomeUserMail = {
    content: string;
    verified: boolean;
}`},"SomeUserMail")]),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}},[l(" { "),s("data-lsp",{lsp:"(property) content: string"},"content")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"string"),s("span",{style:{color:"#839496"}},[l("; "),s("data-lsp",{lsp:"(property) verified: boolean"},"verified")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"boolean"),s("span",{style:{color:"#839496"}}," }")]),s("div",{class:"line"},[s("span",{style:{color:"#93A1A1"}},"const"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:"const mail: SomeUserMail"},"mail")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:`type SomeUserMail = {
    content: string;
    verified: boolean;
}`},"SomeUserMail")]),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}},[l(" { "),s("data-lsp",{lsp:"(property) content: string"},"content"),l(": ")]),s("span",{style:{color:"#2AA198"}},"'some-email'"),s("span",{style:{color:"#839496"}},[l(", "),s("data-lsp",{lsp:"(property) verified: boolean"},"verified"),l(": ")]),s("span",{style:{color:"#B58900"}},"true"),s("span",{style:{color:"#839496"}}," }")])])])]),s("pre",{class:"shiki solarized-light twoslash lsp",style:{"background-color":"#FDF6E3",color:"#657B83"},active:"true"},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#586E75"}},"type"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:"type SomeString = string"},"SomeString")]),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#586E75"}},"type"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:`type SomeUser = {
    name: string;
    mail?: SomeUserMail | undefined;
}`},"SomeUser")]),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}},[l(" { "),s("data-lsp",{lsp:"(property) name: string"},"name")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"string"),s("span",{style:{color:"#657B83"}},[l("; "),s("data-lsp",{lsp:"(property) mail?: SomeUserMail | undefined"},"mail")]),s("span",{style:{color:"#859900"}},"?:"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:`type SomeUserMail = {
    content: string;
    verified: boolean;
}`},"SomeUserMail")]),s("span",{style:{color:"#657B83"}}," }")]),s("div",{class:"line"},[s("span",{style:{color:"#586E75"}},"type"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:`type SomeUserMail = {
    content: string;
    verified: boolean;
}`},"SomeUserMail")]),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}},[l(" { "),s("data-lsp",{lsp:"(property) content: string"},"content")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"string"),s("span",{style:{color:"#657B83"}},[l("; "),s("data-lsp",{lsp:"(property) verified: boolean"},"verified")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"boolean"),s("span",{style:{color:"#657B83"}}," }")]),s("div",{class:"line"},[s("span",{style:{color:"#586E75"}},"const"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:"const mail: SomeUserMail"},"mail")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:`type SomeUserMail = {
    content: string;
    verified: boolean;
}`},"SomeUserMail")]),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}},[l(" { "),s("data-lsp",{lsp:"(property) content: string"},"content"),l(": ")]),s("span",{style:{color:"#2AA198"}},"'some-email'"),s("span",{style:{color:"#657B83"}},[l(", "),s("data-lsp",{lsp:"(property) verified: boolean"},"verified"),l(": ")]),s("span",{style:{color:"#B58900"}},"true"),s("span",{style:{color:"#657B83"}}," }")])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])]),s("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki solarized-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```twoslash include myBlockWithSteps")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"type SomeString = string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"// - base")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"type SomeUser = { name: string; mail?: SomeUserMail }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"type SomeUserMail = { content: string; verified: boolean }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"// - afterUserDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"type SomeGroup = { name: string; members: SomeUser[] }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"// - afterGroupDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#586E75","font-style":"italic"}},"// @include: myBlockWithSteps-afterUserDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#93A1A1","font-weight":"bold"}},"const"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"mail"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#CB4B16"}},"SomeUserMail"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," { content: "),s("span",{style:{color:"#2AA198"}},"'some-email'"),s("span",{style:{color:"#839496"}},", verified: "),s("span",{style:{color:"#B58900"}},"true"),s("span",{style:{color:"#839496"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```")])])]),s("pre",{class:"shiki solarized-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```twoslash include myBlockWithSteps")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"type SomeString = string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"// - base")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"type SomeUser = { name: string; mail?: SomeUserMail }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"type SomeUserMail = { content: string; verified: boolean }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"// - afterUserDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"type SomeGroup = { name: string; members: SomeUser[] }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"// - afterGroupDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#93A1A1","font-style":"italic"}},"// @include: myBlockWithSteps-afterUserDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#586E75","font-weight":"bold"}},"const"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"mail"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#CB4B16"}},"SomeUserMail"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," { content: "),s("span",{style:{color:"#2AA198"}},"'some-email'"),s("span",{style:{color:"#657B83"}},", verified: "),s("span",{style:{color:"#B58900"}},"true"),s("span",{style:{color:"#657B83"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br")])])])],-1),y=s("h2",{id:"hiding-re-used-code",tabindex:"-1"},[l("Hiding re-used code "),s("a",{class:"header-anchor",href:"#hiding-re-used-code","aria-label":'Permalink to "Hiding re-used code"'},"​")],-1),d=s("p",null,[l("Re-using a lot of TypeScript code can easily bloat your documentation and obstruct the main point of your code block. You can hide re-used code to keep your code blocks clean and concise by "),s("a",{href:"./cutting"},"cutting"),l(" right after the "),s("code",null,"@include"),l(" statement.")],-1),m=s("div",{class:"vp-code-group vp-adaptive-theme"},[s("div",{class:"tabs"},[s("input",{type:"radio",name:"group-5vf7z",id:"tab-Fq2iX6J",checked:"checked"}),s("label",{for:"tab-Fq2iX6J"},"output"),s("input",{type:"radio",name:"group-5vf7z",id:"tab-Sb7IlVV"}),s("label",{for:"tab-Sb7IlVV"},"markdown")]),s("div",{class:"blocks"},[s("div",{class:"language-ts vp-adaptive-theme active line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki solarized-dark twoslash lsp",style:{"background-color":"#002B36",color:"#839496"},active:"true"},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#93A1A1"}},"const"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:"const mail: SomeUserMail"},"mail")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:`type SomeUserMail = {
    content: string;
    verified: boolean;
}`},"SomeUserMail")]),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}},[l(" { "),s("data-lsp",{lsp:"(property) content: string"},"content"),l(": ")]),s("span",{style:{color:"#2AA198"}},"'some-email'"),s("span",{style:{color:"#839496"}},[l(", "),s("data-lsp",{lsp:"(property) verified: boolean"},"verified"),l(": ")]),s("span",{style:{color:"#B58900"}},"true"),s("span",{style:{color:"#839496"}}," }")])])])]),s("pre",{class:"shiki solarized-light twoslash lsp",style:{"background-color":"#FDF6E3",color:"#657B83"},active:"true"},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#586E75"}},"const"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:"const mail: SomeUserMail"},"mail")]),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#CB4B16"}},[s("data-lsp",{lsp:`type SomeUserMail = {
    content: string;
    verified: boolean;
}`},"SomeUserMail")]),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}},[l(" { "),s("data-lsp",{lsp:"(property) content: string"},"content"),l(": ")]),s("span",{style:{color:"#2AA198"}},"'some-email'"),s("span",{style:{color:"#657B83"}},[l(", "),s("data-lsp",{lsp:"(property) verified: boolean"},"verified"),l(": ")]),s("span",{style:{color:"#B58900"}},"true"),s("span",{style:{color:"#657B83"}}," }")])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])]),s("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki solarized-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```twoslash include myBlockWithSteps")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"type SomeString = string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"// - base")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"type SomeUser = { name: string; mail?: SomeUserMail }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"type SomeUserMail = { content: string; verified: boolean }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"// - afterUserDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"type SomeGroup = { name: string; members: SomeUser[] }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"// - afterGroupDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#586E75","font-style":"italic"}},"// @include: myBlockWithSteps-afterUserDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#586E75","font-style":"italic"}},"// ---cut---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#93A1A1","font-weight":"bold"}},"const"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"mail"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#CB4B16"}},"SomeUserMail"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," { content: "),s("span",{style:{color:"#2AA198"}},"'some-email'"),s("span",{style:{color:"#839496"}},", verified: "),s("span",{style:{color:"#B58900"}},"true"),s("span",{style:{color:"#839496"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```")])])]),s("pre",{class:"shiki solarized-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```twoslash include myBlockWithSteps")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"type SomeString = string")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"// - base")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"type SomeUser = { name: string; mail?: SomeUserMail }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"type SomeUserMail = { content: string; verified: boolean }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"// - afterUserDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"type SomeGroup = { name: string; members: SomeUser[] }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"// - afterGroupDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#93A1A1","font-style":"italic"}},"// @include: myBlockWithSteps-afterUserDefinitions")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#93A1A1","font-style":"italic"}},"// ---cut---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#586E75","font-weight":"bold"}},"const"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"mail"),s("span",{style:{color:"#859900"}},":"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#CB4B16"}},"SomeUserMail"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," { content: "),s("span",{style:{color:"#2AA198"}},"'some-email'"),s("span",{style:{color:"#657B83"}},", verified: "),s("span",{style:{color:"#B58900"}},"true"),s("span",{style:{color:"#657B83"}}," }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br")])])])],-1),u=[r,p,c,i,y,d,m];function b(g,B,h,v,S,f){return o(),a("div",null,u)}const U=n(t,[["render",b]]);export{w as __pageData,U as default};