<template>
  <div class="heading">
    <div class="title-box">
      <h1 class="title">{{ props.title }}</h1>
      <span class="quantity" v-if="props.quantity">{{ props.quantity }} товаров</span>
    </div>

    <!-- Этот блок показывается только на страницах товаров типа CrossovkyView -->
    <div v-if="props.fromPage === 'productPage'">
      <SortBox
        v-if="props.sortBox"
        @toggleSorting="$emit('toggleSorting')"
        :isDesc="props.isDesc"
      />
      <div v-if="props.filters" class="heading-filter-buttons">
        <AppFilterButton
          v-if="isScreenLarge"
          @openFiltersForMobile="$emit('openFiltersForMobile')"
        />
      </div>
    </div>

    <!-- Этот блок показывается только на странице Корзины -->
    <div
      v-if="props.fromPage === 'cartPage' && cartStore.cartItems.length"
      class="heading-cart-clear-button-box"
    >
      <button class="heading-cart-clear-button" @click="cartStore.deleteAllItems">
        <span class="heading-cart-clear-button-text">Очистить корзину</span>
        <img
          src="/icons/icon-trash-gray.svg"
          alt="Иконка очистить"
          class="heading-cart-clear-button-image"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import SortBox from '@/components/filters/SortBox.vue'
import AppFilterButton from '@/components/filters/AppFilterButton.vue'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useCartStore } from '@/stores/cart-store'

const cartStore = useCartStore()
const { isScreenLarge } = useResizeLarge()

const props = defineProps(['title', 'quantity', 'sortBox', 'filters', 'isDesc', 'fromPage'])
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['toggleSorting', 'openFiltersForMobile'])
</script>

<style scoped>
.heading {
  display: grid;
  grid-template-areas: 'title sorting';
  grid-template-columns: 1fr 261px;
  justify-content: space-between;
  width: 100%;
}
@media (max-width: 1023px) {
  .heading {
    grid-template-areas: 'title sorting' 'filters filters';
  }
}
@media (max-width: 767px) {
  .heading {
    grid-template-columns: 1fr;
    grid-template-areas: 'title' 'filters' 'sorting';
  }
}
.title-box {
  grid-area: title;
  display: flex;
  flex-direction: column;
}
.title {
  line-height: 42px;
  font-size: 31px;
  font-weight: 900;
  color: var(--color-main-heading);
  text-transform: uppercase;
}
@media (max-width: 1023px) {
  .title {
    line-height: 40px;
    font-size: 25px;
  }
}
@media (max-width: 767px) {
  .title {
    line-height: 22px;
    font-size: 19px;
  }
}
.quantity {
  line-height: 19px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-quantity);
}
.heading-filter-buttons {
  grid-area: filters;
  display: flex;
  justify-content: flex-end;
  padding-top: 27px;
}
@media (max-width: 767px) {
  .heading-filter-buttons {
    padding-top: 25px;
    padding-bottom: 15px;
  }
}
.heading-cart-clear-button-box {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
@media (max-width: 767px) {
  .heading-cart-clear-button-box {
    padding-top: 10px;
  }
}
.heading-cart-clear-button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  cursor: pointer;
}
.heading-cart-clear-button-text {
  line-height: 18px;
  font-size: 16px;
  font-weight: 400;
  vertical-align: middle;
  color: var(--gray-normal-sevendary);
  border-bottom: 1px solid var(--gray-normal-sevendary);
  transition: 0.3s ease all;
}
@media (max-width: 767px) {
  .heading-cart-clear-button-text {
    line-height: 13px;
    font-size: 13px;
  }
}
.heading-cart-clear-button-image {
  width: 24px;
  cursor: pointer;
}
@media (max-width: 767px) {
  .heading-cart-clear-button-image {
    width: 19px;
  }
}
.heading-cart-clear-button:hover .heading-cart-clear-button-text {
  color: var(--blue-primary);
  border-bottom: 1px solid var(--blue-primary);
}
</style>
