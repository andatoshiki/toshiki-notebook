import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
    plugins: [
        Components({
            dirs: ['.vitepress/theme/components'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        }),
    ],
    ssr: { noExternal: ['@arco-design/web-vue'] },
})
