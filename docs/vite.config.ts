import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
    plugins: [
        Components({
            dirs: ['.vitepress/theme/components'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            resolvers: [
                IconsResolver({
                    componentPrefix: '',
                }),
            ],
            dts: './.vitepress/components.d.ts',
            transformer: 'vue3',
        }),
        Icons({
            compiler: 'vue3',
            autoInstall: true,
            defaultStyle: 'display: inline-block',
        }),
        UnoCSS(),
        MarkdownTransform(),
    ],
        css: {
            postcss: {
                plugins: [require('postcss-nested')],
            },
        },
    ssr: {
        noExternal: ['@andatoshiki/vitepress-plugin-nprogress', '@arco-design/web-vue'],
    },
    build: {
        chunkSizeWarningLimit: 1600,
    },
})
