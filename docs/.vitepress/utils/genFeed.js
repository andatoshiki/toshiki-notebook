const fs = require('fs')
const path = require('path')
const { Feed } = require('feed')
const { load } = require('./posts.data')
const { resolveSiteData } = require('vitepress')
const url = `https://note.toshiki.dev`

genFeed()

async function genFeed() {
  const siteData = await resolveSiteData('.')
  const posts = await load(true)
  const cwd = process.cwd()
  const feed = new Feed({
    title: siteData.title,
    description: siteData.description,
    id: url,
    link: url,
    language: siteData.lang,
    image: `${url}/logos/logo-308px.png`,
    favicon: `${url}/favicon.ico`,
    copyright: siteData.themeConfig.name || '-'
  })

  posts.forEach(post => {
    const file = path.resolve(cwd, `dist/${post.href}`)
    const rendered = fs.readFileSync(file, 'utf-8')
    const content = rendered.match(/<body>([\s\S]*)<\/body>/)

    feed.addItem({
      title: post.title,
      id: `${url}${post.href}`,
      link: `${url}${post.href}`,
      description: post.excerpt,
      content: content[1],
      author: [
        {
          name: post.data.author,
          link: post.data.twitter ? `https://twitter.com/${post.data.twitter}` : undefined
        }
      ]
    })
  })

  fs.writeFileSync(path.resolve(cwd, 'dist/feed.rss'), feed.rss2())
}
