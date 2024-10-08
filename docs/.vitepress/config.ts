import { defineConfig, PageData } from 'vitepress'
import { customElements } from './config/customElements'
import { markdown } from './config/markdown'
import { metaData } from './config/constants'
import { head } from './config/head'
import { themeConfig } from './config/theme'
import { withTwoslash } from '@andatoshiki/vitepress-plugin-shiki-twoslash'

// import { generateSitemap as sitemap } from 'sitemap-ts'
import { genFeed } from './plugins/genFeed'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'

const links: { url: string; lastmod: PageData['lastUpdated'] }[] = []

export default withTwoslash(
    defineConfig({
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
        // i18n localization config
        locales: {
            '/': {
                label: 'English',
                lang: 'en-US',
            },
            '/jp/': {
                label: 'Japanese',
                title: 'Vue Test Utils',
                lang: 'jp-JP',
                description: 'La documentation officielle de Vue Test Utils',
            },
        },
        ignoreDeadLinks: true,
        async buildEnd(siteConfig) {
            // await sitemap({ hostname: 'https://note.toshiki.dev/' })
            await genFeed(siteConfig)
        },
        sitemap: {
            hostname: 'https://note.toshiki.dev'
        }
    })
)
customElements // custom element tags of markdown-it-katex in vitepress
