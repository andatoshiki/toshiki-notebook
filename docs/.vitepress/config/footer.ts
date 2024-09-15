import { DefaultTheme } from 'vitepress/theme'

export const footer: DefaultTheme.Config['footer'] = {
    copyright: `Wrote with <span class="heart">💓</span> with 🌵 by <a href="https://toshiki.dev">Anda Toshiki</a> at <code>root@andatoshiki:/~</code> in the innovative HQ of <a href="https://asu.edu">ASU</a>`,
    message: `Copyright © 2023-${new Date().getFullYear()} <a href="https://github.com/andatoshiki">Anda Toshiki</a>, <a href="https://github.com/lolilab">LoliLab</a> and <a href="https://github.com/toshikidev">Toshiki Dev</a> present <br /><span id="siteruntime_span"></span>`,
}
