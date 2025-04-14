---
title: 开发者计划
description: Aurora开发者计划介绍
---

<style>
.developer-program {
  color: #e0e0e0;
  padding: 2rem;
  border-radius: 12px;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.developer-program h1 {
  padding-top: 1rem;
  color: #ff7b00;
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 2.5rem;
  border-bottom: none;
  padding-bottom: 1rem;
  background: linear-gradient(90deg, #ff7b00, #ff9933);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.developer-program h1::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #ff7b00, #ff9933);
  border-radius: 2px;
}

.developer-program h2 {
  color: #ff9933;
  font-size: 2rem;
  margin-top: 3rem;
  border-left: none;
  padding-left: 0;
  position: relative;
  display: inline-block;
}

.developer-program h2::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: linear-gradient(180deg, #ff7b00, #ff9933);
  border-radius: 2px;
}

.developer-program h3 {
  color: #ffb366;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
}

.benefit-card {
  background: linear-gradient(145deg, #2a2a2a, #333333);
  padding: 2rem;
  border-radius: 16px;
  border-left: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.benefit-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #ff7b00, #ff9933);
  border-radius: 2px;
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(255, 123, 0, 0.15);
}

.benefit-card ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.benefit-card li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  list-style: none;
}

.benefit-card li:hover {
  opacity: 1;
}

.benefit-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: #ff7b00;
  border-radius: 50%;
}

.steps-list {
  background: linear-gradient(145deg, #2a2a2a, #333333);
  padding: 2rem;
  border-radius: 16px;
  margin: 1.5rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.steps-list ul {
  list-style: none;
  padding-left: 0;
}

.steps-list li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  list-style: none;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.steps-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: #ff7b00;
  border-radius: 50%;
}

.contact-section {
  background: linear-gradient(145deg, #2a2a2a, #333333);
  padding: 2.5rem;
  border-radius: 16px;
  margin-top: 3rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.contact-section a
{
  color: #ff7b00;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(255, 123, 0, 0.1);
}

.contact-section a:hover {
  color: #ffb366;
  background: rgba(255, 123, 0, 0.2);
}

.contact-section li {
  margin: 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.decorative-element {
  background: linear-gradient(145deg, rgba(255, 123, 0, 0.05), rgba(255, 153, 51, 0.08));
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  min-height: 200px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.decorative-element::before {
  content: '🚀';
  position: absolute;
  font-size: 2.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.05;
}
</style>

<div class="developer-program">

# 开发者计划

## 🤔 什么是Aurora开发者计划？
*您已是开发者？请直接参阅[开发者API](./dev-docs.md)*

Aurora开发者计划旨在支持优秀的开发者社区，为开发者提供技术支持、资源共享的平台。通过加入开发者计划，您可以获得：

<div class="benefits-grid">
  <div class="benefit-card">
    <h3>💻 技术支持</h3>
    <ul>
      <li>深空的技术支持</li>
      <li>优先的API访问权限</li>
    </ul>
  </div>
  <div class="benefit-card">
    <h3>📚 资源支持</h3>
    <ul>
      <li>开发资源和文档</li>
      <li>社区交流机会</li>
    </ul>
  </div>
  <div class="benefit-card">
    <h3>🎯 展示机会</h3>
    <ul>
      <li>项目展示机会</li>
      <li>社区影响力</li>
    </ul>
  </div>
  <div class="decorative-element"></div>
</div>

## 📝 如何加入？

<div class="steps-list">

### ✨ 基本要求
<ul>
  <li>具备基本的开发能力</li>
  <li>对Aurora项目有浓厚兴趣</li>
  <li>愿意参与社区建设</li>
</ul>

### 📋 申请步骤
<ul>
  <li>填写开发者申请表</li>
  <li>提交您的开发计划或项目案例</li>
  <li>等待审核通过</li>
</ul>

</div>

## 🎁 开发者权益

<div class="benefits-grid">
  <div class="benefit-card">
    <h3>🛠️ 技术支持</h3>
    <ul>
      <li>优先的技术支持响应</li>
      <li>帮助解决开发问题</li>
    </ul>
  </div>
  <div class="benefit-card">
    <h3>🎯 资源支持</h3>
    <ul>
      <li>获取开发帮助</li>
      <li>API调用配额</li>
    </ul>
  </div>
  <div class="benefit-card">
    <h3>👑 社区展示</h3>
    <ul>
      <li>开发者认证标识</li>
      <li>项目展示曝光</li>
    </ul>
  </div>
  <div class="decorative-element"></div>
</div>



<div class="contact-section">

## 📬 资格申请

 ### <a href="#">点此前往申请</a>


如果您对开发者计划有任何疑问，请通过以下方式联系我们：

<ul>
  <li>🐙 GitHub: <a href="https://github.com/Aurora-Developer" target="_blank">Aurora-Developer</a></li>
  <li>📧 电子邮件: developer@aurora.com</li>
</ul>

🚀 加入 Aurora 开发者计划，构建更好的 Aurora 生态系统！

</div>

</div> 