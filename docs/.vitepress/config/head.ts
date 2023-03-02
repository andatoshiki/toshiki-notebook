import type { HeadConfig } from 'vitepress'
import { metaData } from './constants'

export const head: HeadConfig[] = [
    // stylesheets loaded from thrid-party cdns
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.toshiki.dev/ajax/libs/KaTeX/0.16.0/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.toshiki.dev/ajax/libs/font-awesome/6.3.0/css/all.min.css' }],

    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'Anda Toshiki' }],
    [
        'meta',
        {
            name: 'keywords',
            content:
                'Toshiki, Anda Toshiki, andatoshiki, GitHub, GitHub action, Vitepress, Vite, Notebook, Knowledge base, Programming, Programming Notes, Academic, Personal, Notebook, Productivity, Journal, Note-taking, Markdown, Notepad, Organization, Tutorial',
        },
    ],

    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: metaData.locale }],
    ['meta', { property: 'og:title', content: metaData.title }],
    ['meta', { property: 'og:description', content: metaData.description }],
    ['meta', { property: 'og:site', content: metaData.site }],
    ['meta', { property: 'og:site_name', content: metaData.title }],
    ['meta', { property: 'og:image', content: metaData.image }],

    // site runtime/runtime & print the countdown in html
    // migrated to CustomLayout.vue as a global/standalone scrirpt module for load of all site pages
    [
        'script',
        {},
        `function siteruntime() {window.setTimeout("siteruntime()", 1000);        X = new Date("8/24/2021 10:28:00");        Y = new Date();        T = (Y.getTime() - X.getTime());        M = 24 * 60 * 60 * 1000;        a = T / M;        A = Math.floor(a);        b = (a - A) * 24;        B = Math.floor(b);        c = (b - B) * 60;        C = Math.floor((b - B) * 60);        D = Math.floor((c - C) * 60);        siteruntime_span.innerHTML = "This site has been running for: " + A + " " + "day(s)" + " " + B + "hour(s)" + C + "minute(s)" + D + "second(s)"    }siteruntime();
        `,
    ],

    // self-hosted umami instance for website analytics tracking
    [
        'script',
        {
            async: 'true',
            defer: 'true',
            'data-website-id': '86de8554-d4c9-4f2b-b62a-068b71241048',
            src: 'https://umami.toshiki.dev/umami.js',
        },
    ],
]
