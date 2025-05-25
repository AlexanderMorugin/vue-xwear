<template>
  <a href="https://github.com/AlexanderMorugin/vue-xwear" target="_blank" class="develop-logo">
    <img src="/logo/logo-developer.png" alt="Логотип разработчика" />
    <div class="develop-logo-text-box">
      <span class="develop-logo-text top">Разработка сайта</span>
      <span class="develop-logo-text bottom">Александр М</span>
    </div>
  </a>
</template>

<style scoped>
.develop-logo {
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
}
.develop-logo-text-box {
  display: flex;
  flex-direction: column;
}
.develop-logo-text {
  text-transform: uppercase;
  /* letter-spacing: 0.8px; */
  color: var(--gray-sevendary);
}
.top {
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
}
.bottom {
  font-weight: 900;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
}
</style>
