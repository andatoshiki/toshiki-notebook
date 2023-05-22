import { DefaultTheme } from 'vitepress/theme'
import { nav } from './nav'
import { sidebar } from './sidebar'
import { footer } from './footer'

export const themeConfig: DefaultTheme.Config = {
    nav, // documentation navigation bar config
    sidebar, // documentation sidebar config
    footer, // site global footer config

    logo: '/logos/logo.png',
    outline: 'deep', // documentation outline header precedence
    outlineTitle: 'TOC', // documentation outline title text
    outlineBadges: false, // whether to show badge on outline
    lastUpdatedText: 'Last updated', // config for last updated footer text
    // documentation full text search config via algolia
    algolia: {
        appId: 'G9IUR45K98',
        apiKey: '8528cc91281d8112b28f508317a96dd3',
        indexName: 'toshiki-notebook',
    },
    // documentation edit link
    editLink: {
        pattern: 'https://github.com/andatoshiki/toshiki-notebook/edit/master/docs/:path',
        text: 'Edit this page on GitHub',
    },

    socialLinks: [
        { icon: 'github', link: 'https://github.com/andatoshiki' },
        { icon: 'twitter', link: 'https://twitter.com/andatoshiki' },
    ],
    // custom vue components
    // @ts-ignore
    // surpress errors originated from the lines below of custom coponent configs in typescript
    // footerConfig: {
    //     showFooter: true, // 是否显示页脚
    //     icpRecordCode: '津ICP备2022005864号-2', // ICP备案号
    //     publicSecurityRecordCode: '津公网安备12011202000677号', // 联网备案号
    //     copyright: `Copyright © 2019-${new Date().getFullYear()} Charles7c`, // 版权信息
    //     siteRunTime: true,
    // },
}
