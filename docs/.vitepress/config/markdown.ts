import type { MarkdownOptions } from 'vitepress'
import mdkatex from '@andatoshiki/markdown-it-katex'
import mdTasklist from 'markdown-it-task-lists'
import mdCaption from '@andatoshiki/markdown-it-image-caption'
import mdLink from 'markdown-it-link-preview'

export const markdown: MarkdownOptions = {
    html: true,
    theme: {
        light: 'solarized-light',
        dark: 'solarized-dark',
    },
    lineNumbers: true,
    config: md => {
        // use more markdown-it plugins!
        md.use(mdkatex), md.use(mdTasklist), md.use(mdCaption), md.use(mdLink)
        // insert specific custom vue layout template slots under a markdown tag attributes (currenlty disabled and unncessary because applied via markdowntransform component)
        // md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        //     let htmlResult = slf.renderToken(tokens, idx, options);
        //     if (tokens[idx].tag === 'h1') htmlResult += `\n<ClientOnly><PageInfo /></ClientOnly>`;
        //     return htmlResult;
        //   }
    },
}
