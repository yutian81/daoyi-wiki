---
title: Markdown
index: true
cover: 
icon: fa6-brands:markdown
order: 2
author: 
date: 2025-06-02
tag:
  - Markdown
category:
  - 使用说明
sticky: 
star: 
footer: 
copyright: 
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

### 主题扩展

通过 VuePress 插件，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。

#### 单选项卡

```
<!-- 👇 这里，fruit 将用作 id，它是可选的,所有具有相同 id 的选项卡将共享相同的切换事件 -->
::: tabs#fruit
<!-- 选项卡内容 -->
:::
```

#### 多选项卡

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

#### 脚注

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

#### Revealjs---- 幻灯片

- 安装插件

```bash
pnpm add -D @vuepress/plugin-revealjs@next
```

- 主题配置 (顶层，非 plugins)

```js
    revealjs: {
      themes: ["auto"],
      plugins: ["highlight","math","search","notes","zoom"],
    },
```

- 文档语法

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
在使用此布局的页面中，你应该只包含单个幻灯片语法，不包含其他内容，以避免渲染问题:

```md
---
layout: SlidePage
---

@slidestart

<!-- 此处是幻灯片内容 -->

@slideend
```

> 你可以通过插件选项中的 `layout` 来自定义此行为，比如使用 `false` 来禁用它或填入其他布局名称。

#### 提示容器

基本容器

```
::: important
重要容器。
:::
```

有代码和链接的容器

```
::: important 自定义标题
一个有 `代码` 和 [链接](#演示) 的重要容器。
代码块或链接
:::
```

支持的样式

- important
- info
- note
- tip
- warning
- caution
- details ---- 折叠内容

#### 警告样式

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

#### 上下标

- 使用 `^ ^` 进行上角标标注。
- 使用 `~ ~` 进行下角标标注。
- 你可以使用 `\` 来转义 `^` 和 `~`:

```
19^th^ - H~2~O
H\~2~O 19\^th^
```

#### 导入文件

<!-- @include: ./README.md{11-17} -->

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/include.html)

#### TeX 语法

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/math.html)

#### 任务列表

- [x] 计划 1
- [ ] 计划 2

[查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tasklist.html)

### 图片增强

支持为图片设置颜色模式和大小。

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html)

#### 上下角标

19^th^ H~2~O

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/sup-sub.html)

#### 组件

```component VPCard
title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
background: rgba(253, 230, 138, 0.15)
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/component/grammar.html)

#### 提示容器

::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: info 自定义标题

信息容器，包含 `代码` 与 [链接](#提示容器)。

```js
const a = 1;
```

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

::: caution 自定义标题

危险容器

:::

::: details 自定义标题

详情容器

:::

- [GitHub 警示](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert.html)
- [提示框](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html)

#### 自定义对齐

::: center

我是居中的

:::

::: right

我在右对齐

:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/align.html)

#### 属性支持

一个拥有 ID 的 **单词**{#word}。

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html)

#### 标记

你可以标记 ==重要的内容== 。

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/mark.html)

#### 剧透

VuePress Theme Hope !!十分强大!!.

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/spoiler.html)

#### 样式化

向 Mr.Hope 捐赠一杯咖啡。 _Recommended_

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/stylize.html)

#### 图表

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html" width="100%" height="450"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/chartjs.html)

#### ECharts

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html" width="100%" height="800"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html)

#### 流程图

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html" width="100%" height="450"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/flowchart.html)

#### MarkMap

<iframe s rc="https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html" width="100%" height="380"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/markmap.html)

#### Mermaid

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html" width="100%" height="620"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/mermaid.html)

#### PlantUML

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

- [View Detail](https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html)

#### 代码块

::: code-tabs

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/code-tabs.html)

#### 代码演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html" width="100%" height="450"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/demo.html)

#### 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html" width="100%" height="480"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/playground.html)

#### Kotlin 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html" width="100%" height="220"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/kotlin-playground.html)

#### Sandpack 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html" width="100%" height="380"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/sandpack.html)

#### Vue 交互演示

<iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html" width="100%" height="380"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/vue-playground.html)

#### 幻灯片

<iframe src="https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html" width="100%" height="420"/>

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html)
