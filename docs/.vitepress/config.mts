import { defineConfig } from 'vitepress'
import { nav } from './configs/nav'
import { generateSidebar } from 'vitepress-sidebar';
// console.log('Imported nav:', nav); // 输出 nav 内容

const vitepressSidebarOptions = {
  // documentRootPath: './docs', // 文档根目录，相对路径
  // collapsed: false, // 不折叠组
  // collapseDepth: 2, // 折叠组显示的最大层级
  // removePrefixAfterOrdering: false, // 是否删除前缀
  // prefixSeparator: '.', // 前缀分隔符
  // 可以添加更多配置选项，根据需要自定义
};

// 导出 VitePress 配置
export default defineConfig({
  title: 'Engeeker wiki',
  description: 'A VitePress Site',
  lastUpdated: true, // 开启最后更新时间
  themeConfig: {
    nav,  // 导入你的导航配置
    search: {
      provider: 'local',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    // 使用 generateSidebar 动态生成侧边栏
    // sidebar: generateSidebar(vitepressSidebarOptions),
    sidebar: generateSidebar({
      documentRootPath: './docs', // 文档根目录，相对路径
      collapsed: false, // 不折叠组
      collapseDepth: 2, // 折叠组显示的最大层级
      removePrefixAfterOrdering: false, // 是否删除前缀
      prefixSeparator: '.', // 前缀分隔符
    }),
  },
  markdown: {
    image: {
      lazyLoading: true, // 图片懒加载
    },
  },
});