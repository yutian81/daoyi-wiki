---
title: Markdown
index: true
cover: 
icon: fa6-brands:markdown
order: 2
author: 
date: 2025-06-02
tag:
  - 样式
  - 语法
  - MD
category:
  - 部署
  - MD
sticky: 
star: 
---

# Markdown

VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。

你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。

<!-- more -->

## Markdown 介绍

如果你是一个新手，还不会编写 Markdown，请先阅读 [Markdown 介绍](https://theme-hope.vuejs.press/zh/cookbook/markdown/) 和 [Markdown 演示](https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html)。

## Markdown 配置

VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。

::: important Frontmatter  
Frontmatter 是 VuePress 中很重要的一个概念，请阅读 [Frontmatter 介绍](https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter) 了解详情。  
:::

## Markdown 扩展

VuePress 会使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 [语法扩展](https://github.com/markdown-it/markdown-it#syntax-extensions) 。

### VuePress 扩展

为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。

关于这些扩展，请阅读 [VuePress 中的 Markdown 扩展](https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html)。

### Theme Hope 主题扩展

通过 VuePress 插件，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。

```js title=".vitepress/theme.ts"
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
      plugins: ["highlight","math","search","notes","zoom"],
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
```

#### `tabs` 单选项卡

```
<!-- 👇 这里，fruit 将用作 id，它是可选的,所有具有相同 id 的选项卡将共享相同的切换事件 -->
::: tabs#fruit
<!-- 选项卡内容 -->
:::
```

#### `tabs` 多选项卡

```
::: tabs
@tab 标题 1
<!-- tab 1 内容 -->
<!-- 👇 这里，tab 2 的标题将是 “标题 2”，并且它会使用 “值 2” 作为选项卡的值-->

@tab 标题 2#值 2
<!-- tab 2 内容 -->
<!-- 👇 tab 3 将会被默认激活 -->

@tab:active 标题 3
<!-- tab 3 内容 -->
:::
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/tabs.html)

#### `codeTabs` 代码块

````
安装 VuePress:
::: code-tabs#shell

@tab pnpm
```
bash pnpm add -D vuepress
```
@tab yarn
```
bash yarn add -D vuepress
```
@tab:active npm
```
bash npm i -D vuepress
```

:::

安装 VuePress Theme Hope:
::: code-tabs#shell

@tab pnpm
```
bash pnpm add -D vuepress-theme-hope
```
@tab yarn
```
bash yarn add -D vuepress-theme-hope
```
@tab:active npm
```bash npm i -D vuepress-theme-hope
```

:::
````

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/code-tabs.html)

#### `footnote` 脚注

基本语法

```
脚注 1 链接[^first]。
脚注 2 链接[^second]。
行内的脚注^[行内脚注文本] 定义。
重复的页脚定义[^second]。

[^first]: 脚注 **可以包含特殊标记** 也可以由多个段落组成
[^second]: 脚注文字。
^[行内脚注文本]: 行内脚注文本
```

![image.png](https://pan.811520.xyz/2025-06/1748944227-image.webp)

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/footnote.html)

#### `revealjs` 幻灯片

- 安装插件

```bash
pnpm add -D @vuepress/plugin-revealjs@next
```

- 主题配置 (markdown 子项，非 plugins)

```js
    revealjs: {
      themes: ["auto"],
      plugins: ["highlight","math","search","notes","zoom"],
    },
```

- 语法

```html
@slidestart

## 幻灯片标题
一个拥有文字和 [链接](https://mister-hope.com) 的段落

---

## 代码高亮
代码高亮示例代码

@slideend
```

> 默认情况下，插件会注册一个 `SlidePage` 布局来供你渲染 " 幻灯片页 "。  
> 在使用此布局的页面中，你应该只包含单个幻灯片语法，不包含其他内容，以避免渲染问题:

```md
---
layout: SlidePage
---

@slidestart

<!-- 此处是幻灯片内容 -->

@slideend
```

> 你可以通过插件选项中的 `layout` 来自定义此行为，比如使用 `false` 来禁用它或填入其他布局名称。

#### `vPre` 模板

```
::: v-pre
安全的在 Markdown 中使用 {{ variable }}。
:::
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/others.html#v-pre)

#### `hint` 提示容器

````
::: info 自定义标题
信息容器，包含 `代码` 与 [链接](#提示容器)。
```js
const a = 1;
```
:::
````

```
::: tip 自定义标题
提示容器
:::
```

```
::: warning 自定义标题
警告容器
:::
```

```
::: caution 自定义标题
危险容器
:::
```

```
::: details 自定义标题
详情容器
:::
```

- [GitHub 警示](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert.html)
- [提示框](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html)

支持的样式

- v-pre
- important
- info
- note
- tip
- warning
- caution
- details ---- 折叠内容

#### `alert` 警告样式

```
> [!important]
> 重要文字

> [!info]
> 信息文字

> [!tip]
> 提示文字

> [!warning]
> 注意文字

> [!caution]
> 警告文字

> [!note]
> 注释文字
```

#### `sub sup` 上下角标

- 使用 `^ ^` 进行上角标标注。
- 使用 `~ ~` 进行下角标标注。
- 你可以使用 `\` 来转义 `^` 和 `~`:

```
19^th^ - H~2~O
H\~2~O 19\^th^
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/sup-sub.html)

#### `include` 导入文件

<!-- @include: ./README.md{11-17} -->

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/include.html)

#### `component` 组件

你可以使用 component 代码块来在 Markdown 中添加组件

基本语法

````md
```component 组件名称
# 组件数据
```
````

快速使用 vcard 组件

````
```component VPCard
title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
background: rgba(253, 230, 138, 0.15)
```
````

上方的代码块和下方等价:

```md
<VPCard
  title="Mr.Hope"
  desc="Where there is light, there is hope"
  logo="https://mister-hope.com/logo.svg"
  link="https://mister-hope.com"
  background="rgba(253, 230, 138, 0.15)"
/>
```

#### TeX 公式语法

用 `$$` 前后包裹，需要先安装 `katex` 或 `mathjax-full` 公式插件

```
$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/math.html)

#### `tasklist` 任务列表

```
- [] 计划 1
- [x] 计划 2
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tasklist.html)

#### `align` 对齐

```
::: center
我是居中的
:::
```

```
::: right
我在右对齐
:::
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/align.html)

#### `attrs` 属性

你可以使用语法 `{attrs}` 来为 Markdown 元素添加属性。

比如，如果你想要一个 id 为 say-hello-world，文字为 Hello World 的二级标题，你可以使用:

```md
## Hello World {#say-hello-world}
```

如果你想要一个有 full-width Class 的图片，你可以使用:

```md
![img](link/to/image.png) {.full-width}
```

行内元素

```
包含 `行内代码`{.inline-code} 和 ![favicon](/favicon.ico){.image} 的文字，也支持 _强调_{.inline-emphasis} 和 **加粗**{.inline-bold}。
```

块级元素

```
块级元素 {.block}
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html)

