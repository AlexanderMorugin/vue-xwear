<template>
  <section class="clothes-empty">
    <div class="icon-box">
      <div class="circle" />
      <img src="/icons/icon-favorite-empty.svg" alt="Иконка избранных" class="icon-favorite" />
      <img
        src="/icons/icon-favorite-mouth-empty.svg"
        alt="Иконка рта"
        class="icon-favorite-mouth"
      />
      <img
        src="/icons/icon-favorite-eye-empty.svg"
        alt="Иконка глаза"
        class="icon-favorite-eye-left"
      />
      <div class="icon-favorite-eye-left-circle" />
      <img
        src="/icons/icon-favorite-eye-empty.svg"
        alt="Иконка глаза"
        class="icon-favorite-eye-right"
      />
      <div class="icon-favorite-eye-right-circle" />
    </div>
    <h2 class="favorite-empty-title">Этот список желаний пуст.</h2>
    <p class="favorite-empty-subtitle">
      Данная страница будет сделана по типу "Обувь". Здесь будет отображаться каталог товаров.
    </p>
    <AppLinkButton :route="PATH_SHOES" title="Смотрим Обувь" class="app-link-button" />
  </section>
</template>

<script setup>
import AppLinkButton from '../buttons/AppLinkButton.vue'
import { PATH_SHOES } from '@/mock/routes'
</script>

<style scoped>
.clothes-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
}
@media (max-width: 767px) {
  .clothes-empty {
    padding-top: 40px;
  }
}
.icon-box {
  position: relative;
  width: 102px;
  height: 96px;
}
.circle {
  position: absolute;
  left: 14px;
  bottom: 4px;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: var(--blue-primary);
  animation: pulse-animation 2s infinite;
}
.icon-favorite {
  position: relative;
  z-index: 10;
  animation: scale 2s infinite;
}
.icon-favorite-mouth {
  position: absolute;
  left: 42px;
  bottom: 30px;
  z-index: 10;
  animation: mouth-rotate 5s infinite;
}
.icon-favorite-eye-left {
  position: absolute;
  left: 30px;
  bottom: 46px;
  z-index: 10;
}
.icon-favorite-eye-left-circle {
  position: absolute;
  left: 34px;
  bottom: 47px;
  z-index: 20;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--black-primary);
  animation: opacity 5s infinite;
}
.icon-favorite-eye-right {
  position: absolute;
  left: 59px;
  bottom: 46px;
  z-index: 10;
}
.icon-favorite-eye-right-circle {
  position: absolute;
  left: 63px;
  bottom: 47px;
  z-index: 20;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--black-primary);
  animation: opacity 5s 0.3s infinite;
}
.favorite-empty-title {
  width: 100%;
  max-width: 350px;
  font-weight: 800;
  font-size: 23px;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
  color: var(--black-thirdary);
  padding-top: 20px;
}
.favorite-empty-subtitle {
  width: 100%;
  max-width: 550px;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  color: var(--gray-dark-thirdary);
  padding-top: 14px;
}
.app-link-button {
  margin-top: 20px;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px rgba(73, 208, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 40px rgba(73, 208, 255, 0);
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  20% {
    transform: rotate(15deg);
  }
  50% {
    transform: scale(1.2);
  }
  60% {
    transform: rotate(-10deg);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes mouth-rotate {
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(180deg);
  }
  70% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  1% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
