// import { defineConfig } from 'vitepress'
// import { nav } from './configs/nav'
// import { generateSidebar } from 'vitepress-sidebar';

// // console.log('Imported nav:', nav); // 输出 nav 内容

// const vitepressSidebarOptions = {
//   documentRootPath: './docs', // 文档根目录，相对路径
//   collapsed: true, // 不折叠组
//   // useTitleFromFileHeading: true,
//   useFolderTitleFromIndexFile: false,
//   useFolderLinkFromIndexFile: true,
//   // useTitleFromFileHeading: true,
//   collapseDepth: 2, // 折叠组显示的最大层级
//   removePrefixAfterOrdering: false, // 是否删除前缀
//   prefixSeparator: '.', // 前缀分隔符  
// };


// // 导出 VitePress 配置
// export default defineConfig({
//   cleanUrls: true,
//   title: 'Engeeker wiki',
//   description: 'A VitePress Site',
//   lastUpdated: true, // 开启最后更新时间
//   themeConfig: {
//     nav,  // 导入你的导航配置
//     search: {
//       provider: 'local',
//     },
//     lastUpdated: {
//       text: '最后更新于',
//       formatOptions: {
//         dateStyle: 'short',
//         timeStyle: 'medium',
//       },
//     },
//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
//     ],
//     // 使用 generateSidebar 动态生成侧边栏
//     sidebar: generateSidebar(vitepressSidebarOptions),
//     editLink: {
//       pattern: 'https://github.com/MysGln/wiki/tree/main/docs/:path',
//       text: '在 GitHub 上编辑此页' // 自定义按钮文字
//     },
//   },
//   markdown: {
//     image: {
//       lazyLoading: true, // 图片懒加载
//     },
//   },
// });
import { defineConfig } from 'vitepress'
import { nav } from './configs/nav'
import { withSidebar } from 'vitepress-sidebar'

// VitePress 的常规配置
const vitePressOptions = {
  title: 'Engeeker wiki',  // 网站标题
  description: 'A VitePress Site',  // 网站描述
  cleanUrls: true,  // 开启 clean URLs（去除 .html 后缀）
  lastUpdated: true,  // 开启最后更新时间
  themeConfig: {
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },  // GitHub 社交链接
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
  documentRootPath: './docs',  // 文档根目录，相对路径
  collapsed: true,  // 不折叠组
  useFolderTitleFromIndexFile: false,
  useFolderLinkFromIndexFile: true,
  collapseDepth: 2,  // 折叠组显示的最大层级
  removePrefixAfterOrdering: false,  // 是否删除前缀
  prefixSeparator: '.',  // 前缀分隔符
}

// 使用 withSidebar 动态生成侧边栏，并结合 VitePress 配置
// export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
export default defineConfig(
  withSidebar(vitePressOptions, [
    {
      documentRootPath: 'docs',
      scanStartPath: 'solves',
      // basePath: '/solves/',
      collapsed: true, //折叠组关闭
      collapseDepth: 2, //折叠组2级菜单
      resolvePath: '/solves/',
      useTitleFromFileHeading: true,
    },
    {
      documentRootPath: 'docs',
      scanStartPath: 'Python',
      // basePath: '/solves/',
      collapsed: true, //折叠组关闭
      collapseDepth: 2, //折叠组2级菜单
      resolvePath: '/Python/',
      useTitleFromFileHeading: true,      
    },
    {
      documentRootPath: 'docs',
      // scanStartPath: 'docs',
      // basePath: '/solves/',
      collapsed: true, //折叠组关闭
      collapseDepth: 2, //折叠组2级菜单
      // resolvePath: '/docs/',
      useTitleFromFileHeading: true,      
    }
  ])
);