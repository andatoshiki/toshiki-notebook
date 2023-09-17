import{_ as t,c as r,z as s,E as l,B as n,R as o,a,G as c,o as p}from"./chunks/framework.ade46834.js";const es=JSON.parse('{"title":"Errors","description":"Raise compiler errors in your code examples to show incorrect states.","frontmatter":{"description":"Raise compiler errors in your code examples to show incorrect states.","title":"Errors"},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/api/errors.md","filePath":"application/vitepress-plugin-shiki-twoslash/api/errors.md","lastUpdated":1694920097000}'),i={name:"application/vitepress-plugin-shiki-twoslash/api/errors.md"},d=o('<h1 id="errors" tabindex="-1">Errors <a class="header-anchor" href="#errors" aria-label="Permalink to &quot;Errors&quot;">​</a></h1><p>Most of the time, you want to avoid errors in your code examples. Strictly speaking, this usually means setting the right compiler flags and environment in each code example.</p><p>Sometimes however, you do want to raise a compiler error — to show incorrect states. In those cases, twoslash has a way to mark the compiler errors you expect.</p><h2 id="errors-num" tabindex="-1"><code>@errors: [num]</code> <a class="header-anchor" href="#errors-num" aria-label="Permalink to &quot;`@errors: [num]`&quot;">​</a></h2><p>All TypeScript compiler errors have a number, this number is relatively arbitrary and can change between TypeScript versions. For our case these numbers are useul in declaring what we expect to see.</p><p>You can use <code>// @errors: [num]</code> to tell Twoslash that you expect this error to occur. This moves the compiler error message into the code example.</p>',6),y={class:"vp-code-group vp-adaptive-theme"},h=o('<div class="tabs"><input type="radio" name="group-WKIRb" id="tab-Qfz2SBz" checked="checked"><label for="tab-Qfz2SBz">output</label><input type="radio" name="group-WKIRb" id="tab-ijUIQYB"><label for="tab-ijUIQYB">markdown</label></div>',1),_={class:"blocks"},u={class:"language-ts vp-adaptive-theme active line-numbers-mode"},m=s("button",{title:"Copy Code",class:"copy"},null,-1),b=s("span",{class:"lang"},"ts",-1),v={class:"shiki solarized-dark twoslash lsp",style:{"background-color":"#002B36",color:"#839496"},active:"true"},g=s("div",{class:"language-id"},"ts",-1),B={class:"code-container"},k=s("div",{class:"line"},[s("span",{style:{color:"#93A1A1"}},"const"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:'const a: "123"'},"a")]),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},"'123'")],-1),A={class:"line"},w={style:{color:"#268BD2"}},f=s("data-lsp",{lsp:"const a: any"},"a",-1),D=s("span",{style:{color:"#839496"}}," ",-1),T=s("span",{style:{color:"#859900"}},"=",-1),E=s("span",{style:{color:"#839496"}}," ",-1),C=s("span",{style:{color:"#D33682"}},"132",-1),S=s("span",{class:"error"},[s("span",null,"Cannot assign to 'a' because it is a constant."),s("span",{class:"code"},"2588")],-1),x=s("span",{class:"error-behind"},"Cannot assign to 'a' because it is a constant.",-1),z={class:"shiki solarized-light twoslash lsp",style:{"background-color":"#FDF6E3",color:"#657B83"},active:"true"},I=s("div",{class:"language-id"},"ts",-1),P={class:"code-container"},R=s("div",{class:"line"},[s("span",{style:{color:"#586E75"}},"const"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:'const a: "123"'},"a")]),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},"'123'")],-1),V={class:"line"},N={style:{color:"#268BD2"}},Q=s("data-lsp",{lsp:"const a: any"},"a",-1),q=s("span",{style:{color:"#657B83"}}," ",-1),F=s("span",{style:{color:"#859900"}},"=",-1),K=s("span",{style:{color:"#657B83"}}," ",-1),Y=s("span",{style:{color:"#D33682"}},"132",-1),$=s("span",{class:"error"},[s("span",null,"Cannot assign to 'a' because it is a constant."),s("span",{class:"code"},"2588")],-1),j=s("span",{class:"error-behind"},"Cannot assign to 'a' because it is a constant.",-1),O=s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")],-1),U=o('<div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">```ts twoslash</span></span>\n<span class="line"><span style="color:#586E75;font-style:italic;">// @errors: 2588</span></span>\n<span class="line"><span style="color:#93A1A1;font-weight:bold;">const</span><span style="color:#839496;"> </span><span style="color:#268BD2;">a</span><span style="color:#839496;"> </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39;123&#39;</span></span>\n<span class="line"><span style="color:#268BD2;">a</span><span style="color:#839496;"> </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#D33682;">132</span></span>\n<span class="line"><span style="color:#839496;">```</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">```ts twoslash</span></span>\n<span class="line"><span style="color:#93A1A1;font-style:italic;">// @errors: 2588</span></span>\n<span class="line"><span style="color:#586E75;font-weight:bold;">const</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">a</span><span style="color:#657B83;"> </span><span style="color:#859900;">=</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&#39;123&#39;</span></span>\n<span class="line"><span style="color:#268BD2;">a</span><span style="color:#657B83;"> </span><span style="color:#859900;">=</span><span style="color:#657B83;"> </span><span style="color:#D33682;">132</span></span>\n<span class="line"><span style="color:#657B83;">```</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',1),H=s("h2",{id:"noerrors",tabindex:"-1"},[s("code",null,"@noErrors"),a(),s("a",{class:"header-anchor",href:"#noerrors","aria-label":'Permalink to "`@noErrors`"'},"​")],-1),L=s("p",null,[a("Sometimes you have needs in which a broken TypeScript build is okay. A good example of this is using a "),s("a",{href:"./queries#completions"},"completion query"),a(", which requires a broken TypeScript project to work. You can use "),s("code",null,"// @noErrors"),a(" to supress all errors in a code sample, and not have them show inline.")],-1),W=s("div",{class:"vp-code-group vp-adaptive-theme"},[s("div",{class:"tabs"},[s("input",{type:"radio",name:"group-HZ-dQ",id:"tab-RKO2pLQ",checked:"checked"}),s("label",{for:"tab-RKO2pLQ"},"output"),s("input",{type:"radio",name:"group-HZ-dQ",id:"tab-la9E87X"}),s("label",{for:"tab-la9E87X"},"markdown")]),s("div",{class:"blocks"},[s("div",{class:"language-ts vp-adaptive-theme active line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki solarized-dark twoslash lsp",style:{"background-color":"#002B36",color:"#839496"},active:"true"},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#93A1A1"}},"const"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:'const a: "123"'},"a")]),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},"'123'")]),s("div",{class:"line"},[s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:"const a: any"},"a")]),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"132")])])])]),s("pre",{class:"shiki solarized-light twoslash lsp",style:{"background-color":"#FDF6E3",color:"#657B83"},active:"true"},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#586E75"}},"const"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:'const a: "123"'},"a")]),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},"'123'")]),s("div",{class:"line"},[s("span",{style:{color:"#268BD2"}},[s("data-lsp",{lsp:"const a: any"},"a")]),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"132")])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])]),s("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki solarized-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```ts twoslash")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#586E75","font-style":"italic"}},"// @noErrors")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#93A1A1","font-weight":"bold"}},"const"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#268BD2"}},"a"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#2AA198"}},"'123'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"a"),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#839496"}}," "),s("span",{style:{color:"#D33682"}},"132")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#839496"}},"```")])])]),s("pre",{class:"shiki solarized-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```ts twoslash")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#93A1A1","font-style":"italic"}},"// @noErrors")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#586E75","font-weight":"bold"}},"const"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#268BD2"}},"a"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#2AA198"}},"'123'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#268BD2"}},"a"),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#859900"}},"="),s("span",{style:{color:"#657B83"}}," "),s("span",{style:{color:"#D33682"}},"132")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#657B83"}},"```")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br")])])])],-1);function X(Z,G,J,M,ss,as){const e=c("data-err");return p(),r("div",null,[d,s("div",y,[h,s("div",_,[s("div",u,[m,b,s("pre",v,[g,s("div",B,[s("code",null,[k,s("div",A,[s("span",w,[l(e,null,{default:n(()=>[f]),_:1})]),D,T,E,C]),S,x])])]),s("pre",z,[I,s("div",P,[s("code",null,[R,s("div",V,[s("span",N,[l(e,null,{default:n(()=>[Q]),_:1})]),q,F,K,Y]),$,j])])]),O]),U])]),H,L,W])}const ls=t(i,[["render",X]]);export{es as __pageData,ls as default};
