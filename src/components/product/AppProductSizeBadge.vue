<template>
  <router-link :to="PATH_CART" class="product-size-badge">
    <img src="/icons/icon-cart.svg" alt="Иконка корзины" class="product-size-badge-image" />
  </router-link>
</template>

<script setup>
import { PATH_CART } from '@/mock/routes'
</script>

<style scoped>
.product-size-badge {
  position: absolute;
  top: -15px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: red;
}
@media (max-width: 1023px) {
  .product-size-badge {
    top: -5px;
    width: 22px;
    height: 22px;
  }
}
.product-size-badge-image {
  width: 14px;
}
@media (max-width: 1023px) {
  .product-size-badge-image {
    width: 12px;
  }
}
</style>
