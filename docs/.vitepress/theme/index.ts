// vitepress custom theme component configs

// deafult deps and packages for configuration
import { onMounted } from 'vue'
import { h, App } from 'vue'
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'

// custom styles import
import './styles/index.scss'

// @ts-ignore
// custom components and vue template layouts
import CustomLayout from './CustomLayout.vue'
// @ts-ignore
import AsideSponsors from './components/AsideSponsors.vue'
// @ts-ignore
import Copyright from './components/Copyright.vue'

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
        })
    },

    // medium zoom custom markdown attributes components
    setup() {
        onMounted(() => {
            mediumZoom('[data-zoomable]', {
                background: 'var(--vp-c-bg)',
                scrollOffset: 40,
            })
        })
    },
    // enhanceApp({ app }: { app: App }) {
    //     app.provide('DEV', process.env.NODE_ENV === 'development')
    // },
}
