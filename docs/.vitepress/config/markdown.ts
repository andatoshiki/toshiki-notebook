import type { MarkdownOptions } from 'vitepress'
import mdkatex from '@andatoshiki/markdown-it-katex'
import mdTasklist from 'markdown-it-task-lists'
import mdCaption from '@andatoshiki/markdown-it-image-caption'
import mdLink from 'markdown-it-link-preview'

export const markdown: MarkdownOptions = {
    html: true,
    theme: {
        light: 'one-dark-pro',
        dark: 'material-theme-palenight',
    },
    lineNumbers: true,
    config: md => {
        // use more markdown-it plugins!
        md.use(mdkatex), md.use(mdTasklist), md.use(mdCaption), md.use(mdLink)
    },
}
