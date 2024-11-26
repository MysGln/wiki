// /* config/index.ts */
// export * from './nav'
// .vitepress/config/index.ts
// import { defineConfig } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import { nav } from './nav';
export default {
  extends: DefaultTheme,
  // ...DefaultTheme, //或者这样写也可
}


// export default defineConfig({
//   title: 'Engeeker wiki',
//   description: 'A VitePress Site',
//   themeConfig: {
//     nav,  // 将导入的 nav 配置传递给 themeConfig
//   },
// });
