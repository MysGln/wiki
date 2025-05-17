import { defineConfig } from 'vitepress'
import { nav } from './configs/nav'
import { withSidebar } from 'vitepress-sidebar'

// VitePress 的常规配置
const vitePressOptions = {
  title: 'Engeeker wiki',  // 网站标题
  description: 'A VitePress Site',  // 网站描述
  cleanUrls: true,  // 开启 clean URLs（去除 .html 后缀）
  lastUpdated: true,  // 开启最后更新时间
  // rewrites: {
  //   'USACO/Bronze/:page': 'Bronze/:page'
  // },
  
  themeConfig: {
    // logo: '../public/LOGO透明底.png',
    // siteTitle: false, //标题隐藏
  
    
    footer: { 
      message: 'Made with ❤️ by Engeeker 协作者', 
      copyright: 'Copyright © 2023-present Evan You && Engeeker 协作者', 
      // 自动更新时间
      //copyright: `Copyright © 2019-${new Date().getFullYear()} present Evan You`, 
    }, 
    nav,  // 导入导航配置
    search: {
      provider: 'local',  // 本地搜索
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' },  // GitHub 社交链接
    // ],
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1732939077829" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="879" width="200" height="200"><path d="M511.51 915.23a401.48 401.48 0 0 1-137.19-24.06 25 25 0 1 1 17-47c55.5 20.05 114 25.83 173.87 17.16a352.21 352.21 0 0 0 297.74-296.7c10.07-68 1.05-136.44-26.11-197.86a25 25 0 0 1 45.73-20.22c31 70.08 41.3 148 29.84 225.4a402.23 402.23 0 0 1-340 338.86 423.8 423.8 0 0 1-60.88 4.42zM147.9 644.47a25 25 0 0 1-23.9-17.83 405.31 405.31 0 0 1 515.37-501 25 25 0 1 1-15.71 47.47 356.27 356.27 0 0 0-441 205.07 350.91 350.91 0 0 0-25.4 144.57 355.15 355.15 0 0 0 14.68 89.56 25 25 0 0 1-24 32.19z" p-id="880"></path><path d="M696 299.26a100 100 0 1 1 100-100 100.11 100.11 0 0 1-100 100z m0-150a50 50 0 1 0 50 50 50.06 50.06 0 0 0-50-50zM315.73 911.36a100 100 0 1 1 100-100 100.11 100.11 0 0 1-100 100z m0-150a50 50 0 1 0 50 50 50.06 50.06 0 0 0-50-50zM424 717.29a116.78 116.78 0 0 1-82.55-199.23l176.71-176.74a116.87 116.87 0 0 1 165.1 0 116.88 116.88 0 0 1 0 165.09L506.51 683.16A116.34 116.34 0 0 1 424 717.29z m176.71-360.13a66.52 66.52 0 0 0-47.19 19.51L376.78 553.42a66.74 66.74 0 0 0 94.38 94.38L647.9 471.06a66.71 66.71 0 0 0-47.19-113.9z" p-id="881"></path><path d="M600.71 717.29a116.38 116.38 0 0 1-82.55-34.13L341.42 506.41a117 117 0 0 1 0-165.09 117 117 0 0 1 165.09 0l176.75 176.74a116.68 116.68 0 0 1-82.55 199.23zM424 357.24a66.24 66.24 0 0 0-47.19 19.43 67 67 0 0 0 0 94.38L553.52 647.8a66.74 66.74 0 0 0 94.38-94.38L471.16 376.67A66.26 66.26 0 0 0 424 357.24zM359.1 359z" p-id="882"></path></svg>'
        },
        link: 'http://106.55.247.18/',
      }
    ], 
    editLink: {
      pattern: 'https://github.com/MysGln/wiki/tree/main/docs/:path',  // 编辑链接
      text: '在 GitHub 上编辑此页',  // 自定义按钮文字
    },
  },
  markdown: {
    image: {
      lazyLoading: true, // 启用图片懒加载
    },
    math: {
      renderers: {
        math: 'mathjax3',
        inlineMath: 'mathjax3',
        // math: 'katex',
        // inlineMath: 'katex',
      },
    },  // 启用数学公式渲染
  },
}

// VitePress Sidebar 配置选项
const vitePressSidebarOptions = {
  documentRootPath: '../docs',  // 文档根目录，相对路径
  collapsed: true,  // 不折叠组
  useFolderTitleFromIndexFile: true,
  // includeFolderIndexFile: true,
  useFolderLinkFromIndexFile: true,
  collapseDepth: 2,  // 折叠组显示的最大层级
  removePrefixAfterOrdering: false,  // 是否删除前缀
  prefixSeparator: '.',  // 前缀分隔符
  rewrites: {
    'usaco/General/:page': 'General/:page',
    'usaco/Bronze/:page': 'Bronze/:page',
    'usaco/Silver/:page': 'Silver/:page',
    'usaco/Gold/:page': 'Gold/:page',
    'solves/2024/11:page': '11/:page',
    'solves/2024/12:page': '12/:page',
  }
}

export default defineConfig(
  withSidebar(vitePressOptions, [
    {
      documentRootPath: 'docs',
      scanStartPath: 'solves',
      collapsed: true,
      collapseDepth: 1,
      resolvePath: '/solves/',
      useTitleFromFileHeading: true,
    },
    {
      documentRootPath: 'docs',
      scanStartPath: 'usaco',
      collapsed: true,
      collapseDepth: 2,
      resolvePath: '/usaco/',
      useTitleFromFileHeading: true,
    },
    {
      documentRootPath: 'docs',
      scanStartPath: 'Python',
      collapsed: true,
      collapseDepth: 1,
      resolvePath: '/Python/',
      useTitleFromFileHeading: true,
    }
  ])
);