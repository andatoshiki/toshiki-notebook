import { DefaultTheme } from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: 'Development',
        link: '/development/file-naming-convention',
    },
    {
        text: 'Academic',
        items: [
            {
                text: 'K-12',
                items: [
                    {
                        text: 'Chemistry',
                        link: '/academic/chemistry/index',
                        activeMatch: '/academic/chemistry/',
                    },
                    {
                        text: 'Discrete Math.',
                        link: '/discrete-math/index',
                        activeMatch: '/categories/fragments/',
                    },
                    {
                        text: 'Literature',
                        link: '/academic/literature/index',
                        activeMatch: '/academic/literature/',
                    },
                    {
                        text: 'CIS105',
                        link: '/academic/cis105/index',
                        activeMatch: '/academic/cis105/',
                    },
                ],
            },
            {
                text: 'Tools',
                items: [
                    {
                        text: 'Formulas for IPhO JPN.',
                        link: '/academic/physics/ipho-formulas-jpn/1',
                        activeMatch: '/academic/physics/ipho-formulas-jpn/',
                    },
                ],
            },
            { text: '', link: '', activeMatch: '' },
            { text: '', link: '', activeMatch: '' },
            { text: '', link: '', activeMatch: '' },
            { text: '', link: '', activeMatch: '' },
            { text: '', link: '', activeMatch: '' },
            { text: '', link: '', activeMatch: '' },
            { text: '', link: '', activeMatch: '' },
        ],
        activeMatch: '/academic/',
    },

    {
        text: 'Application',
        items: [
            {
                text: 'Personal projects',
                items: [
                    {
                        text: 'markdown-it-katex',
                        link: '/application/markdown-it-katex/how-to-use',
                        activeMatch: '/application/markdown-it-katex/',
                    },
                    {
                        text: 'vitepress-plugin-shiki-twoslash',
                        link: '/application/vitepress-plugin-shiki-twoslash/index',
                        activeMatch: '/application/vitepress-plugin-shiki-twoslash/index',
                    },
                ],
            },
        ],
        activeMatch: '/save/',
    },

    {
        text: 'Save',
        items: [
            {
                text: 'Reading',
                link: '/save/reading/index',
                activeMatch: '/save/reading/',
            },
            {
                text: 'Vocabulary',
                link: '/academic/vocabulary/index',
                activeMatch: '/academic/vocabulary/',
            },
        ],
        activeMatch: '/save/',
    },
]
