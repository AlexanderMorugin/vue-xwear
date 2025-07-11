<template>
  <div :class="['heading', { 'heading-shoes-view': props.fromPage === 'shoesView' }]">
    <div class="title-box">
      <!-- Заголовок H2 на странице "Обувь" -->
      <h2 v-if="props.fromPage === 'shoesView'" class="title">{{ props.title }}</h2>
      <!-- Главный заголовок страницы H1 -->
      <h1 v-else class="title">{{ props.title }}</h1>
      <span class="quantity" v-if="props.quantity">{{ props.quantity }} товаров</span>
    </div>

    <!-- Этот блок показывается только на страницах товаров типа CrossovkyView -->
    <div class="heading-link-container">
      <router-link v-if="props.fromPage === 'shoesView'" :to="props.link" class="heading-link">
        <span class="heading-link-text">{{ props.linkText }}</span>
        <img src="/icons/icon-arrow-black.svg" alt="Стрелка" />
      </router-link>
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
      <button class="heading-cart-clear-button" @click="openDeleteModal">
        <span class="heading-cart-clear-button-text">Очистить корзину</span>
        <img
          src="/icons/icon-trash-gray.svg"
          alt="Иконка очистить"
          class="heading-cart-clear-button-image"
        />
      </button>
    </div>
    <!-- Модалка удаления -->
    <AppCartDeleteModal
      v-if="isDeleteModalOpen"
      title="Очистить корзину?"
      @closeDeleteModal="closeDeleteModal"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SortBox from '@/components/filters/SortBox.vue'
import AppFilterButton from '@/components/filters/AppFilterButton.vue'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useCartStore } from '@/stores/cart-store'
import AppCartDeleteModal from '@/components/cart/AppCartDeleteModal.vue'

const cartStore = useCartStore()
const { isScreenLarge } = useResizeLarge()

const props = defineProps([
  'title',
  'quantity',
  'sortBox',
  'filters',
  'isDesc',
  'fromPage',
  'link',
  'linkText',
])
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['toggleSorting', 'openFiltersForMobile'])

const isDeleteModalOpen = ref(false)

const openDeleteModal = () => (isDeleteModalOpen.value = true)
const closeDeleteModal = () => (isDeleteModalOpen.value = false)
const deleteItem = () => {
  cartStore.deleteAllItems()
  closeDeleteModal()
}
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

.heading-shoes-view {
  grid-template-columns: 1fr 1fr;
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
  grid-area: sorting;
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
.heading-link-container {
  display: flex;
  justify-content: flex-end;
}
.heading-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 5px;
  border-bottom: 2px solid var(--black-primary);
  transition: 0.3s ease all;
}
.heading-link:hover {
  border-bottom: 2px solid var(--blue-primary);
}
.heading-link-text {
  font-weight: 700;
  font-size: 14px;
  line-height: 23px;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--black-secondary);
  transition: 0.2s ease all;
}
@media (max-width: 767px) {
  .heading-link-text {
    font-size: 12px;
  }
}
.heading-link:hover .heading-link-text {
  color: var(--blue-secondary);
}
</style>
