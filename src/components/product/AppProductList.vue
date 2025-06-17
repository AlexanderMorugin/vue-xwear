<template>
  <ul class="product-list">
    <li v-for="item in props.products" :key="item.name">
      <!-- Карточка товара для Корзины -->
      <AppCartProductCard v-if="props.fromPage === 'cartPage'" :item="item" />
      <!-- Карточка товара для Списка товаров -->
      <AppProductCard v-else :item="item" :fromPage="props.fromPage" />
    </li>
  </ul>

  <!-- Этот блок показывается только на странице Корзины -->
  <div class="cart-total-box" v-if="props.fromPage === 'cartPage'">
    <div class="cart-total-text">
      Всего товаров <span>{{ props.cartStore.totalCountCartItems }}</span> на сумму:
      <span>{{ currencyFormater(props.cartStore.totalCartSum) }}</span>
    </div>
    <button class="cart-total-button" @click="buyAll">Купить&nbsp;все</button>
  </div>

  <!-- Модалка оформления заказа, открывается в случае, если незарегистрированный пользователь делает заказ -->
  <AppOrderWithoutUserModal
    v-if="isOrderWithoutUserModalOpen"
    @closeOrderWithoutUserModal="closeOrderWithoutUserModal"
  />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppProductCard from '@/components/product/AppProductCard.vue'
import AppCartProductCard from '@/components/cart/AppCartProductCard.vue'
import { currencyFormater } from '@/utils/currency-formater'
import { useOrderStore } from '@/stores/order-store'
import { useUserStore } from '@/stores/user-store'
import { PATH_ORDER } from '@/mock/routes'
import AppOrderWithoutUserModal from '@/components/order/AppOrderWithoutUserModal.vue'

const orderStore = useOrderStore()
const userStore = useUserStore()
const router = useRouter()

const props = defineProps(['products', 'fromPage', 'cartStore'])

const isOrderWithoutUserModalOpen = ref(false)
const closeOrderWithoutUserModal = () => (isOrderWithoutUserModalOpen.value = false)

const buyAll = () => {
  if (userStore.user.id) {
    orderStore.addAllCartItemsToOrder(props.cartStore.cartItems)
    props.cartStore.deleteAllItems()
    router.push(PATH_ORDER)
  } else {
    isOrderWithoutUserModalOpen.value = true
  }
}
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
.cart-total-box {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  border-top: 1px solid var(--gray-sixdary);
  padding-top: 26px;
  margin-top: 80px;
}
@media (max-width: 1023px) {
  .cart-total-box {
    flex-direction: column;
    align-items: flex-end;
    margin-top: 60px;
  }
}
@media (max-width: 767px) {
  .cart-total-box {
    margin-top: 26px;
  }
}
.cart-total-text {
  line-height: 32px;
  font-size: 20px;
  font-weight: 400;
  text-align: end;
  color: var(--color-main-heading);
}
@media (max-width: 1023px) {
  .cart-total-text {
    line-height: 24px;
    font-size: 18px;
  }
}
@media (max-width: 767px) {
  .cart-total-text {
    line-height: 22px;
    font-size: 14px;
  }
}
.cart-total-text span {
  font-weight: 600;
}
.cart-total-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
  border-radius: 5px;
  background: var(--green-primary);
  line-height: 20px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--color-text-product-choose-button);
  text-transform: uppercase;
  padding: 16px 32px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.cart-total-button:hover {
  background: var(--blue-primary);
}
</style>
