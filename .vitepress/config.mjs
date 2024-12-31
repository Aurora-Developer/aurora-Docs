import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AUrora 文档",    //网站标题
  description: "提供使用帮助以及开发文档",   //网站描述
  base: "/",    //根目录
  logo: '/images/logo.png',   //网站logo
  srcDir: "docs",   //相对目录，用于存放md文件
  themeConfig: {    //主题配置
    //logo设置
    logo: "/images/logo.png",
    //网站头部设置
    head: [["link", {rel: "icon", href: "/favicon.ico"}], ['script', { src: '/live2d.js' }]],
    //网站底部设置
    footer: {
      //底部信息
      message: 'Made with ❤️ by Community Developers',
      //底部版权
      copyright: " Copyright © 2024 Aurora .website All Rights Reserved. ",
    },
    //本地搜索
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    //导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/what-is-aurora' },
      { text: 'API参考', link: '/reference/api' }
    ],
    //侧边栏配置
    sidebar: {
      '/guide/': [
        {
          text: '简介',
          items: [
            { text: 'Aurora是什么？', link: '/guide/what-is-aurora' },
            { text: '快速开始', link: '/guide/quick-start' }
          ]
        },
        {
          text: '功能',
          items: [
            { text: '世界设置', link: '/guide/world-settings' },
            { text: '玩家管理', link: '/guide/player-management' },
            { text: '快速建造', link: '/guide/quick-build' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'API参考',
          items: [
            { text: 'API文档', link: '/docs/reference/api' },
          ]
        }
      ]
    },
    //导航栏中展示带有图标的社交帐户链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    //更新时间
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    //手机端配置返回顶部
    returnToTop: true,
    //手机端配置返回顶部按钮显示文字
    returnToTopLabel: "返回顶部",
    //手机端配置侧边栏菜单按钮显示文字
    sidebarMenuLabel:"菜单",
    //右侧内容导航栏
    outline: {
      level: [2, 6],
      label:"导航"
    },
    //翻页
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  }
})
