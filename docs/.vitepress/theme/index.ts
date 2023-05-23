// vitepress custom theme component configs

// deafult deps and packages for configuration
import { onMounted } from 'vue'
import { h, App } from 'vue'
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import vitepressNprogress from '@andatoshiki/vitepress-plugin-nprogress'
import '@andatoshiki/vitepress-plugin-nprogress/lib/css/index.css'

// custom styles import
import './styles/index.scss'

// @ts-ignore
// custom components and vue template layouts
import CustomLayout from './CustomLayout.vue'
// @ts-ignore
import AsideSponsors from './components/AsideSponsors.vue'
// @ts-ignore
import Copyright from './components/Copyright.vue'
// @ts-ignore
import Comment from './components/layout/Comment.vue'

// import CodeTitle from './components/CodeTitle.vue'

if (typeof window !== 'undefined') {
    // unregister PWA service
    if (window.navigator && navigator.serviceWorker) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
            for (let registration of registrations) {
                registration.unregister()
            }
        })
    }

    // delete the cache preserved in browser
    if ('caches' in window) {
        caches.keys().then(function (keyList) {
            return Promise.all(
                keyList.map(function (key) {
                    return caches.delete(key)
                })
            )
        })
    }
}

export default {
    ...DefaultTheme,
    Layout: () => {
        // custom layout migrated to custom slots
        CustomLayout

        const props: Record<string, any> = {}
        // get frontmatter data via vitepress builtin
        const { frontmatter } = useData()

        // add custom classes to vue components
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }
        return h(Theme.Layout, props, {
            // aside buttom slots for sponsor
            'aside-bottom': () => h(AsideSponsors),
            'doc-footer-before': () => h(Copyright),
            'doc-after': () => h(Comment)
        })
    },

    // medium zoom custom markdown attributes components
    setup() {
        onMounted(() => {
            // medium zoom for images manually added with data-zoomable attribute
            // mediumZoom('[data-zoomable]', {
            //     background: 'var(--vp-c-bg)',
            //     scrollOffset: 40,
            // })
            mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // register global component to make image zoom globally with the class
        })
    },

    enhanceApp(ctx) {
        // custom component tag/slot
        // ctx.app.component('CardLink', CardLink)
        // ctx.app.component('DPlayer', vue3videoPlay)

        // external plugin for vitepress hack performance
        vitepressNprogress(ctx) // nprogress plugin for vitepress
    },
}
