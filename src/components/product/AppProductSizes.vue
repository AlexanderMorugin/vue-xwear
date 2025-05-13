<template>
  <div class="size-container">
    <h2 class="title">EU размеры:</h2>
    <AppProductSizesGrid />
  </div>
</template>

<script setup>
import AppProductSizesGrid from '@/components/product/AppProductSizesGrid.vue'
</script>

<style scoped>
.size-container {
  display: flex;
  flex-direction: column;
  height: 200px;
  padding-top: 13px;
  border: 1px solid red;
}
@media (max-width: 767px) {
  .size-container {
    padding-top: 31px;
  }
}
.title {
  line-height: 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-product-size-title);
  text-transform: uppercase;
}
</style>
