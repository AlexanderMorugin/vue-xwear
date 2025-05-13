<template>
  <div class="size-container">
    <h2 class="title">EU размеры:</h2>
    <ul class="sizes-grid">
      <li>
        <button class="grid-item">
          <span class="size">37</span>
          <span class="price">{{ currencyFormater(13899) }}</span>
        </button>
      </li>
      <li>
        <button class="grid-item grid-item-active">
          <span class="size size-active">37</span>
          <span class="price price-active">{{ currencyFormater(13899) }}</span>
        </button>
      </li>
      <li>
        <button class="grid-item">
          <span class="size">37</span>
          <span class="price">{{ currencyFormater(13899) }}</span>
        </button>
      </li>
      <li>
        <button class="grid-item">
          <span class="size">37</span>
          <span class="price">{{ currencyFormater(13899) }}</span>
        </button>
      </li>
      <li>
        <button class="grid-item">
          <span class="size">37</span>
          <span class="price">{{ currencyFormater(3899) }}</span>
        </button>
      </li>
      <li>
        <button class="grid-item">
          <span class="size">37</span>
          <span class="price">{{ currencyFormater(8899) }}</span>
        </button>
      </li>
      <li>
        <button class="grid-item">
          <span class="size">42</span>
          <span class="price">{{ currencyFormater(13899) }}</span>
        </button>
      </li>
      <li>
        <button class="grid-item">
          <span class="size">45</span>
          <span class="price">{{ currencyFormater(3899) }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { currencyFormater } from '@/utils/currency-formater'
</script>

<style scoped>
.size-container {
  display: flex;
  flex-direction: column;
  padding-top: 13px;
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
.sizes-grid {
  /* display: grid;
  grid-template-columns: repeat(5, 82px);
  column-gap: 10px;
  row-gap: 13px; */
  display: flex;
  column-gap: 10px;
  row-gap: 13px;
  flex-wrap: wrap;
  padding-top: 13px;
  /* border: 1px solid green; */
}
@media (max-width: 1023px) {
  .sizes-grid {
    /* grid-template-columns: repeat(4, 82px); */
    column-gap: 5px;
    row-gap: 5px;
    padding-top: 15px;
  }
}
@media (max-width: 767px) {
  .sizes-grid {
    /* grid-template-columns: repeat(5, 64px); */
    padding-top: 13px;
  }
}
.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 82px;
  /* max-width: 82px; */
  border: 1px solid var(--color-border-product-size);
  border-radius: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: 0.3s ease all;
}
@media (max-width: 1023px) {
  .grid-item {
    width: 64px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
@media (max-width: 767px) {
  .grid-item {
    padding-top: 8px;
    padding-bottom: 8px;
  }
}
.grid-item:hover {
  border: 1px solid var(--color-border-product-size-hover);
}
.grid-item-active {
  background: var(--color-border-product-size-hover);
  border: 1px solid var(--color-border-product-size-hover);
}
.size {
  line-height: 15px;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text-product-size);
  transition: 0.5s ease all;
}
@media (max-width: 1023px) {
  .size {
    font-size: 14px;
  }
}
.size-active {
  color: var(--color-text-product-size-active);
}
.price {
  line-height: 15px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-product-price);
  transition: 0.8s ease all;
}
.price-active {
  color: var(--color-text-product-size-active);
}
</style>
