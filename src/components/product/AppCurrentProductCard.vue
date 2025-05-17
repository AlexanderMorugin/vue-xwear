<template>
  <div class="product-container">
    <div class="image-container">
      <div class="image-box">
        <img :src="currentImage" :alt="props.product.name" class="image" />
        <AppFavoriteButton :isFavorite="props.product.isFavorite" :id="props.currentId" />
      </div>
      <ul class="image-thumbs">
        <li class="image-thumbs-item" :class="{ 'image-thumbs-item-active': isOneActive }">
          <button class="image-thumbs-button" @click="setShowImage('one')">
            <img :src="props.product.imageOneSmall" :alt="props.product.name" class="image-thumb" />
          </button>
        </li>
        <li class="image-thumbs-button" :class="{ 'image-thumbs-item-active': isTwoActive }">
          <button class="image-thumbs-button" @click="setShowImage('two')">
            <img :src="props.product.imageTwoSmall" :alt="props.product.name" class="image-thumb" />
          </button>
        </li>
        <li class="image-thumbs-button" :class="{ 'image-thumbs-item-active': isThreeActive }">
          <button class="image-thumbs-button" @click="setShowImage('three')">
            <img
              :src="props.product.imageThreeSmall"
              :alt="props.product.name"
              class="image-thumb"
            />
          </button>
        </li>
      </ul>
    </div>

    <div class="details">
      <h1 class="title">
        {{ categoryNameFormater(props.product.category) }} {{ props.product.name }}
      </h1>
      <AppProductSizes :product="props.product" :id="props.currentId" />
    </div>
  </div>

  <AppCurrentProductDetails :product="props.product" :id="props.currentId" />
</template>
<script setup>
import AppFavoriteButton from '@/components/product/AppFavoriteButton.vue'
import AppProductSizes from '@/components/product/AppProductSizes.vue'
import AppCurrentProductDetails from '@/components/product/AppCurrentProductDetails.vue'
import { categoryNameFormater } from '@/utils/category-name-formater'
import { ref } from 'vue'

const props = defineProps(['product', 'currentId'])

const currentImage = ref(props.product.imageOneNormal)
const isOneActive = ref(true)
const isTwoActive = ref(false)
const isThreeActive = ref(false)

const setShowImage = (args) => {
  if (args === 'one') {
    currentImage.value = props.product.imageOneNormal
    isOneActive.value = true
    isTwoActive.value = false
    isThreeActive.value = false
  }
  if (args === 'two') {
    currentImage.value = props.product.imageTwoNormal
    isOneActive.value = false
    isTwoActive.value = true
    isThreeActive.value = false
  }
  if (args === 'three') {
    currentImage.value = props.product.imageThreeNormal
    isOneActive.value = false
    isTwoActive.value = false
    isThreeActive.value = true
  }
}
</script>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  padding-top: 17px;
}
@media (max-width: 1023px) {
  .product-container {
    column-gap: 20px;
    padding-top: 9px;
  }
}
@media (max-width: 767px) {
  .product-container {
    grid-template-columns: 1fr;
    row-gap: 31px;
  }
}
.image-container {
  display: flex;
  flex-direction: column;
}
.image-box {
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 664px;
  height: 489px;
  overflow: hidden;
}
@media (max-width: 1023px) {
  .image-box {
    height: 227px;
  }
}
@media (max-width: 767px) {
  .image-box {
    height: 283px;
  }
}
.image {
  width: 100%;
  object-fit: cover;
}
.image-thumbs {
  display: flex;
  gap: 25px;
  width: fit-content;
  border-bottom: 1px solid var(--gray-light-fourdary);
}
.image-thumbs-item {
  height: 106px;
  cursor: pointer;
}
@media (max-width: 1023px) {
  .image-thumbs-item {
    height: 96px;
  }
}
@media (max-width: 767px) {
  .image-thumbs-item {
    height: 86px;
  }
}
.image-thumbs-item-active {
  border-bottom: 1px solid var(--blue-primary);
}
.image-thumbs-button {
  height: 106px;
  cursor: pointer;
}
@media (max-width: 1023px) {
  .image-thumbs-button {
    height: 96px;
  }
}
@media (max-width: 767px) {
  .image-thumbs-button {
    height: 86px;
  }
}
.image-thumb {
  width: 105px;
}
@media (max-width: 1023px) {
  .image-thumb {
    width: 95px;
  }
}
@media (max-width: 767px) {
  .image-thumb {
    width: 85px;
  }
}
.details {
  width: 100%;
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
