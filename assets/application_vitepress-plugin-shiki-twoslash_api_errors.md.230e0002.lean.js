import{_ as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.250b3e56.js";import{_ as c,C as p,o as i,c as d,H as o,k as s,w as l,a,Q as n}from"./chunks/framework.b7580407.js";import"./chunks/commonjsHelpers.725317a4.js";const is=JSON.parse('{"title":"Errors","description":"Raise compiler errors in your code examples to show incorrect states.","frontmatter":{"description":"Raise compiler errors in your code examples to show incorrect states.","title":"Errors"},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/api/errors.md","filePath":"application/vitepress-plugin-shiki-twoslash/api/errors.md","lastUpdated":1699051935000}'),h={name:"application/vitepress-plugin-shiki-twoslash/api/errors.md"},y=s("h1",{id:"errors",tabindex:"-1"},[a("Errors "),s("a",{class:"header-anchor",href:"#errors","aria-label":'Permalink to "Errors"'},"​")],-1),u=s("p",null,"Most of the time, you want to avoid errors in your code examples. Strictly speaking, this usually means setting the right compiler flags and environment in each code example.",-1),_=s("p",null,"Sometimes however, you do want to raise a compiler error — to show incorrect states. In those cases, twoslash has a way to mark the compiler errors you expect.",-1),m=s("h2",{id:"errors-num",tabindex:"-1"},[s("code",null,"@errors: [num]"),a(),s("a",{class:"header-anchor",href:"#errors-num","aria-label":'Permalink to "`@errors: [num]`"'},"​")],-1),b=s("p",null,"All TypeScript compiler errors have a number, this number is relatively arbitrary and can change between TypeScript versions. For our case these numbers are useul in declaring what we expect to see.",-1),A=s("p",null,[a("You can use "),s("code",null,"// @errors: [num]"),a(" to tell Twoslash that you expect this error to occur. This moves the compiler error message into the code example.")],-1),v={class:"vp-code-group vp-adaptive-theme"},C=n("",1),g={class:"blocks"},D={class:"language-ts vp-adaptive-theme active line-numbers-mode"},k=s("button",{title:"Copy Code",class:"copy"},null,-1),F=s("span",{class:"lang"},"ts",-1),w={class:"shiki github-dark-dimmed twoslash lsp",style:{"background-color":"#22272e",color:"#adbac7"}},E=s("div",{class:"language-id"},"ts",-1),B={class:"code-container"},f=s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"const"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},[s("data-lsp",{lsp:'const a: "123"'},"a")]),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'123'")],-1),T={class:"line"},x={style:{color:"#ADBAC7"}},S=s("data-lsp",{lsp:"const a: any"},"a",-1),P=s("span",{style:{color:"#F47067"}},"=",-1),R=s("span",{style:{color:"#ADBAC7"}}," ",-1),V=s("span",{style:{color:"#6CB6FF"}},"132",-1),N=s("span",{class:"error"},[s("span",null,"Cannot assign to 'a' because it is a constant."),s("span",{class:"code"},"2588")],-1),I=s("span",{class:"error-behind"},"Cannot assign to 'a' because it is a constant.",-1),Y={class:"shiki github-light twoslash lsp",style:{"background-color":"#fff",color:"#24292e"}},$=s("div",{class:"language-id"},"ts",-1),z={class:"code-container"},X=s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},[s("data-lsp",{lsp:'const a: "123"'},"a")]),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'123'")],-1),j={class:"line"},q={style:{color:"#24292E"}},J=s("data-lsp",{lsp:"const a: any"},"a",-1),Q=s("span",{style:{color:"#D73A49"}},"=",-1),U=s("span",{style:{color:"#24292E"}}," ",-1),L=s("span",{style:{color:"#005CC5"}},"132",-1),Z=s("span",{class:"error"},[s("span",null,"Cannot assign to 'a' because it is a constant."),s("span",{class:"code"},"2588")],-1),H=s("span",{class:"error-behind"},"Cannot assign to 'a' because it is a constant.",-1),M=s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")],-1),O=n("",1),G=s("h2",{id:"noerrors",tabindex:"-1"},[s("code",null,"@noErrors"),a(),s("a",{class:"header-anchor",href:"#noerrors","aria-label":'Permalink to "`@noErrors`"'},"​")],-1),K=s("p",null,[a("Sometimes you have needs in which a broken TypeScript build is okay. A good example of this is using a "),s("a",{href:"./queries#completions"},"completion query"),a(", which requires a broken TypeScript project to work. You can use "),s("code",null,"// @noErrors"),a(" to supress all errors in a code sample, and not have them show inline.")],-1),W=s("div",{class:"vp-code-group vp-adaptive-theme"},[s("div",{class:"tabs"},[s("input",{type:"radio",name:"group-QgAzA",id:"tab-LjhXkvo",checked:"checked"}),s("label",{for:"tab-LjhXkvo"},"output"),s("input",{type:"radio",name:"group-QgAzA",id:"tab-pY2ZJR8"}),s("label",{for:"tab-pY2ZJR8"},"markdown")]),s("div",{class:"blocks"},[s("div",{class:"language-ts vp-adaptive-theme active line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark-dimmed twoslash lsp",style:{"background-color":"#22272e",color:"#adbac7"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"const"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},[s("data-lsp",{lsp:'const a: "123"'},"a")]),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'123'")]),s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},[s("data-lsp",{lsp:"const a: any"},"a"),a()]),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"132")])])])]),s("pre",{class:"shiki github-light twoslash lsp",style:{"background-color":"#fff",color:"#24292e"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},[s("data-lsp",{lsp:'const a: "123"'},"a")]),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'123'")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},[s("data-lsp",{lsp:"const a: any"},"a"),a()]),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"132")])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])]),s("div",{class:"language-md vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"md"),s("pre",{class:"shiki github-dark-dimmed vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```ts twoslash")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"// @noErrors")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"const"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"a"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'123'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"a "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"132")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"```")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```ts twoslash")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// @noErrors")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"a"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'123'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"a "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"132")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"```")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br")])])])],-1);function ss(as,os,es,ls,ns,ts){const t=r,e=p("data-err");return i(),d("div",null,[y,o(t,{readTime:"1",words:"227"}),u,_,m,b,A,s("div",v,[C,s("div",g,[s("div",D,[k,F,s("pre",w,[E,s("div",B,[s("code",null,[f,s("div",T,[s("span",x,[o(e,null,{default:l(()=>[S]),_:1}),a()]),P,R,V]),N,I])])]),s("pre",Y,[$,s("div",z,[s("code",null,[X,s("div",j,[s("span",q,[o(e,null,{default:l(()=>[J]),_:1}),a()]),Q,U,L]),Z,H])])]),M]),O])]),G,K,W])}const ds=c(h,[["render",ss]]);export{is as __pageData,ds as default};
