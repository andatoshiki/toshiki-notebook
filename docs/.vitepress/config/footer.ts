import { DefaultTheme } from 'vitepress/theme'

export const footer: DefaultTheme.Config['footer'] = {
    copyright: `Copyright © 2023-${new Date().getFullYear()} <a href="https://github.com/andatoshiki">Anda Toshiki</a>, <a href="https://github.com/lolilab">LoliLab</a> and <a href="https://github.com/toshikidev">Toshiki Dev</a> present <br /><span id="siteruntime_span"></span>`,
    message: `Wrote with <i class="heart fa fa-heart fa-xs fa-beat"></i> and <i class="coffee fa fa-coffee fa-xs" aria-hidden="true"></i> by <a href="https://toshiki.dev">Anda Toshiki</a> at <code>root@andatoshiki:/~</code>`,
}