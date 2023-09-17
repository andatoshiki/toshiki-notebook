import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'node:path'
import { createRequire } from 'node:module'
import type { UserConfig } from 'vite'

const require = createRequire(import.meta.url)

export default defineConfig(async () => {
    return <UserConfig>{
        server: {
            hmr: {
                overlay: false,
            },
            fs: {
                allow: [resolve(__dirname, '..')],
            },
        },
        plugins: [
            // custom markdown transformation plugin with regex
            MarkdownTransform(),
            // custom components including plugins
            Components({
                dirs: ['.vitepress/theme/components'],
                include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
                resolvers: [
                    IconsResolver({
                        componentPrefix: '',
                    }),
                    ArcoResolver({ sideEffect: true, resolveIcons: true }),
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
            // rollup build options
            rollupOptions: {
                external: ['node:*', './assets/*'],
            },
        },
    }
})
