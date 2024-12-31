---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Aurora Community"
  text: "提供 Aurora 生态使用帮助及开发者文档"
  tagline: 获取使用帮助，了解开发方式
  actions:
    - theme: brand
      text: 使用指南
      link: /guide/what-is-aurora
    - theme: alt
      text: 开发文档
      link: /dev/developer-program
  image:
    src: https://www.aurora-sky.top/icon.png
    alt: Aurora

features:
  - title: 稳定运行
    icon: "🔒"
    details: 提供稳定的运行环境
  - title: 模块化设计
    icon: "🧩"
    details: 独立的功能模块，灵活组合，按需使用
  - title: 插件系统
    icon: "⚙️"
    details: 强大的插件扩展机制，轻松扩展功能
  - title: 开发友好
    icon: "💻"
    details: 完善的开发文档和API，快速上手开发
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
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #F04A13 30%, #FF8C42 70%);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #FF8C42 50%, #F09213 50%);
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

.VPHomeHero .image-container img {
  border-radius: 25px;
}

.VPHomeHero .container .actions .VPButton.brand {
  background-color: #F04A13 !important;
  border-color: #ff6633 !important;
  color: #ffffff;
  font-weight: 700;
}

.VPHomeHero .container .actions .VPButton.brand:hover {
  background-color: #FF4600 !important;
  border-color: #ff7744 !important;
}

</style>