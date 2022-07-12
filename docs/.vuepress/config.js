const { searchPlugin } = require('@vuepress/plugin-search')
const { defaultTheme } = require('vuepress')
const { activeHeaderLinksPlugin } = require('@vuepress/plugin-active-header-links')
const { copyCodePlugin } = require("vuepress-plugin-copy-code2");

module.exports = {
    title: '俊樹の筆記',
    description: '俊樹の筆記via Vuepress!',
    lang: 'en-US',
    head: [
        ['link', {
            rel: 'icon',
            href: '/images/favicon.ico'
        }],
        // ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
        // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }]
    ],
    // default theme config
    extendsMarkdown: md => {
        md.use(require('@iktakahiro/markdown-it-katex'))
        md.linkify.set({
            fuzzyEmail: false
        })
    },
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search....',
                    isSearchable: (page) => page.path !== '/',
                    getExtraFields: (page) => page.frontmatter.tags ?? [],
                },
            }
        }),
        activeHeaderLinksPlugin({
            // options
        }),
        copyCodePlugin({
            // your options
          }),
    ],
    theme: defaultTheme ({
        colorModeSwitch: 'true',
        toggleColorMode: 'true',
        logo: '/images/avatar.png',
        lastUpdated: 'true',
        lastUpdatedText: 'Last Updated',
        sidebar: {
            '/application/toshiki-proxypool/': [{
                text: 'Toshiki\'s Proxypool',
                collapsible: true,
                children: [
                    '/application/toshiki-proxypool/readme.md',
                    '/application/toshiki-proxypool/fixup.md',
                    '/application/toshiki-proxypool/333.md'
                ]
            }, ],
            '/programming/csharp': [{
                text: 'Ch1-C# Intro',
                collapsible: true,
                children: [
                    '/programming/csharp/ch1-intro/1-1-intro.md',
                    '/programming/csharp/ch1-intro/1-2-first-program.md'
                ],
            }, ],
                        '/statistics/problems': [{
                 text: 'Statistics Problems',
                 collapsible: true,
                 children: [
                    '/statistics/problems/problem-1.md',
                    '/statistics/problems/problem-2.md'
                 ],       
            }, ],
        },
        navbar: [{
                text: '前端内卷不归路',
                activeMatch: '^/interview',
                link: '/interview/base/types.md'
            },
            {
                text: '在线工具',
                children: [{
                        text: '网页工具',
                        link: '/online-tools/',
                        activeMatch: '/online-tools/$'
                    },
                    '/online-tools/bookmark-scripts.md'
                ]
            },
            {
                text: '工具方法',
                children: [
                    '/utils/regexp.md',
                    '/utils/function.md',
                    '/utils/library.md'
                ]
            },
            // {
            //     text: 'Vue / CSS / Node',
            //     children: [{
            //             text: 'Node 相关',
            //             children: ['/node/npm.md', '/node/toolkit.md']
            //         },
            //         {
            //             text: 'CSS',
            //             children: [
            //                     text: 'CSS 语法相关',
            //                     link: '/css/',
            //                     activeMatch: '/css/$'
            //                 },
            //                 '/css/skill.md',
            //                 '/css/scss.md'
            //             ]
            //         },
            //         {
            //             text: 'Vue',
            //             children: ['/vue/']
            //         },
            //         {
            //             text: '疑难杂症',
            //             children: ['/issue/h5.md', '/issue/pc.md']
            //         }
            //     ]
            // },
            {
                text: 'Git',
                activeMatch: '^/git',
                link: '/git/README.md'
            },
            {
                text: '软件推荐',
                children: [
                    '/software/cross-platform.md',
                    '/software/mac.md',
                    '/software/windows.md',
                    '/software/browser.md',
                    '/software/vscode.md',
                    '/software/webstorm.md',
                    '/software/zsh.md'
                ]
            },
            {
                text: '主页和作品',
                children: [{
                        text: 'Blog',
                        link: 'https://www.fe-mm.com'
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/maomao1996'
                    },
                    {
                        text: '在线音乐',
                        link: 'https://netease-music.fe-mm.com'
                    }
                ]
            }
        ],
    }),
}

// const { defaultTheme } = require('@vuepress/theme-default')
// module.exports = {
//   theme: defaultTheme({
//     // default theme config
//   })
// }