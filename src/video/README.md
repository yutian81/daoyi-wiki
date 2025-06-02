---
title: 视频
index: false
icon: play
order: 1
category:
  - 视频
  - 知识
---

<Catalog />

使用本组件前，请先在你的项目中安装 artplayer 包:

pnpm add -D artplayer

<ArtPlayer src="https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4" />

<ArtPlayer
  src="https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4"
  poster="/poster.svg"
/>

<ArtPlayer
  src="https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4"
  airplay
  aspect-ratio
  auto-size
  auto-orientation
  auto-playback
  fast-forward
  flip
  fullscreen-web
  lock
  loop
  is-live
  muted
  mini-progress-bar
  pip
  screenshot
  subtitle-offset
/>

<VidStack
  src="https://files.vidstack.io/sprite-fight/720p.mp4"
  poster="https://files.vidstack.io/sprite-fight/poster.webp"
/>

<VidStack src="//theme-hope-assets.vuejs.press/files/sample.mp3" title="VidStack 示例音频"

<VidStack
  src="youtube/_cMxraX_5RE"
  title="VidStack YouTube Demo"
/>
