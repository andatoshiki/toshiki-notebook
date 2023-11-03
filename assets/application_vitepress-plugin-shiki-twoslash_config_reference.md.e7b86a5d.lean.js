import{_ as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.250b3e56.js";import{_ as e,o,c as p,H as t,k as s,a,Q as c}from"./chunks/framework.b7580407.js";import"./chunks/commonjsHelpers.725317a4.js";const E=JSON.parse('{"title":"Config","description":"You can configure Twoslash to change code example output.","frontmatter":{"description":"You can configure Twoslash to change code example output.","title":"Config"},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/config/reference.md","filePath":"application/vitepress-plugin-shiki-twoslash/config/reference.md","lastUpdated":1699051935000}'),i={name:"application/vitepress-plugin-shiki-twoslash/config/reference.md"},r=s("h1",{id:"config",tabindex:"-1"},[a("Config "),s("a",{class:"header-anchor",href:"#config","aria-label":'Permalink to "Config"'},"​")],-1),d=s("h2",{id:"overview",tabindex:"-1"},[a("Overview "),s("a",{class:"header-anchor",href:"#overview","aria-label":'Permalink to "Overview"'},"​")],-1),y=s("p",null,[a("You can configure VitePress Twoslash using the "),s("code",null,"twoslash"),a(" property added to "),s("code",null,"defineConfig"),a(".")],-1),h=s("div",{class:"language-ts vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark-dimmed twoslash lsp",style:{"background-color":"#22272e",color:"#adbac7"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#768390"}},"// .vitepress/config.[ext]")]),s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}},[a(" { "),s("data-lsp",{lsp:`(alias) function defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig"),a(" } ")]),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'vitepress'")]),s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"import"),s("span",{style:{color:"#ADBAC7"}},[a(" { "),s("data-lsp",{lsp:`(alias) function withTwoslash(config: UserConfig<DefaultTheme.Config>): Promise<UserConfig<DefaultTheme.Config>>
import withTwoslash`},"withTwoslash"),a(", "),s("data-lsp",{lsp:`(alias) type TwoslashConfigSettings = any
import TwoslashConfigSettings`},"TwoslashConfigSettings"),a(" } ")]),s("span",{style:{color:"#F47067"}},"from"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#96D0FF"}},"'@andatoshiki/vitepress-plugin-shiki-twoslash'")]),s("div",{class:"line"}," "),s("div",{class:"line"},[s("span",{style:{color:"#F47067"}},"export"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#F47067"}},"default"),s("span",{style:{color:"#F69D50"}}," "),s("span",{style:{color:"#DCBDFB"}},[s("data-lsp",{lsp:`(alias) withTwoslash(config: UserConfig<DefaultTheme.Config>): Promise<UserConfig<DefaultTheme.Config>>
import withTwoslash`},"withTwoslash")]),s("span",{style:{color:"#F69D50"}},"(")]),s("div",{class:"line"},[s("span",{style:{color:"#F69D50"}},"    "),s("span",{style:{color:"#DCBDFB"}},[s("data-lsp",{lsp:`(alias) defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig")]),s("span",{style:{color:"#F69D50"}},"({")]),s("div",{class:"line"},[s("span",{style:{color:"#F69D50"}},"        "),s("span",{style:{color:"#ADBAC7"}},[s("data-lsp",{lsp:"(property) UserConfig<DefaultTheme.Config>.twoslash?: any"},"twoslash"),a(": {")])]),s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"            "),s("span",{style:{color:"#768390"}},"// Your VitePress Twoslash options")]),s("div",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        }"),s("span",{style:{color:"#F69D50"}},",")]),s("div",{class:"line"},[s("span",{style:{color:"#F69D50"}},"    })")]),s("div",{class:"line"},[s("span",{style:{color:"#F69D50"}},")")])])])]),s("pre",{class:"shiki github-light twoslash lsp",style:{"background-color":"#fff",color:"#24292e"}},[s("div",{class:"language-id"},"ts"),s("div",{class:"code-container"},[s("code",null,[s("div",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// .vitepress/config.[ext]")]),s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}},[a(" { "),s("data-lsp",{lsp:`(alias) function defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig"),a(" } ")]),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vitepress'")]),s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}},[a(" { "),s("data-lsp",{lsp:`(alias) function withTwoslash(config: UserConfig<DefaultTheme.Config>): Promise<UserConfig<DefaultTheme.Config>>
import withTwoslash`},"withTwoslash"),a(", "),s("data-lsp",{lsp:`(alias) type TwoslashConfigSettings = any
import TwoslashConfigSettings`},"TwoslashConfigSettings"),a(" } ")]),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@andatoshiki/vitepress-plugin-shiki-twoslash'")]),s("div",{class:"line"}," "),s("div",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},[s("data-lsp",{lsp:`(alias) withTwoslash(config: UserConfig<DefaultTheme.Config>): Promise<UserConfig<DefaultTheme.Config>>
import withTwoslash`},"withTwoslash")]),s("span",{style:{color:"#24292E"}},"(")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},[s("data-lsp",{lsp:`(alias) defineConfig(config: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config>
import defineConfig`},"defineConfig")]),s("span",{style:{color:"#24292E"}},"({")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},[a("        "),s("data-lsp",{lsp:"(property) UserConfig<DefaultTheme.Config>.twoslash?: any"},"twoslash"),a(": {")])]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6A737D"}},"// Your VitePress Twoslash options")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},"    })")]),s("div",{class:"line"},[s("span",{style:{color:"#24292E"}},")")])])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),u=c("",26);function f(g,m,b,D,C,F){const n=l;return o(),p("div",null,[r,t(n,{readTime:"1",words:"248"}),d,y,h,u])}const T=e(i,[["render",f]]);export{E as __pageData,T as default};
