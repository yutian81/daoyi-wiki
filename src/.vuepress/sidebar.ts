import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "视频",
      icon: "play",
      prefix: "video/",
      link: "video/",
      children: "structure",
    },
    {
      text: "资源",
      icon: "wand-magic-sparkles",
      prefix: "res/",
      link: "res/",
      children: "structure",
    },
    {
      text: "制度",
      icon: "address-card",
      prefix: "about/管理体系/",
      link: "about/管理体系/",
      children: "structure",
    },
  ],
});
