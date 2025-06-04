<template>
  <router-link :to="PATH_CART" class="product-list-badge-size">
    <img
      src="/icons/icon-cart-dark.svg"
      alt="Иконка корзины"
      class="product-list-badge-size-image"
    />
    <span class="product-list-badge-size-text">В корзине</span>
    <div class="product-list-badge-size-text">
      <span>{{ props.currentCartItem.length > 1 ? 'Размеры:' : 'Размер:' }}</span>
      <ul>
        <li
          v-for="item in props.currentCartItem"
          :key="item.size"
          class="product-list-badge-size-span"
        >
          {{ item.size }}&ensp;
        </li>
      </ul>
    </div>
  </router-link>
</template>

<script setup>
import { PATH_CART } from '@/mock/routes'

const props = defineProps(['currentCartItem'])
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
  width: 100%;
  max-width: 82px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  border: 1px solid var(--gray-sixdary);
  padding: 5px 7px;
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
  text-align: center;
}
.product-list-badge-size-span {
  display: inline-flex;
  font-weight: 600;
  color: var(--black-thirdary);
}
</style>
