import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "道怡地产",
  description: "道怡地产团队知识库——地产营销的百科全书",

  markdown: {
    code: { lineNumbers: true }
  },

  theme,

  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
    ['meta', { name: 'theme-color', content: '#1e88e5' }],
    ['meta', { name: 'keywords', content: '房地产,营销,标准化,道怡地产,知识库' }],
    ['meta', { name: 'algolia-site-verification', content: '710F89C1784D6EB6' }],
  ],

  // 和 PWA 一起启用
  shouldPrefetch: false,
});
