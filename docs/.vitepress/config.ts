import { defineConfig } from 'vitepress'
import { customElements } from './config/customElements'
import { markdown } from './config/markdown'
import { metaData } from './config/constants'
import { head } from './config/head'
import { themeConfig } from './config/theme'
// import { buildDocsRSS } from './theme/rss'
// import { generateSitemap as sitemap } from 'sitemap-ts'

export default defineConfig({
    lang: metaData.lang, // i18n default english translation
    title: metaData.title, // title from metadata config
    description: metaData.description, // description from metadata config
    markdown: markdown, // markdown config
    lastUpdated: true, // whether enabling lastupdated or not
    head, // documentation head tag options
    themeConfig, // default exported theme config
    cleanUrls: true, // clean urls configs to remove standard genreated page file type extensions
    outDir: '../dist', // specify staic pages build output dir
    // vue template options for preventing katex build crashes
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: tag => customElements.includes(tag),
            },
        },
    },

    // buildEnd: buildDocsRSS,
    // async buildEnd() {
    //     await sitemap({ hostname: 'https://note.toshiki.dev/' })
    // },
})

customElements // custom element tags of markdown-it-katex in vitepress
