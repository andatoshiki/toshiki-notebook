import { groupCollapsed } from 'console'
import { DefaultTheme } from 'vitepress/theme'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    // development related documents
    '/development/': [
        {
            text: 'Notes & Issues',
            collapsed: false,
            items: [
                {
                    text: 'File Naming Convention',
                    link: '/development/file-naming-convention',
                },
                { text: 'RClone for R2', link: '/development/rclone-for-r2' },
                { text: 'Proxies Configuration for Shells & Terminal', link: '/development/proxy4shell-terminal' },
            ],
        },
        {
            text: 'コードで学ぶAWS入門',
            collapsed: false,
            items: [
                { text: '背景', link: '/development/aws/index' },
                { text: 'はじめに！', link: '/development/aws/main' },
                { text: 'クラウド概論', link: '/development/aws/cloud.md' },
                { text: 'AWS 入門', link: '/development/aws/aws-get-started' },
                {
                    text: 'Hands-on 1: 初めての EC2 インスタンスを起動する',
                    link: '/development/aws/handson-ec2.md',
                },
                {
                    text: 'クラウドで行う科学計算・機械学習',
                    link: '/development/aws/scientific-computing.md',
                },
                {
                    text: 'Hands-on 2: AWS でディープラーニングを実践',
                    link: '/development/aws/handson-ec2.md',
                },
                { text: 'Docker 入門', link: '/development/aws/docker-system' },
                {
                    text: 'Hands-on 3: AWS で自動質問回答ボットを走らせる',
                    link: '/development/aws/handson-qabot',
                },
                {
                    text: 'Hands-on 4: AWS Batch を使って機械学習のハイパーパラメータサーチを並列化する',
                    link: '/development/aws/aws-batch',
                },
                { text: 'Web サービスの作り方', link: '/development/aws/webserver' },
                {
                    text: 'Serverless architecture',
                    link: '/development/aws/serverless',
                },
                {
                    text: 'Hands-on 5: サーバーレス入門',
                    link: '/development/aws/handson-serverless',
                },
                {
                    text: 'Hands-on 6: Bashoutter',
                    link: '/development/aws/handson-bashoutter',
                },
                { text: 'まとめ', link: '/development/aws/closing' },
                { text: 'ppendix: 環境構築', link: '/development/aws/appendix' },
                { text: '謝辞', link: '/development/aws/acknowledgement' },
            ],
        },
    ],
    // sidebar configs for academic related documents
    // chemistry
    '/academic/chemistry/': [
        {
            text: 'Textbook',
            collapsed: true,
            items: [
                {
                    text: '12-5: Reaction Mechanism',
                    link: '/academic/chemistry/notes/12-5',
                },
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
            text: 'Kinetics',
            collapsed: false,
            items: [
                {
                    text: 'Rate determining steps',
                    link: '/academic/chemistry/notes/kinetics/rate-determining-step',
                },
                // docs/academic/chemistry/notes/kinetics/rate-determining-step.md
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
                {
                    text: 'Problem: 03-02-1',
                    link: '/academic/chemistry/problems/03-02-1',
                },
                {
                    text: 'Problem: 03-02-2',
                    link: '/academic/chemistry/problems/03-02-2',
                },
                {
                    text: 'Problem: 03-02-3',
                    link: '/academic/chemistry/problems/03-02-3',
                },
            ],
        },
    ],
    // chemistry sidebar end

    '/academic/physics': [
        {
            text: 'IPhO Formulas: JP Ver.',
            collapsed: false,
            items: [
                { text: '1: 数学', link: '/academic/physics/ipho-formulas-jpn/1' },
                {
                    text: '2: 一般的な推奨事',
                    link: '/academic/physics/ipho-formulas-jpn/2',
                },
                { text: '3: 運動学', link: '/academic/physics/ipho-formulas-jpn/3' },
                { text: '4: 力学', link: '/academic/physics/ipho-formulas-jpn/4' },
                { text: '5: 振動と波', link: '/academic/physics/ipho-formulas-jpn/5' },
                {
                    text: '6: 幾何光学，測光',
                    link: '/academic/physics/ipho-formulas-jpn/6',
                },
                { text: '7: 波動光学', link: '/academic/physics/ipho-formulas-jpn/7' },
                { text: '8: 電気回路', link: '/academic/physics/ipho-formulas-jpn/8' },
                { text: '9: 電磁気学', link: '/academic/physics/ipho-formulas-jpn/9' },
                { text: '10: 熱力', link: '/academic/physics/ipho-formulas-jpn/10' },
                {
                    text: '11: 量子力学',
                    link: '/academic/physics/ipho-formulas-jpn/11',
                },
                {
                    text: '12: Keplerの法則',
                    link: '/academic/physics/ipho-formulas-jpn/12',
                },
                {
                    text: '13: 相対性理論',
                    link: '/academic/physics/ipho-formulas-jpn/13',
                },
            ],
        },
    ],

    '/academic/cis105/': [
        {
            text: 'CIS 105: Computer Applications and Information Technology',
            collapsed: false,
            items: [
                {
                    text: 'Course Overview & Schedule',
                    link: '/academic/cis105/index',
                },
                {
                    text: 'Lect 1: Everything Changes',
                    link: '/academic/cis105/cis105-l1-lecture-note',
                },
                {
                    text: 'Lect 2: Application Software',
                    link: '/academic/cis105/cis105-l2-lecture-note',
                },
                {
                    text: 'Lect 3: Computer Hardware',
                    link: '/academic/cis105/cis105-l3-lecture-note',
                },
                {
                    text: 'Lect 4: Formulas and Functions',
                    link: '/academic/cis105/cis105-l4-lecture-note',
                },
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
                {
                    text: 'Introduction & Chapter 1: The Roseto Mystery',
                    link: '/save/reading/outliers/1',
                },
                {
                    text: 'Chapter 2: The 10,000-Hour Rule',
                    link: '/save/reading/outliers/2',
                },
                {
                    text: 'Chapter 3: The Trouble with Geniuses, Part 1',
                    link: '/save/reading/outliers/3',
                },
                {
                    text: 'Chapter 4: The Trouble with Geniuses, Part 2',
                    link: '/save/reading/outliers/4',
                },
                // { text: 'Chapter 5: ', link: '/save/reading/outliers/5' },
                // { text: 'Chapter 6: ', link: '/save/reading/outliers/6' },
            ],
        },
    ],

    '/application/markdown-it-katex/': [
        {
            text: 'markdown-it-katex',
            collapsed: false,
            items: [
                {
                    text: '1: How to use?',
                    link: '/application/markdown-it-katex/how-to-use',
                },
                {
                    text: '2: KaTeX supported functions',
                    link: '/application/markdown-it-katex/support-function',
                },
                {
                    text: '3: KaTeX support tables',
                    link: '/application/markdown-it-katex/support-table',
                },
                { text: '4: Tips', link: '/application/markdown-it-katex/tips' },
                // { text: 'Chapter 5: ', link: '/save/reading/outliers/5' },
                // { text: 'Chapter 6: ', link: '/save/reading/outliers/6' },
            ],
        },
    ],

    '/application/vitepress-plugin-shiki-twoslash/': [
        {
            text: 'Guide',
            collapsed: false,
            items: [
                {
                    text: 'Getting Started',
                    link: '/application/vitepress-plugin-shiki-twoslash/',
                },
                {
                    text: 'Markdown Extensions',
                    link: '/application/vitepress-plugin-shiki-twoslash/guide/markdown-extensions',
                },
                {
                    text: 'Using a Custom Theme',
                    link: '/application/vitepress-plugin-shiki-twoslash/guide/custom-theme',
                },
            ],
        },
        {
            text: 'Features',
            collapsed: false,
            items: [
                {
                    text: 'Queries',
                    link: '/application/vitepress-plugin-shiki-twoslash/api/queries',
                },
                {
                    text: 'Errors',
                    link: '/application/vitepress-plugin-shiki-twoslash/api/errors',
                },
                {
                    text: 'Emit',
                    link: '/application/vitepress-plugin-shiki-twoslash/api/emit',
                },
                {
                    text: 'Cutting',
                    link: '/application/vitepress-plugin-shiki-twoslash/api/cutting',
                },
                {
                    text: 'Multi-file',
                    link: '/application/vitepress-plugin-shiki-twoslash/api/multi-file',
                },
                {
                    text: '@types',
                    link: '/application/vitepress-plugin-shiki-twoslash/api/types',
                },
                {
                    text: 'Meta Annotations',
                    link: '/application/vitepress-plugin-shiki-twoslash/api/annotations',
                },
                {
                    text: 'Logging',
                    link: '/application/vitepress-plugin-shiki-twoslash/api/logging',
                },
                {
                    text: 'Includes',
                    link: '/application/vitepress-plugin-shiki-twoslash/api/includes',
                },
            ],
        },
        {
            text: 'Config',
            collapsed: false,
            items: [
                {
                    text: 'Reference',
                    link: '/application/vitepress-plugin-shiki-twoslash/config/reference',
                },
                {
                    text: 'Compiler Flags',
                    link: '/application/vitepress-plugin-shiki-twoslash/config/flags',
                },
            ],
        },
    ],
}
