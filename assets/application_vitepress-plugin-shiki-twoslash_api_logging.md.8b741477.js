import{_ as o}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.250b3e56.js";import{_ as a,o as n,c as t,H as r,k as l,a as s,Q as i}from"./chunks/framework.b7580407.js";import"./chunks/commonjsHelpers.725317a4.js";const f=JSON.parse('{"title":"Logging","description":"Display formatted output for code examples.","frontmatter":{"description":"Display formatted output for code examples.","title":"Logging","keywords":["console","javascript","typescript","showcase","snippets"]},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/api/logging.md","filePath":"application/vitepress-plugin-shiki-twoslash/api/logging.md","lastUpdated":1699051935000}'),c={name:"application/vitepress-plugin-shiki-twoslash/api/logging.md"},p=l("h1",{id:"logging",tabindex:"-1"},[s("Logging "),l("a",{class:"header-anchor",href:"#logging","aria-label":'Permalink to "Logging"'},"​")],-1),d=i('<p>When you first see a Twoslash code example with an inline compiler error, you instinctively trust that the compiler error is correct because the design shows that it is not a part of the code sample. The logging tools lets you do that, but abuses the systemic trust because your code is not being evaluated to generate the logs.</p><p>This feature is effectively a facade, people will trust your output and it will look better.</p><h2 id="log-warn-error" tabindex="-1"><code>@log:</code>, <code>@warn:</code>, <code>@error:</code> <a class="header-anchor" href="#log-warn-error" aria-label="Permalink to &quot;`@log:`, `@warn:`, `@error:`&quot;">​</a></h2><p>The names are based on the functions on the <code>console</code> object:</p>',4),g=l("div",{class:"vp-code-group vp-adaptive-theme"},[l("div",{class:"tabs"},[l("input",{type:"radio",name:"group-5qzOF",id:"tab-X_BVc45",checked:"checked"}),l("label",{for:"tab-X_BVc45"},"output"),l("input",{type:"radio",name:"group-5qzOF",id:"tab-57Euuoa"}),l("label",{for:"tab-57Euuoa"},"markdown")]),l("div",{class:"blocks"},[l("div",{class:"language-ts vp-adaptive-theme active line-numbers-mode"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"ts"),l("pre",null,[l("code",{class:"language-ts"},[l("div",{class:"tag-container"},[l("pre",{class:"shiki github-dark-dimmed twoslash lsp",style:{"background-color":"#22272e",color:"#adbac7"}},[l("div",{class:"language-id"},"ts"),l("div",{class:"code-container"},[l("code",null,[l("div",{class:"line"},[l("span",{style:{color:"#ADBAC7"}},[l("data-lsp",{lsp:"var console: Console"},"console"),s(".")]),l("span",{style:{color:"#DCBDFB"}},[l("data-lsp",{lsp:"(method) Console.log(...data: any[]): void"},"log")]),l("span",{style:{color:"#ADBAC7"}},"("),l("span",{style:{color:"#96D0FF"}},"'Hello log'"),l("span",{style:{color:"#ADBAC7"}},")")]),l("div",{class:"meta-line logger log-log"},[l("svg",{width:"12",height:"15",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M5.76822 0.359816C5.41466 -0.0644613 4.78409 -0.121785 4.35982 0.231779C3.93554 0.585343 3.87821 1.21591 4.23178 1.64018L5.76822 0.359816ZM10 7L10.7926 7.60971L11.2809 6.97499L10.7682 6.35982L10 7ZM4.20738 12.8903C3.87064 13.328 3.95254 13.9559 4.39029 14.2926C4.82804 14.6294 5.45589 14.5475 5.79262 14.1097L4.20738 12.8903ZM4.23178 1.64018L9.23178 7.64018L10.7682 6.35982L5.76822 0.359816L4.23178 1.64018ZM9.20738 6.39029L4.20738 12.8903L5.79262 14.1097L10.7926 7.60971L9.20738 6.39029Z",fill:"#BDBDBD"}),l("line",{y1:"3.5",x2:"4",y2:"3.5",stroke:"#BDBDBD"}),l("path",{d:"M0 7H4",stroke:"#BDBDBD"}),l("line",{y1:"10.5",x2:"4",y2:"10.5",stroke:"#BDBDBD"})]),l("span",{class:"message"},"Hello log")]),l("div",{class:"line"}," "),l("div",{class:"line"},[l("span",{style:{color:"#ADBAC7"}},[l("data-lsp",{lsp:"var console: Console"},"console"),s(".")]),l("span",{style:{color:"#DCBDFB"}},[l("data-lsp",{lsp:"(method) Console.warn(...data: any[]): void"},"warn")]),l("span",{style:{color:"#ADBAC7"}},"("),l("span",{style:{color:"#96D0FF"}},"'Hello warn'"),l("span",{style:{color:"#ADBAC7"}},")")]),l("div",{class:"meta-line logger warn-log"},[l("svg",{width:"21",height:"18",viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M9.63401 0.5C10.0189 -0.166667 10.9812 -0.166667 11.3661 0.5L20.4593 16.25C20.8442 16.9167 20.3631 17.75 19.5933 17.75H1.40676C0.636965 17.75 0.15584 16.9167 0.54074 16.25L9.63401 0.5Z",fill:"#E5A604"}),l("rect",{x:"9",y:"4",width:"3",height:"7",fill:"white"}),l("rect",{x:"9",y:"13",width:"3",height:"3",fill:"white"})]),l("span",{class:"message"},"Hello warn")]),l("div",{class:"line"}," "),l("div",{class:"line"},[l("span",{style:{color:"#ADBAC7"}},[l("data-lsp",{lsp:"var console: Console"},"console"),s(".")]),l("span",{style:{color:"#DCBDFB"}},[l("data-lsp",{lsp:"(method) Console.error(...data: any[]): void"},"error")]),l("span",{style:{color:"#ADBAC7"}},"("),l("span",{style:{color:"#96D0FF"}},"'Hello error'"),l("span",{style:{color:"#ADBAC7"}},")")]),l("div",{class:"meta-line logger error-log"},[l("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M4.63018 1.29289L1.29289 4.63018C1.10536 4.81772 1 5.07207 1 5.33729V13.6627C1 13.9279 1.10536 14.1823 1.29289 14.3698L4.63018 17.7071C4.81772 17.8946 5.07207 18 5.33729 18H13.6627C13.9279 18 14.1823 17.8946 14.3698 17.7071L17.7071 14.3698C17.8946 14.1823 18 13.9279 18 13.6627V5.33729C18 5.07207 17.8946 4.81772 17.7071 4.63018L14.3698 1.29289C14.1823 1.10536 13.9279 1 13.6627 1H5.33729C5.07207 1 4.81772 1.10536 4.63018 1.29289Z",fill:"#E72622",stroke:"#E72622"}),l("rect",{x:"8",y:"4",width:"3",height:"7",fill:"white"}),l("rect",{x:"8",y:"13",width:"3",height:"3",fill:"white"})]),l("span",{class:"message"},"Hello error")])])])])]),s(`
`),l("div",{class:"tag-container"},[l("pre",{class:"shiki github-light twoslash lsp",style:{"background-color":"#fff",color:"#24292e"}},[l("div",{class:"language-id"},"ts"),l("div",{class:"code-container"},[l("code",null,[l("div",{class:"line"},[l("span",{style:{color:"#24292E"}},[l("data-lsp",{lsp:"var console: Console"},"console"),s(".")]),l("span",{style:{color:"#6F42C1"}},[l("data-lsp",{lsp:"(method) Console.log(...data: any[]): void"},"log")]),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},"'Hello log'"),l("span",{style:{color:"#24292E"}},")")]),l("div",{class:"meta-line logger log-log"},[l("svg",{width:"12",height:"15",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M5.76822 0.359816C5.41466 -0.0644613 4.78409 -0.121785 4.35982 0.231779C3.93554 0.585343 3.87821 1.21591 4.23178 1.64018L5.76822 0.359816ZM10 7L10.7926 7.60971L11.2809 6.97499L10.7682 6.35982L10 7ZM4.20738 12.8903C3.87064 13.328 3.95254 13.9559 4.39029 14.2926C4.82804 14.6294 5.45589 14.5475 5.79262 14.1097L4.20738 12.8903ZM4.23178 1.64018L9.23178 7.64018L10.7682 6.35982L5.76822 0.359816L4.23178 1.64018ZM9.20738 6.39029L4.20738 12.8903L5.79262 14.1097L10.7926 7.60971L9.20738 6.39029Z",fill:"#BDBDBD"}),l("line",{y1:"3.5",x2:"4",y2:"3.5",stroke:"#BDBDBD"}),l("path",{d:"M0 7H4",stroke:"#BDBDBD"}),l("line",{y1:"10.5",x2:"4",y2:"10.5",stroke:"#BDBDBD"})]),l("span",{class:"message"},"Hello log")]),l("div",{class:"line"}," "),l("div",{class:"line"},[l("span",{style:{color:"#24292E"}},[l("data-lsp",{lsp:"var console: Console"},"console"),s(".")]),l("span",{style:{color:"#6F42C1"}},[l("data-lsp",{lsp:"(method) Console.warn(...data: any[]): void"},"warn")]),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},"'Hello warn'"),l("span",{style:{color:"#24292E"}},")")]),l("div",{class:"meta-line logger warn-log"},[l("svg",{width:"21",height:"18",viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M9.63401 0.5C10.0189 -0.166667 10.9812 -0.166667 11.3661 0.5L20.4593 16.25C20.8442 16.9167 20.3631 17.75 19.5933 17.75H1.40676C0.636965 17.75 0.15584 16.9167 0.54074 16.25L9.63401 0.5Z",fill:"#E5A604"}),l("rect",{x:"9",y:"4",width:"3",height:"7",fill:"white"}),l("rect",{x:"9",y:"13",width:"3",height:"3",fill:"white"})]),l("span",{class:"message"},"Hello warn")]),l("div",{class:"line"}," "),l("div",{class:"line"},[l("span",{style:{color:"#24292E"}},[l("data-lsp",{lsp:"var console: Console"},"console"),s(".")]),l("span",{style:{color:"#6F42C1"}},[l("data-lsp",{lsp:"(method) Console.error(...data: any[]): void"},"error")]),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},"'Hello error'"),l("span",{style:{color:"#24292E"}},")")]),l("div",{class:"meta-line logger error-log"},[l("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M4.63018 1.29289L1.29289 4.63018C1.10536 4.81772 1 5.07207 1 5.33729V13.6627C1 13.9279 1.10536 14.1823 1.29289 14.3698L4.63018 17.7071C4.81772 17.8946 5.07207 18 5.33729 18H13.6627C13.9279 18 14.1823 17.8946 14.3698 17.7071L17.7071 14.3698C17.8946 14.1823 18 13.9279 18 13.6627V5.33729C18 5.07207 17.8946 4.81772 17.7071 4.63018L14.3698 1.29289C14.1823 1.10536 13.9279 1 13.6627 1H5.33729C5.07207 1 4.81772 1.10536 4.63018 1.29289Z",fill:"#E72622",stroke:"#E72622"}),l("rect",{x:"8",y:"4",width:"3",height:"7",fill:"white"}),l("rect",{x:"8",y:"13",width:"3",height:"3",fill:"white"})]),l("span",{class:"message"},"Hello error")])])])])])])]),l("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[l("span",{class:"line-number"},"1"),l("br")])]),l("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"md"),l("pre",{class:"shiki github-dark-dimmed vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#ADBAC7"}},"```ts twoslash")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ADBAC7"}},"console."),l("span",{style:{color:"#DCBDFB"}},"log"),l("span",{style:{color:"#ADBAC7"}},"("),l("span",{style:{color:"#96D0FF"}},"'Hello log'"),l("span",{style:{color:"#ADBAC7"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#768390"}},"// @log: Hello log")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ADBAC7"}},"console."),l("span",{style:{color:"#DCBDFB"}},"warn"),l("span",{style:{color:"#ADBAC7"}},"("),l("span",{style:{color:"#96D0FF"}},"'Hello warn'"),l("span",{style:{color:"#ADBAC7"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#768390"}},"// @warn: Hello warn")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ADBAC7"}},"console."),l("span",{style:{color:"#DCBDFB"}},"error"),l("span",{style:{color:"#ADBAC7"}},"("),l("span",{style:{color:"#96D0FF"}},"'Hello error'"),l("span",{style:{color:"#ADBAC7"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#768390"}},"// @error: Hello error")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#ADBAC7"}},"```")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"```ts twoslash")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"console."),l("span",{style:{color:"#6F42C1"}},"log"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},"'Hello log'"),l("span",{style:{color:"#24292E"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6A737D"}},"// @log: Hello log")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"console."),l("span",{style:{color:"#6F42C1"}},"warn"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},"'Hello warn'"),l("span",{style:{color:"#24292E"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6A737D"}},"// @warn: Hello warn")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"console."),l("span",{style:{color:"#6F42C1"}},"error"),l("span",{style:{color:"#24292E"}},"("),l("span",{style:{color:"#032F62"}},"'Hello error'"),l("span",{style:{color:"#24292E"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6A737D"}},"// @error: Hello error")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292E"}},"```")])])]),l("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[l("span",{class:"line-number"},"1"),l("br"),l("span",{class:"line-number"},"2"),l("br"),l("span",{class:"line-number"},"3"),l("br"),l("span",{class:"line-number"},"4"),l("br"),l("span",{class:"line-number"},"5"),l("br"),l("span",{class:"line-number"},"6"),l("br"),l("span",{class:"line-number"},"7"),l("br"),l("span",{class:"line-number"},"8"),l("br"),l("span",{class:"line-number"},"9"),l("br"),l("span",{class:"line-number"},"10"),l("br")])])])],-1);function h(y,w,m,C,v,u){const e=o;return n(),t("div",null,[p,r(e,{readTime:"1",words:"152"}),d,g])}const A=a(c,[["render",h]]);export{f as __pageData,A as default};
