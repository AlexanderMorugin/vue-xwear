<template>
  <ul class="product-list">
    <li v-for="item in props.shoes" :key="item.name">
      <AppProductCard :item="item" />
    </li>
  </ul>
</template>

<script setup>
import AppProductCard from '@/components/product/AppProductCard.vue'
const props = defineProps(['shoes'])
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
