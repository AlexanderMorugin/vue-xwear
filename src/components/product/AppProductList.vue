<template>
  <ul class="product-list">
    <li v-for="item in props.products" :key="item.name">
      <!-- Карточка товара для Корзины -->
      <AppCartProductCard v-if="props.fromPage === 'cartPage'" :item="item" />
      <!-- Карточка товара для Списка товаров -->
      <AppProductCard v-else :item="item" :fromPage="props.fromPage" />
    </li>
  </ul>
</template>

<script setup>
import AppProductCard from '@/components/product/AppProductCard.vue'
import AppCartProductCard from '@/components/cart/AppCartProductCard.vue'
const props = defineProps(['products', 'fromPage'])
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  column-gap: 30px;
  justify-items: center;
  padding-top: 13px;
}
@media (max-width: 1023px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    padding-top: 27px;
  }
}
@media (max-width: 767px) {
  .product-list {
    row-gap: 20px;
    column-gap: 10px;
    padding-top: 25px;
  }
}
</style>
