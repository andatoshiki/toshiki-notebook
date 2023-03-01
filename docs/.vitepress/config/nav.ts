import { DefaultTheme } from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: '📚 Academic',
        items: [
            { text: '🧪 Chemistry', link: '/academic/chemistry/index', activeMatch: '/academic/chemistry/' },
            { text: '✍️ Literature', link: '/academic/literature/index', activeMatch: '/academic/literature/' },
            { text: '', link: '', activeMatch: '' },
            { text: '🧮 Discrete Math.', link: '/discrete-math/index', activeMatch: '/categories/fragments/' },
            { text: '🥠 Vocabulary', link: '/academic/vocabulary/index', activeMatch: '/academic/vocabulary/' },
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
        text: '💾 Save',
        items: [{ text: '📰 Reading', link: '/save/reading/index', activeMatch: '/save/reading/' }],
        activeMatch: '/courses/',
    },
]
