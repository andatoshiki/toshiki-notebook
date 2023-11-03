import{_ as e}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.250b3e56.js";import{_ as o,o as n,c as t,H as c,k as s,a as l}from"./chunks/framework.b7580407.js";import"./chunks/commonjsHelpers.725317a4.js";const W=JSON.parse('{"title":"Cutting","description":"Remove unnecessary code from your examples.","frontmatter":{"description":"Remove unnecessary code from your examples.","title":"Cutting"},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/api/cutting.md","filePath":"application/vitepress-plugin-shiki-twoslash/api/cutting.md","lastUpdated":1699051935000}'),r={name:"application/vitepress-plugin-shiki-twoslash/api/cutting.md"},p=s("h1",{id:"cutting",tabindex:"-1"},[l("Cutting "),s("a",{class:"header-anchor",href:"#cutting","aria-label":'Permalink to "Cutting"'},"​")],-1),i=s("p",null,"Every Twoslash code example needs to be a complete TypeScript program so it can compile. Quite often to make it compile, there is a bunch of code which isn't relevant to the user. This can be extracted out of the code examples via cut comments.",-1),d=s("h2",{id:"cut",tabindex:"-1"},[s("code",null,"---cut---"),l(),s("a",{class:"header-anchor",href:"#cut","aria-label":'Permalink to "`---cut---`"'},"​")],-1),y=s("p",null,[l("Cut works after TypeScript has generated the project and pulled out all the editor information (like identifiers, queries, highlights etc) and then amends all of their offsets and lines to re-fit the smaller output. What your user sees is everything below the "),s("code",null,"---cut---"),l(".")],-1),u=s("div",{class:"vp-code-group vp-adaptive-theme"},[s("div",{class:"tabs"},[s("input",{type:"radio",name:"group-Pof92",id:"tab-5hj6UyJ",checked:"checked"}),s("label",{for:"tab-5hj6UyJ"},"output"),s("input",{type:"radio",name:"group-Pof92",id:"tab-NiHW1ms"}),s("label",{for:"tab-NiHW1ms"},"markdown")]),s("div",{class:"blocks"},[s("div",{class:"language-ts vp-adaptive-theme active line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark-dimmed twoslash lsp",style:{"background-color":"#22272e",color:"#adbac7"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},[s("data-lsp",{lsp:"var console: Console"},"console"),l(".")]),s("span",{style:{color:"#DCBDFB"}},[s("data-lsp",{lsp:"(method) Console.log(...data: any[]): void"},"log")]),s("span",{style:{color:"#ADBAC7"}},[l("("),s("data-lsp",{lsp:"const level: string"},"level"),l(")")])])])])]),s("pre",{class:"shiki github-light twoslash lsp",style:{"background-color":"#fff",color:"#24292e"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},[s("data-lsp",{lsp:"var console: Console"},"console"),l(".")]),s("span",{style:{color:"#6F42C1"}},[s("data-lsp",{lsp:"(method) Console.log(...data: any[]): void"},"log")]),s("span",{style:{color:"#24292E"}},[l("("),s("data-lsp",{lsp:"const level: string"},"level"),l(")")])])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])]),s("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki github-dark-dimmed vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"const"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"level"),s("span",{style:{color:"#F47067"}},":"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"string"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'Danger'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// ---cut---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"console."),s("span",{style:{color:"#DCBDFB"}},"log"),s("span",{style:{color:"#ADBAC7"}},"(level)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"level"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'Danger'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// ---cut---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(level)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br")])])])],-1),h=s("p",null,[l("Cutting even works across "),s("a",{href:"./multi-file"},"multiple files"),l(". This is why "),s("code",null,"// @filename: [file]"),l(" is specifically the only Twoslash command which is not removed, because if it's not relevant it can be "),s("code",null,"---cut---"),l(" away.")],-1),m=s("div",{class:"vp-code-group vp-adaptive-theme"},[s("div",{class:"tabs"},[s("input",{type:"radio",name:"group-wrmVz",id:"tab-2b4PoNy",checked:"checked"}),s("label",{for:"tab-2b4PoNy"},"output"),s("input",{type:"radio",name:"group-wrmVz",id:"tab-qJO2Ms2"}),s("label",{for:"tab-qJO2Ms2"},"markdown")]),s("div",{class:"blocks"},[s("div",{class:"language-ts vp-adaptive-theme active line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark-dimmed twoslash lsp",style:{"background-color":"#22272e",color:"#adbac7"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}},[l(" { "),s("data-lsp",{lsp:`(alias) const helloWorld: string
import helloWorld`},"helloWorld"),l(" } ")]),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'./a'")]),s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},[s("data-lsp",{lsp:"var console: Console"},"console"),l(".")]),s("span",{style:{color:"#DCBDFB"}},[s("data-lsp",{lsp:"(method) Console.log(...data: any[]): void"},"log")]),s("span",{style:{color:"#ADBAC7"}},[l("("),s("data-lsp",{lsp:`(alias) const helloWorld: string
import helloWorld`},"helloWorld"),l(")")])])])])]),s("pre",{class:"shiki github-light twoslash lsp",style:{"background-color":"#fff",color:"#24292e"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}},[l(" { "),s("data-lsp",{lsp:`(alias) const helloWorld: string
import helloWorld`},"helloWorld"),l(" } ")]),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./a'")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},[s("data-lsp",{lsp:"var console: Console"},"console"),l(".")]),s("span",{style:{color:"#6F42C1"}},[s("data-lsp",{lsp:"(method) Console.log(...data: any[]): void"},"log")]),s("span",{style:{color:"#24292E"}},[l("("),s("data-lsp",{lsp:`(alias) const helloWorld: string
import helloWorld`},"helloWorld"),l(")")])])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])]),s("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki github-dark-dimmed vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: a.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"export"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"const"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"helloWorld"),s("span",{style:{color:"#F47067"}},":"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"string"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'Hi'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// @filename: b.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// ---cut---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}}," { helloWorld } "),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'./a'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"console."),s("span",{style:{color:"#DCBDFB"}},"log"),s("span",{style:{color:"#ADBAC7"}},"(helloWorld)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```ts twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: a.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"helloWorld"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'Hi'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @filename: b.ts")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// ---cut---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { helloWorld } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./a'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(helloWorld)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br")])])])],-1),b=s("h2",{id:"cut-after",tabindex:"-1"},[s("code",null,"---cut-after---"),l(),s("a",{class:"header-anchor",href:"#cut-after","aria-label":'Permalink to "`---cut-after---`"'},"​")],-1),C=s("p",null,[l("The sibling to "),s("code",null,"---cut---"),l(", which trims anything after the sigil:")],-1),g=s("div",{class:"vp-code-group vp-adaptive-theme"},[s("div",{class:"tabs"},[s("input",{type:"radio",name:"group-K1hzs",id:"tab-XbOFc5e",checked:"checked"}),s("label",{for:"tab-XbOFc5e"},"output"),s("input",{type:"radio",name:"group-K1hzs",id:"tab-V5UQGCJ"}),s("label",{for:"tab-V5UQGCJ"},"markdown")]),s("div",{class:"blocks"},[s("div",{class:"language-tsx vp-adaptive-theme active line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"tsx"),s("pre",{class:"shiki github-dark-dimmed twoslash lsp",style:{"background-color":"#22272e",color:"#adbac7"}},[s("div",{class:"language-id"},"tsx"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    <"),s("span",{style:{color:"#8DDB8C"}},[s("data-lsp",{lsp:"any"},"Container")]),s("span",{style:{color:"#ADBAC7"}},">")]),s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        <"),s("span",{style:{color:"#8DDB8C"}},[s("data-lsp",{lsp:"any"},"ImportantComponent")]),s("span",{style:{color:"#ADBAC7"}}," />")]),s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    </"),s("span",{style:{color:"#8DDB8C"}},[s("data-lsp",{lsp:"any"},"Container")]),s("span",{style:{color:"#ADBAC7"}},">")])])])]),s("pre",{class:"shiki github-light twoslash lsp",style:{"background-color":"#fff",color:"#24292e"}},[s("div",{class:"language-id"},"tsx"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#005CC5"}},[s("data-lsp",{lsp:"any"},"Container")]),s("span",{style:{color:"#24292E"}},">")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#005CC5"}},[s("data-lsp",{lsp:"any"},"ImportantComponent")]),s("span",{style:{color:"#24292E"}}," />")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#005CC5"}},[s("data-lsp",{lsp:"any"},"Container")]),s("span",{style:{color:"#24292E"}},">")])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])]),s("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki github-dark-dimmed vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```tsx twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"const"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"Page"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," () "),s("span",{style:{color:"#F47067"}},"=>"),s("span",{style:{color:"#ADBAC7"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#768390"}},"// ---cut---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    <"),s("span",{style:{color:"#8DDB8C"}},"Container"),s("span",{style:{color:"#ADBAC7"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        <"),s("span",{style:{color:"#8DDB8C"}},"ImportantComponent"),s("span",{style:{color:"#ADBAC7"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    </"),s("span",{style:{color:"#8DDB8C"}},"Container"),s("span",{style:{color:"#ADBAC7"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#768390"}},"// ---cut-after---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```tsx twoslash")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Page"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// ---cut---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#005CC5"}},"Container"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#005CC5"}},"ImportantComponent"),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#005CC5"}},"Container"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// ---cut-after---")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br")])])])],-1);function A(v,D,B,f,k,E){const a=e;return n(),t("div",null,[p,c(a,{readTime:"1",words:"242"}),i,d,y,u,h,m,b,C,g])}const x=o(r,[["render",A]]);export{W as __pageData,x as default};
