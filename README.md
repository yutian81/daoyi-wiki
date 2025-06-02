## 简易部署说明

### 安装 pnpm
```bash
npm install -g pnpm
```

### 创建项目
```bash
pnpm create vuepress-theme-hope <替换为你的文件夹名>
```

### 安装插件
```bash
# 搜索插件
pnpm add -D @vuepress/plugin-docsearch@next
# pwa插件
pnpm add -D @vuepress/plugin-pwa@next
# waline评论插件
pnpm add -D @waline/client@next
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

### 升级 vuepress 框架和 vuepress-theme-hope 主题
```bash
pnpm dlx vp-update  升级
```

### 更新依赖库
```bash
# 安装 package.json 中声明的依赖
pnpm install
# 更新依赖到最新版
pnpm update
```

### 部署到 CF pages
- 构建命令：`pnpm docs:build`
- 输出目录：`src/.vuepress/dist`
