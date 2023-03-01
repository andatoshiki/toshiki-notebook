import { DefaultTheme } from 'vitepress/theme'

export const footer: DefaultTheme.Config['footer'] = {
    message: `Wrote with <i class="heart fa fa-heart fa-xs fa-beat"></i> and ☕ by <a href="https://toshiki.dev">Anda Toshiki</a> at <code>root@andatoshiki:/~</code> <i class="fa fa-clock fa-xs fa-beat"></i>`,
    copyright: `Copyright © 2023-${new Date().getFullYear()} <a href="https://github.com/andatoshiki">Anda Toshiki</a> \n <span id="runtime_span"></span>`,
}
