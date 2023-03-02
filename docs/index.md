---
layout: home

title: Toshiki's Notebook
titleTemplate: Eternal digital knowledge base for content craetion and notes management.

hero:
    name: Toshiki's Notebook
    text: Research & Produce
    tagline: 👨‍💻 Eternal & digital knowledge base for content craetion and notes management.
    image:
        src: /logos/logo.svg
        alt: Home logo
    actions:
        - theme: brand
          text: 👉 Start Reading
          link: /getting-started
        - theme: alt
          text: '🗒️ View on GitHub'
          link: https://github.com/andatohsiki/toshiki-notebook

features:
    - icon: 🕒
      title: Tempus Fugit
      details: Tempus Fugit, which means "time flies" in Latin, is a phrase that highlights the fact that every person has the same 24 hours per day to learn. However, this time is never enough to learn everything. That's why recording knowledge for review is essential.
    - icon: ☕
      title: Carpe Diem
      details: Carpe Diem, take it slow, seize the day and savor its moments. Enjoy a cup of coffee while playing blues on a 1980s-style CD player. Turn off the lights, close the curtains, and let the small lamp illuminate the space. The time is yours, relish the day, and unleash the productivity while learning.
    - icon: 💡
      title: Epiphania
      details: An epiphany, derived from the Latin word "epiphania," is a moment of sudden and brilliant realization or insight. These moments of clarity and inspiration are precious and should be treated as such; to ensure that we don't forget these valuable ideas.
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const khanacademySVG = {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Khan Academy</title><path d="M21.724 4.973L13.418.328a3.214 3.214 0 0 0-2.828 0L2.276 4.973A3.05 3.05 0 0 0 .862 7.371v9.256a3.05 3.05 0 0 0 1.414 2.4l8.306 4.645a3.214 3.214 0 0 0 2.828 0l8.314-4.645a3.05 3.05 0 0 0 1.414-2.4V7.373a3.05 3.05 0 0 0-1.414-2.4zM12 4.921a2.571 2.571 0 1 1 .001 5.143A2.571 2.571 0 0 1 12 4.92zm3.094 13.627a9.119 9.119 0 0 1-3.103.549 8.972 8.972 0 0 1-3.076-.55 8.493 8.493 0 0 1-5.486-7.987v-.857c4.646.017 8.074 3.823 8.074 8.51v.198h.926v-.197c0-4.688 3.445-8.51 8.056-8.51.026.29.043.582.086.856a8.502 8.502 0 0 1-5.477 7.988z"/></svg>'
}

const members = [
  {
    avatar: "/logos/khancademy.svg",
    name: "Khan Academy",
    title: "Khan Academy is a non-profit educational organization that provides free online learning resources.",
    links: [
      { icon: "github", link: "https://github.com/Khan" },
      { icon: khanacademySVG, link: "https://khanacademy.org" }
    ],
  },
    {
    avatar: "/logos/khancademy.svg",
    name: "Khan Academy",
    title: "Khan Academy is a non-profit educational organization that provides free online learning resources.",
    links: [
      { icon: "github", link: "https://github.com/Khan" },
      { icon: khanacademySVG, link: "https://khanacademy.org" }
    ],
  },
    {
    avatar: "/logos/khancademy.svg",
    name: "Khan Academy",
    title: "Khan Academy is a non-profit educational organization that provides free online learning resources.",
    links: [
      { icon: "github", link: "https://github.com/Khan" },
      { icon: khanacademySVG, link: "https://khanacademy.org" }
    ],
  },
    {
    avatar: "/logos/khancademy.svg",
    name: "Khan Academy",
    title: "Khan Academy is a non-profit educational organization that provides free online learning resources.",
    links: [
      { icon: "github", link: "https://github.com/Khan" },
      { icon: khanacademySVG, link: "https://khanacademy.org" }
    ],
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/5837277?v=4",
    name: "Knut Sveidqvist",
    title: "Creator",
    links: [{ icon: "github", link: "https://github.com/knsv" }],
  },
];
</script>

<div class="vp-doc" >
  <h2 id="meet-the-team"> 👀 My Learning Platforms </h2>
  <VPTeamMembers size="small" :members="members" />
</div>

<style>
  .image-container .image-src {
    margin: 1rem auto;
    /* max-width: 100%;
    width: 100%; */
}

  .dark .image-src{
    filter: invert(1) hue-rotate(217deg)  contrast(0.72);
  }

  .vp-doc {
    align-items: center;
    flex-direction: column;
    display: flex;
    margin: 1.5rem;
  }

  .vp-doc h2 {
    margin: 48px 0 16px;
    border-top: 1px solid var(--vp-c-divider-light);
    padding-top: 24px;
    letter-spacing: -.02em;
    line-height: 32px;
    font-size: 24px;
}
</style>
