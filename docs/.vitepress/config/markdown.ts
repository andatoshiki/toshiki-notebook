import type { MarkdownOptions } from 'vitepress'
import mdkatex from '@andatoshiki/markdown-it-katex'

export const markdown: MarkdownOptions = {
    theme: {
        light: 'one-dark-pro',
        dark: 'material-theme-palenight',
    },
    lineNumbers: true,
    config: md => {
        // use more markdown-it plugins!
        md.use(mdkatex)
    },
}
