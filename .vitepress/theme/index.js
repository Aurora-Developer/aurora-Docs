// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 修复移动端汉堡菜单的交互问题
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => {
        // 延迟执行确保DOM已完全加载
        setTimeout(() => {
          fixMobileMenu();
        }, 100);
      });
    }
  }
}

// 修复移动端汉堡菜单问题
function fixMobileMenu() {
  // 确保在移动端环境
  if (typeof window === 'undefined' || window.innerWidth > 768) return;
  
  // 查找汉堡菜单按钮
  const hamburgerBtn = document.querySelector('.VPNavBarHamburger');
  if (!hamburgerBtn) return;
  
  // 查找菜单屏幕
  const navScreen = document.querySelector('.VPNavScreen');
  if (!navScreen) return;
  
  // 重新添加点击事件
  hamburgerBtn.addEventListener('click', (e) => {
    // 阻止默认行为和冒泡
    e.preventDefault();
    e.stopPropagation();
    
    // 切换菜单打开状态
    const isOpen = navScreen.classList.contains('open');
    if (isOpen) {
      navScreen.classList.remove('open');
      document.body.classList.remove('screen-active');
    } else {
      navScreen.classList.add('open');
      document.body.classList.add('screen-active');
    }
  }, { passive: false });
  
  // 添加触摸事件支持
  hamburgerBtn.addEventListener('touchend', (e) => {
    // 确保触摸事件不被滚动等操作干扰
    e.preventDefault();
    
    // 模拟点击操作
    hamburgerBtn.click();
  }, { passive: false });
}
