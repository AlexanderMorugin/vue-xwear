<template>
  <router-link :to="PATH_CART" class="product-list-badge-size">
    <img
      src="/icons/icon-cart-dark.svg"
      alt="Иконка корзины"
      class="product-list-badge-size-image"
    />
    <span class="product-list-badge-size-text">В корзине</span>
    <div class="product-list-badge-size-text">
      Размер: <span class="product-list-badge-size-span">{{ props.size }}</span>
    </div>
  </router-link>
</template>

<script setup>
import { PATH_CART } from '@/mock/routes'

const props = defineProps(['size'])
</script>

<style scoped>
.product-list-badge-size {
  position: absolute;
  top: 33px;
  left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  border: 1px solid var(--gray-sixdary);
  padding: 5px 10px;
  transition: 0.3s ease all;
  z-index: 20;
}
@media (max-width: 767px) {
  .product-list-badge-size {
    top: 0;
    left: 0;
  }
}
.product-list-badge-size:hover {
  background: var(--white-thirdary);
  border: 1px solid var(--blue-primary);
}
.product-list-badge-size-image {
  width: 15px;
}
.product-list-badge-size-text {
  line-height: 16px;
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-normal-sevendary);
}
.product-list-badge-size-span {
  font-weight: 600;
  color: var(--black-thirdary);
}
</style>
