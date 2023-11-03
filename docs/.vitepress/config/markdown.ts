import process from 'node:process'
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import { ElementTransform } from '@nolebase/markdown-it-element-transform'
import type { MarkdownOptions } from 'vitepress'
import mdkatex from '@andatoshiki/markdown-it-katex'
import mdTasklist from 'markdown-it-task-lists'
import mdCaption from '@andatoshiki/markdown-it-image-caption'
// import mdLink from 'markdown-it-link-preview'

export const markdown: MarkdownOptions = {
    html: true,
    theme: {
        light: 'github-light',
        dark: 'github-dark-dimmed'
    },
    lineNumbers: true,
    config: md => {
        // use more markdown-it plugins!
        md.use(mdkatex),
        md.use(mdTasklist),
        md.use(mdCaption), 
        // md.use(mdLink),
        md.use(BiDirectionalLinks({ 
            dir: 'docs/', 
          })),
        md.use(ElementTransform, (() => {
        let transformNextLinkCloseToken = false

        return {
            transform(token) {
            switch (token.type) {
                case 'link_open':
                if (token.attrGet('class') !== 'header-anchor') {
                    token.tag = 'VPNolebaseInlineLinkPreview'
                    transformNextLinkCloseToken = true
                }
                break
                case 'link_close':
                if (transformNextLinkCloseToken) {
                    token.tag = 'VPNolebaseInlineLinkPreview'
                    transformNextLinkCloseToken = false
                }

                break
            }
            },
        }
        })())
        // insert specific custom vue layout template slots under a markdown tag attributes (currenlty disabled and unncessary because applied via markdowntransform component)
        // md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        //     let htmlResult = slf.renderToken(tokens, idx, options);
        //     if (tokens[idx].tag === 'h1') htmlResult += `\n<ClientOnly><PageInfo /></ClientOnly>`;
        //     return htmlResult;
        //   }
    },
}
