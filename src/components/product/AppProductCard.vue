<template>
  <li class="product-card">
    <button class="btn-favorite" @click="toggleFavorite">
      <img :src="getIconUrl()" alt="Избранное" class="btn-icon" />
    </button>
    <!-- <img src="/shoes/adidas/crossovky/ADIZERO_ARUKU_1_small.webp" alt="product" class="image" /> -->
    <img :src="props.item.imageSmall" alt="product" class="image" />
    <!-- <p class="name">Nike Court Zoom Cage 2</p> -->
    <p class="name">{{ props.item.name }}</p>
    <span>{{ props.item.description }}</span>
    <span class="price">от 4699 Р</span>
  </li>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['item'])

let iconUrl = ref('')
const isFavorite = ref(false)

const getIconUrl = () => {
  if (!isFavorite.value) {
    return (iconUrl.value = '/icons/icon-star-black.svg')
  } else {
    return (iconUrl.value = '/icons/icon-star-red.svg')
  }
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}
</script>

<style scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 318px;
}
.btn-favorite {
  position: absolute;
  top: 33px;
  right: 25px;
  cursor: pointer;
}
@media (max-width: 767px) {
  .btn-favorite {
    top: 15px;
    right: 15px;
  }
}
.btn-icon {
  width: 19px;
}
@media (max-width: 767px) {
  .btn-icon {
    width: 15px;
  }
}
.image {
  width: 100%;
}
.name {
  line-height: 28px;
  font-size: 19px;
  font-weight: 700;
  color: var(--color-text-card-name);
  padding-top: 10px;
}
@media (max-width: 767px) {
  .name {
    line-height: 18px;
    font-size: 14px;
  }
}
.price {
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text-card-price);
}
@media (max-width: 767px) {
  .price {
    font-size: 12px;
  }
}
</style>
