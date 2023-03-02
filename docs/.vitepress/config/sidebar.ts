import { DefaultTheme } from 'vitepress/theme'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    // sidebar configs for academic realted documents
    // chemistry
    '/academic/chemistry/': [
        {
            text: 'Notes',
            collapsed: true,
            items: [
                { text: '12-5: Reaction Mechanism', link: '/academic/chemistry/notes/12-5' },
                { text: '', link: '' },
                { text: '', link: '' },
                { text: '', link: '' },
                { text: '', link: '' },
                { text: '', link: '' },
                { text: '', link: '' },
                { text: '', link: '' },
            ],
        },
        {
            text: 'Problems & Solutions',
            collapsed: true,
            items: [
                { text: 'Problem: 02-20', link: '/academic/chemistry/problems/02-20' },
                { text: 'Problem: 03-02-1', link: '/academic/chemistry/problems/03-02-1' },
                { text: 'Problem: 03-02-2', link: '/academic/chemistry/problems/03-02-2' },
                { text: 'Problem: 03-02-3', link: '/academic/chemistry/problems/03-02-3' },
            ],
        },
    ],
    // chemistry sidebar end

    '/academic/physics': [
        {
            text: 'IPhO Formulas: JP Ver.',
            collapsed: true,
            items: [
                { text: '1: 数学', link: '/academic/physics/ipho-formulas-jpn/1' },
                { text: '2: 一般的な推奨事', link: '/academic/physics/ipho-formulas-jpn/2' },
                { text: '3: 運動学', link: '/academic/physics/ipho-formulas-jpn/3' },
                { text: '4: 力学', link: '/academic/physics/ipho-formulas-jpn/4' },
                { text: '5: 振動と波', link: '/academic/physics/ipho-formulas-jpn/5' },
                { text: '6: 幾何光学，測光', link: '/academic/physics/ipho-formulas-jpn/6' },
                { text: '7: 波動光学', link: '/academic/physics/ipho-formulas-jpn/7' },
                { text: '8: 電気回路', link: '/academic/physics/ipho-formulas-jpn/8' },
                { text: '9: 電磁気学', link: '/academic/physics/ipho-formulas-jpn/9' },
                { text: '10: 熱力', link: '/academic/physics/ipho-formulas-jpn/10' },
                { text: '11: 量子力学', link: '/academic/physics/ipho-formulas-jpn/11' },
                { text: '12: Keplerの法則', link: '/academic/physics/ipho-formulas-jpn/12' },
                { text: '13: 相対性理論', link: '/academic/physics/ipho-formulas-jpn/13' },
            ],
        },
    ],

    // vocabulary
    '/academic/vocabulary/': [
        {
            text: 'Vocabulary',
            collapsed: true,
            items: [{ text: '2023-02-27', link: '/academic/vocabulary/2023/02/2023-02-27' }],
        },
    ],
    // vocabulary sidebar end

    // literature
    '/academic/literature/': [
        {
            text: 'Writing Resources',
            collapsed: true,
            items: [
                // for writing resoures directory
                {
                    text: 'Patterns of Organization and Methods of Development',
                    link: '/academic/literature/writing/methods-of-development',
                },
            ],
        },
    ],

    '/javascript/': [
        {
            text: '1: Basic JavaScript-Value, Variables, and Control Flow',
            collapsed: true,
            items: [
                { text: '1-1: Numbers', link: '/javascript/notes/1/1-1' },
                { text: '', link: '' },
                { text: '', link: '' },
                { text: '', link: '' },
                { text: '', link: '' },
            ],
        },
    ],

    '/save/reading/': [
        {
            text: 'Outliers',
            collapsed: true,
            items: [
                { text: 'Introduction & Chapter 1: The Roseto Mystery', link: '/save/reading/outliers/1' },
                { text: 'Chapter 2: The 10,000-Hour Rule', link: '/save/reading/outliers/2' },
                { text: 'Chapter 3: The Trouble with Geniuses, Part 1', link: '/save/reading/outliers/3' },
                { text: 'Chapter 4: The Trouble with Geniuses, Part 2', link: '/save/reading/outliers/4' },
                // { text: 'Chapter 5: ', link: '/save/reading/outliers/5' },
                // { text: 'Chapter 6: ', link: '/save/reading/outliers/6' },
            ],
        },
    ],
}
