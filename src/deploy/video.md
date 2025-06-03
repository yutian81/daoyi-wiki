---
updated: 2025-06-03
title: 视频组件
index: true
cover: 
icon: 
order: 1
author: 
date: 2025-06-03
tag: []
category:
  - 视频
  - 知识
sticky: 
star: 
footer: 
copyright: 
---

# 视频组件

## Vidstack 视频组件

使用本组件前，请先在你的项目中安装 vidstack@next 包:

```bash
pnpm add -D vidstack@next
```

```html
<VidStack
  src="https://files.vidstack.io/sprite-fight/720p.mp4"
  poster="https://files.vidstack.io/sprite-fight/poster.webp"
/>

<VidStack
  src="https://theme-hope-assets.vuejs.press/files/sample.mp3"
  title="VidStack 示例音频"
/>

<VidStack
  src="youtube/_cMxraX_5RE"
  title="VidStack YouTube Demo"
/>
```

## ArtPlayer 视频组件

使用本组件前，请先在你的项目中安装 artplayer@next 包:

```bash
pnpm add -D artplayer@next
```

```html
<ArtPlayer
  src="https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4"
  title="ArtPlayer 示例视频"
/>
```

```html
<ArtPlayer  
	src="https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4"  
	poster="/poster.svg"  
	title="ArtPlayer 示例视频"  
/>
```

其他配置项:

 - width 视频宽度，默认 100%
 - height 视频高度
 - airplay 支持 AirPlay
 - ratio 宽高比，默认 16：9
 - autoplay 自动播放
 - aspect-ratio 自适应宽高比
 - auto-size 自适应大小
 - auto-orientation 自动旋转
 - screenshot 截图
 - auto-playback 自动循环播放

## Bilibili 视频组件

使用本组件前，请先在你的项目中安装 bilibili-video-player 包:

```bash
pnpm add -D bilibili-video-player@next
```

```html
<BiliBili  
	bvid="BV1kt411o7C3"  
	title="BiliBili 示例视频"  
/>
```

```html
<BiliBili  
	aid="34304064"  
	cid="109293122"  
	ratio="9:16"  
	time="60"  
	page="2"  
/>
```

配置项:

- bvid 视频 bvid。
- title 站视频标题
- page 视频分页

> 相关信息  
> 设置视频分 P 时，必须提供 aid 和 cid，并且可以忽略 bvid 属性。

- width 组件宽度
- height 组件高度
- ratio 组件宽高比，默认 16:9
- autoplay 自动播放
- time 视频开始时间 (单位: 秒)
- danmaku 弹幕
- danmaku-id 弹幕 ID
- danmaku-highlight 弹幕高亮
