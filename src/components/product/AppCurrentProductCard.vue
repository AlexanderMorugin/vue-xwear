<template>
  <div class="container">
    <div class="image-box">
      <img :src="props.product.imageOneBig" :alt="props.product.name" class="image" />
      <AppFavoriteButton :isFavorite="props.product.isFavorite" :id="props.currentId" />
    </div>
    <div class="details">
      <h1 class="title">{{ categoryName() }} {{ props.product.name }}</h1>
      <AppProductSizes />
    </div>
  </div>
</template>
<script setup>
import AppFavoriteButton from '@/components/product/AppFavoriteButton.vue'
import AppProductSizes from '@/components/product/AppProductSizes.vue'
const props = defineProps(['product', 'currentId'])

const categoryName = () => {
  if (props.product.category === 'kedy') {
    return 'Кеды'
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  padding-top: 17px;
  border: 1px solid blue;
}
@media (max-width: 1023px) {
  .container {
    padding-top: 9px;
  }
}
@media (max-width: 767px) {
  .container {
    grid-template-columns: 1fr;
    row-gap: 31px;
  }
}
.image-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 664px;
  height: 489px;
  overflow: hidden;
}
.image {
  width: 100%;
}
.details {
  width: 100%;
  border: 1px solid blue;
}
.title {
  line-height: 42px;
  font-size: 31px;
  font-weight: 900;
  color: var(--color-text-product-title);
}
@media (max-width: 1023px) {
  .title {
    line-height: 29px;
    font-size: 25px;
  }
}
@media (max-width: 767px) {
  .title {
    line-height: 30px;
    font-size: 19px;
  }
}
</style>
