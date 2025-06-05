## 简易部署说明

### 安装 pnpm
```bash
npm install -g pnpm
```

### 创建项目
```bash
pnpm create vuepress-theme-hope <替换为你的文件夹名>
```

### 安装依赖包
```bash
# algolia 搜索
pnpm add -D @vuepress/plugin-docsearch@next
# 本地搜索
pnpm add -D @vuepress/plugin-search@next
# rss
pnpm add -D @vuepress/plugin-feed@next
# pwa 支持
pnpm add -D @vuepress/plugin-pwa@next
# waline 评论
pnpm add -D @waline/client@next
# 阅读时间字数
pnpm add -D @vuepress/plugin-reading-time@next
# 幻灯片支持
pnpm add -D @vuepress/plugin-revealjs@next
# 代码块语法高亮
pnpm add -D @vuepress/plugin-prismjs@next
# artplayer 播放器
pnpm add -D artplayer@next
# vidstack 播放器，支持音频、视频、直播
pnpm add -D vidstack@next
```

### 卸载依赖包
```bash
pnpm remove <需要卸载的包名>
```

### 清理未使用的包
```bash
pnpm prune
```

### 更新依赖库
```bash
# 安装 package.json 中声明的依赖
pnpm install
# 更新依赖到最新版
pnpm update
```

### 升级 vuepress 框架和 vuepress-theme-hope 主题
```bash
pnpm dlx vp-update  升级
```

### 本地预览与构建
```bash
# 本地预览
pnpm docs:dev
# 本地构建输出静态页面，路径：src/.vuepress/dist
pnpm docs:build
# 清除缓存并本地预览
pnpm docs:clean-dev
```

### 部署到 CF pages
- 构建命令：`pnpm docs:build`
- 输出目录：`src/.vuepress/dist`

## 项目配置

### 配置文件路径

```js
// vuepress 主配置文件
src/.vuepress/config.ts
// VuePress Theme Hope 主题配置文件
src/.vuepress/config.ts/theme.ts
// 顶部导航栏配置文件
src/.vuepress/config.ts/navbar.ts
// 侧边栏配置文件
src/.vuepress/config.ts/sidebar.ts
```

### 关于 VuePress Theme Hope 主题

VuePress 默认主题配置文件为 `src/.vuepress/config.ts`，默认主题比较简陋，功能不够强大，需要手动安装一系列依赖包并在主配置文件中设置。

vuepress-theme-hope 主题则在默认主题基础上集成了一系列增强组件和插件，并将配置集中在`src/.vuepress/config.ts/theme.ts`文件中

- [VuePress Theme Hope 官方文档](https://vuepress-theme-hope.github.io/v2/)

### 配置示例
- [config.ts](https://github.com/yutian81/daoyi-wiki/blob/main/src/.vuepress/config.ts)
- [theme.ts](https://github.com/yutian81/daoyi-wiki/blob/main/src/.vuepress/theme.ts)
- [navbar.ts](https://github.com/yutian81/daoyi-wiki/blob/main/src/.vuepress/navbar.ts)
- [sidebar.ts](https://github.com/yutian81/daoyi-wiki/blob/main/src/.vuepress/sidebar.ts)

### 详细使用文档
[使用文档](https://wiki.811520.xyz/deploy/)