#### `mark` 标记

`你可以标记 ==重要的内容== 。`

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/mark.html)

#### `spoiler` 剧透

使用 `!! !!` 标记需要隐藏的文字。请注意两边需要有空格。

```
VuePress Theme Hope !!十分强大!!.
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/spoiler.html)

#### `stylize` 样式化

`stylize` 接收一个数组，其中每个元素接受 2 个选项：

- `matcher`：应为 `string` 或 `RegExp`。
- `replacer`: 自定义匹配标记的函数

例如：

```js
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
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/stylize.html)

#### `figure` 图片展示

你可能希望为图像添加描述，并将其单独展示在上下文中，在这种情况下，你应该启用此功能将图片渲染为 <figure>。

这样当你单独将图片至于一行 (也可同时嵌套链接)，图像将显示为 <figure> ，标题或图片替代文字将显示为 <figcaption>。

自动识别

```md
![alt文字 =300x300](https://theme-hope-assets.vuejs.press/logo.svg)
![alt文字 =300x0](https://theme-hope-assets.vuejs.press/logo.svg "图片标题")
```

支持 obsidian 语法
```md
![alt文字|200x200](/example.png)
![alt文字|200x0](/example.jpg "0 表示自动比例")
```

多图组合并带预览功能
```md
::: figure preview
![alt文字|200x200](/example.png)
![alt文字|200x0](/example.jpg "0 表示自动比例")
带预览功能的多图组合标题
:::
```

切换主题
```
<ColorModeSwitch /> 👈 切换主题
![GitHub Light](/assets/image/github-light.svg#dark)
![GitHub Dark](/assets/image/github-dark.svg#light)
```

支持 imgMark 的高级组合语法
```md
::: figure preview
![夜景图片](/scenery1.jpg#dark "只在夜间模式显示")
![日景图片](/scenery2.jpg#light "只在白天模式显示")
旅行摄影集（点击图片可放大查看）
:::
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html)

#### ECharts

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html)

#### 流程图

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/flowchart.html)

#### MarkMap

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/markmap.html)

#### Mermaid

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/mermaid.html)

#### Plantuml 序列图

```
@startuml
内容
@enduml
```

示例

```
@startuml

Alice -> Bob: 认证请求
alt 成功情况
    Bob -> Alice: 认证接受
else 某种失败情况
    Bob -> Alice: 认证失败
      group 我自己的标签
    Alice -> Log : 开始记录攻击日志
        loop 1000次
            Alice -> Bob: DNS 攻击
        end
    Alice -> Log : 结束记录攻击日志
    end
else 另一种失败
    Bob -> Alice: 请重复
end

@enduml
```

- [View Detail](https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html)

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/demo.html)

#### 交互演示

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/playground.html)

#### Kotlin 交互演示

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/kotlin-playground.html)

#### Sandpack 交互演示

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/sandpack.html)

#### Vue 交互演示

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/vue-playground.html)

#### 幻灯片

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html)
