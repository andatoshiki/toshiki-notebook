// from https://github.com/vuejs/blog
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { createMarkdownRenderer } = require('vitepress')

const cwd = process.cwd()

module.exports = {
  watch: path.relative(__dirname, cwd + '/docs/*.md').replace(/\\/g, '/'),
  async load(asFeed = false) {
    const md = await createMarkdownRenderer(cwd)
    const postDir = path.join(cwd, 'docs')
    return fs
      .readdirSync(postDir)
      .filter((file) => file.endsWith('.md'))
      .map((file) => getPost(md, file, postDir, asFeed))
      .sort((a, b) => b.create - a.create)
  }
}

const cache = new Map()

function getPost(md, file, postDir, asFeed = false) {
  const fullePath = path.join(postDir, file)
  const timestamp = Math.floor(fs.statSync(fullePath).mtimeMs)

  const cached = cache.get(fullePath)
  if (cached && timestamp === cached.timestamp) {
    return cached.post
  }

  const src = fs.readFileSync(fullePath, 'utf-8')
  const { data, excerpt } = matter(src, { excerpt: true })

  const post = {
    title: data.title,
    href: `${file.replace(/\.md$/, '.html')}`,
    create: +new Date(data.date) || timestamp,
    update: timestamp,
    tags: data.tags,
    cover: data.cover,
    excerpt: md.render(excerpt)
  }
  if (asFeed) {
    // only attach these when building the RSS feed to avoid bloating the
    // client bundle size
    post.data = data
  }

  cache.set(fullePath, {
    timestamp,
    post
  })
  return post
}