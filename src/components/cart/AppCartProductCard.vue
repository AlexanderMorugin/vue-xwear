<template>
  <div class="cart-product-card">
    <!-- Бейдж с ценой и размером в верхнем левом углу карточки товара -->
    <div class="cart-product-sum-box">
      <span class="cart-product-sum">{{ currencyFormater(props.item.price) }}</span>
      <div class="cart-product-size">
        Размер: <span class="cart-product-size-number">{{ props.item.size }}</span>
      </div>
    </div>
    <!-- Кнопка "Удалить" в верхнем правом углу карточки товара -->
    <AppCartDeleteButton @openDeleteModal="openDeleteModal" />
    <!-- Модалка удаления -->
    <AppCartDeleteModal
      v-if="isDeleteModalOpen"
      title="Удалить товар из корзины?"
      @closeDeleteModal="closeDeleteModal"
      @deleteItem="deleteItem"
    />

    <!-- Сам товар -->
    <img :src="props.item.imageOneSmall" alt="product" class="cart-image" />

    <span class="cart-product-brand">{{ props.item.brand }}</span>
    <p class="cart-product-name">
      {{ categoryNameFormater(props.item.category) }} - {{ props.item.name }}
    </p>

    <router-link
      :to="`${PATH_SHOES}/${props.item.category}/${props.item.id}`"
      class="cart-product-link"
    ></router-link>
  </div>

  <!-- Счетчик увеличинения и уменьшения товара -->
  <div class="cart-product-counter-box">
    <AppCounter
      :item="props.item"
      @decrement="cartStore.decrement(props.item.id, props.item.size)"
      @increment="cartStore.increment(props.item.id, props.item.size)"
    />

    <!-- Кнопка купить один товар -->
    <button class="cart-product-button" @click="buyOneProduct(props.item)">Купить</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppCartDeleteButton from '@/components/cart/AppCartDeleteButton.vue'
import { currencyFormater } from '@/utils/currency-formater'
import { categoryNameFormater } from '@/utils/category-name-formater'
import { PATH_SHOES, PATH_ORDER } from '@/mock/routes'
import { useCartStore } from '@/stores/cart-store'
import { useOrderStore } from '@/stores/order-store'
import AppCartDeleteModal from './AppCartDeleteModal.vue'
import AppCounter from '../counter/AppCounter.vue'

const cartStore = useCartStore()
const orderStore = useOrderStore()
const router = useRouter()

const props = defineProps(['item', 'fromPage'])

const isDeleteModalOpen = ref(false)

const openDeleteModal = () => (isDeleteModalOpen.value = true)
const closeDeleteModal = () => (isDeleteModalOpen.value = false)
const deleteItem = () => {
  cartStore.deleteItem(props.item.id, props.item.size)
  closeDeleteModal()
}

const buyOneProduct = (index) => {
  router.push(PATH_ORDER)
  orderStore.addOrderItem(index)
  cartStore.deleteItem(index.id, index.size)
}
</script>

<style scoped>
.cart-product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 318px;
}
.cart-product-sum-box {
  position: absolute;
  top: 33px;
  left: 25px;
  z-index: 10;
}
@media (max-width: 767px) {
  .cart-product-sum-box {
    top: 0;
    left: 0;
  }
}
.cart-product-sum {
  line-height: 28px;
  font-size: 19px;
  font-weight: 700;
  color: var(--color-text-card-name);
}
@media (max-width: 767px) {
  .cart-product-sum {
    top: 15px;
    left: 15px;
    line-height: 18px;
    font-size: 14px;
  }
}
.cart-product-size {
  line-height: 16px;
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-dark-fourdary);
}
.cart-product-size-number {
  line-height: 18px;
  font-size: 14px;
  font-weight: 600;
  color: var(--black-thirdary);
}
.cart-image {
  width: 100%;
}
.cart-product-brand {
  line-height: 28px;
  font-size: 19px;
  font-weight: 500;
  color: var(--black-thirdary);
  text-transform: capitalize;
}
@media (max-width: 767px) {
  .cart-product-brand {
    line-height: 18px;
    font-size: 14px;
  }
}
.cart-product-name {
  height: 48px;
  line-height: 28px;
  font-size: 19px;
  font-weight: 500;
  color: var(--black-thirdary);
  overflow: hidden;
}
@media (max-width: 767px) {
  .cart-product-name {
    line-height: 18px;
    font-size: 14px;
  }
}
.cart-product-counter-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}
.cart-product-link {
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  height: 85%;
  z-index: 10;
}
@media (max-width: 590px) {
  .cart-product-link {
    top: 35px;
  }
}
.cart-product-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray-dark-fourdary);
  border-radius: 5px;
  width: fit-content;
  height: 42px;
  line-height: 16px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--black-primary);
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.3s ease all;
}
@media (max-width: 767px) {
  .cart-product-button {
    height: 32px;
    line-height: 14px;
    font-size: 14px;
  }
}
.cart-product-button:hover {
  background: var(--blue-primary);
}
</style>
