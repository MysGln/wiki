/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { 
    text: '章节',
    items: [
      { text: '编程入门', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'},
      { text: '算法基础', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'},
      { text: '竞赛介绍', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'},
      { text: '周赛题解', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md  '},
    ]
  },
  // {
  //   text: '1.0.0-rc.**',
  //   items: [
  //     { text: '更新日志', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
  //     { text: '贡献', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' },
  //     ],
  // },
]