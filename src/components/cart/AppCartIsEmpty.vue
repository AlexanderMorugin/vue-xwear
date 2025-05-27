<template>
  <section class="cart-empty">
    <div class="icon-box">
      <div class="circle" />
      <img src="/icons/icon-cart-empty.svg" alt="Иконка корзины" class="icon-cart" />
    </div>
    <h2 class="cart-empty-title">Ваша корзина на данный момент пуста.</h2>
    <p class="cart-empty-subtitle">
      Прежде чем приступить к оформлению заказа, вы должны добавить некоторые товары в корзину. На
      странице "Каталог" вы найдете много интересных товаров.
    </p>
    <AppLinkButton route="/" title="Перейти в каталог" class="app-link-button" />
  </section>
</template>

<script setup>
import AppLinkButton from '../buttons/AppLinkButton.vue'
</script>

<style scoped>
.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
}
@media (max-width: 767px) {
  .cart-empty {
    padding-top: 40px;
  }
}
.icon-box {
  position: relative;
  width: 84px;
  height: 98px;
}
.circle {
  position: absolute;
  left: 6px;
  bottom: 4px;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: var(--blue-primary);
}
.icon-cart {
  position: relative;
  z-index: 10;
}
.cart-empty-title {
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
.cart-empty-subtitle {
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
