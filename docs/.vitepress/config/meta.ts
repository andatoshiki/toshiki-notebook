import { version } from '../../../package.json'

// base info
export const name = 'toshiki-notebook'
export const site = 'https://note.toshiki.dev'
export const logo = 'https://note.toshiki.dev/logos/logo-308px.png'
export const keywords =
    'Toshiki, Anda Toshiki, andatoshiki, GitHub, GitHub action, Vitepress, Vite, Notebook, Knowledge base, Programming, Programming Notes, Academic, Personal, Notebook, Productivity, Journal, Note-taking, Markdown, Notepad, Organization, Tutorial'
export const description =
    'Toshiki\'s web notebook served via Vitepress!'

// social link
// export const bilibili = ''
export const github = 'https://github.com/chodocs/chodocs'

// docs version
export const docsVersion = version

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')
