import { DefaultTheme } from 'vitepress/theme'

export const footer: DefaultTheme.Config['footer'] = {
    message: `Wrote with <i class="heart fa fa-heart fa-xs fa-beat"></i> and ☕ by <a href="https://toshiki.dev">Anda Toshiki</a> at <code>root@andatoshiki:/~</code>`,
    copyright: `Copyright © 2023-${new Date().getFullYear()} <a href="https://github.com/andatoshiki">Anda Toshiki</a>
                <br />
                <span id="siteruntime_span"></span>`,
}
