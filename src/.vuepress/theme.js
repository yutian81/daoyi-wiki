import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://wiki.notett.com",
  author: {
    name: "Daoyi Real Estate",
    url: "https://wiki.notett.com",
  },
  logo: "/logo.svg",
  repo: "yutian81/daoyi-wiki",
  docsDir: "src",
  fullscreen: true,
  print: true,
  navbar,  // 导航栏
  sidebar,  // 侧边栏
  footer: '基于 <a href="https://vuepress.vuejs.org/zh/" target="_blank">VuePress</a> 框架构建 | 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题',
  displayFooter: true,
  // 跳转到 github 编辑
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 加密配置
  encrypt: {
    global: false,
    admin: {
      password: "5678", // 也可以是数组
      hint: "联系管理员获取访问密码",
    },
    config: {
      "/portfolio/": {
        hint: "联系管理员获取访问密码",
        password: "1234",
      },
    },
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    sub: true,
    sup: true,
    tabs: true,
    linkify: true,
    tasklist: true,
    hint: true,
    alert: true,
    vPre: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    imgMark: true,
    obsidianImgSize: true,
    gfm: true,
    include: true,
    mark: true,
    footnote: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "推荐",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip", vertical: "middle" },
              content: "推荐",
            };
        }
      },
      {
        matcher: "重要",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "danger", vertical: "middle" },
              content: "重要",
            };
        }
      },
      {
        matcher: "注意",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "warning", vertical: "middle" },
              content: "注意",
            };
        }
      },
    ],

    // MD高亮增强 先安装 @vuepress/plugin-prismjs
    highlighter: {
      type: "prismjs",
      themes: {
        light: "one-light",
        dark: "one-dark"
      },
      lineNumbers: true,
      collapsedLines: true,
      codeBlockTitle: true,
    },

    // 启用幻灯片前先安装 @vuepress/plugin-revealjs
    revealjs: {
      themes: ["auto"],
      plugins: ["highlight", "math", "search", "notes", "zoom"],
    },

    // math: {
    //   type: "katex", // 启用前安装 katex
    //   type: "mathjax",  // 或者安装 mathjax-full
    // },
    // chartjs: true, //在启用之前安装 chart.js
    // echarts: true, //在启用之前安装 echarts
    // flowchart: true, //在启用之前安装 flowchart.ts
    // mermaid: true, //在启用之前安装 mermaid
    // playground: {
    //   presets: ["ts", "vue"],
    // },
    // vuePlayground: true, // 在启用之前安装 @vue/repl
    // sandpack: true, // 在启用之前安装 sandpack-vue3
  },

  // 在这里配置主题提供的插件
  plugins: {
    sitemap: true,
    photoSwipe: true,
    blog: true,
    feed: true,
    readingTime: true,
    search: {
      getExtraFields: (page) => {
        const extraFields = [];
        // 提取 category (分类)
        const categories = page.data.frontmatter.category;
        if (Array.isArray(categories)) {
          extraFields.push(...categories);
        } else if (typeof categories === 'string') {
          extraFields.push(categories);
        }
        // 提取 tag (标签)
        const tags = page.data.frontmatter.tag;
        if (Array.isArray(tags)) {
          extraFields.push(...tags);
        } else if (typeof tags === 'string') {
          extraFields.push(tags);
        }
        // title 默认会被搜索，但为确保万无一失可以再次加入
        if (page.data.frontmatter.title) {
          extraFields.push(page.data.frontmatter.title);
        }
        return extraFields;
      },
    },

    // 评论模块
    comment: {
      provider: "Waline",
      serverURL: "https://waline.24811213.xyz/",
      reaction: true,
      pageview: true,
      comment: true,
      emoji: [
        "//unpkg.com/@waline/emojis@1.1.0/weibo",
        "//unpkg.com/@waline/emojis@1.2.0/qq",
        "//unpkg.com/@waline/emojis@1.2.0/bilibili",
        "//unpkg.com/@waline/emojis@1.1.0/tieba",
      ],
    },

    components: {
      components: [
        "SiteInfo",
        "VidStack", // 可嵌入式播放 youtube，src="youtube/_cMxraX_5RE"
        "ArtPlayer",
        "BiliBili",
        "Share",
        "PDF",
        "Badge",
        "VPCard",
        "VPBanner",
      ],
      componentOptions: {
        pdf: {
          pdfjs: "/pdfjs",
        },
      }
    },

    icon: {
      assets: "fontawesome-with-brands",
    },

    // 如果你需要 PWA, 安装 @vuepress/plugin-pwa 并取消下方注释
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      //msTile: {
      //  image: "/assets/icon/ms-icon-144.png",
      //  color: "#ffffff",
      //},
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "道怡团队知识库",
            short_name: "DaoyiWiki",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
