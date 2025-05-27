<template>
  <section class="favorite-empty">
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
      <img
        src="/icons/icon-favorite-eye-empty.svg"
        alt="Иконка глаза"
        class="icon-favorite-eye-right"
      />
    </div>
    <h2 class="favorite-empty-title">Этот список желаний пуст.</h2>
    <p class="favorite-empty-subtitle">
      У вас пока нет товаров в списке желаний. На странице "Каталог" вы найдете много интересных
      товаров.
    </p>
    <AppLinkButton route="/" title="Перейти в каталог" class="app-link-button" />
  </section>
</template>

<script setup>
import AppLinkButton from '../buttons/AppLinkButton.vue'
</script>

<style scoped>
.favorite-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
}
@media (max-width: 767px) {
  .favorite-empty {
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
}
.icon-favorite {
  position: relative;
  z-index: 10;
}
.icon-favorite-mouth {
  position: absolute;
  left: 42px;
  bottom: 30px;
  z-index: 10;
}
.icon-favorite-eye-left {
  position: absolute;
  left: 30px;
  bottom: 46px;
  z-index: 10;
}
.icon-favorite-eye-right {
  position: absolute;
  left: 59px;
  bottom: 46px;
  z-index: 10;
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
</style>
