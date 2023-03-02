import { DefaultTheme } from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: 'Academic',
        items: [
            {
                text: 'K-12',
                items: [
                    { text: 'Chemistry', link: '/academic/chemistry/index', activeMatch: '/academic/chemistry/' },
                    { text: 'Discrete Math.', link: '/discrete-math/index', activeMatch: '/categories/fragments/' },
                    { text: 'Literature', link: '/academic/literature/index', activeMatch: '/academic/literature/' },
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
                        link: '/application/markdown-it-katex/index',
                        activeMatch: '/application/markdown-it-katex/',
                    },
                    { text: '', link: '', activeMatch: '' },
                ],
            },
        ],
        activeMatch: '/save/',
    },

    {
        text: 'Save',
        items: [
            { text: 'Reading', link: '/save/reading/index', activeMatch: '/save/reading/' },
            { text: 'Vocabulary', link: '/academic/vocabulary/index', activeMatch: '/academic/vocabulary/' },
        ],
        activeMatch: '/save/',
    },
]
