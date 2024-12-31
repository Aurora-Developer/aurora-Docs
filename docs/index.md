---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Aurora"
  text: "提供 AUrora 生态使用帮助及开发者文档"
  tagline: 获取使用帮助，了解开发方式
  actions:
    - theme: brand
      text: Aurora是什么？
      link: /guide/what-is-aurora
    - theme: alt
      text: 快速开始
      link: /reference/api

features:
  - title: 稳定运行
    icon: "🔒"
    details: 提供稳定的运行环境
  - title: 持续更新
    icon: "🔄"
    details: 定期更新以确保最新功能
  - title: 资源丰富
    icon: "📦"
    details: 提供丰富的资源和支持
  - title: 快速运行
    icon: "⚡"
    details: 提供快速的启动和运行体验
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>