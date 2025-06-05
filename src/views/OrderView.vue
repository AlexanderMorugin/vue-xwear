<!-- OrderView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="orderBreadcrumbs" />
    <app-page tag="main" class="container">
      <AppHeading title="Оформление заказа" />
      <div class="order-view">
        <AppOrderCard :orderStore="orderStore" />
        <div class="order-view-address-submit">
          <AddressCard number="1" />

          <div class="order-view-buttons">
            <button class="order-view-button order-view-button-submit">Оформить</button>
            <button class="order-view-button order-view-button-cancel" @click="cancelOrder">
              Отменить
            </button>
          </div>
        </div>
      </div>
    </app-page>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppOrderCard from '@/components/order/AppOrderCard.vue'
import AppLoader from '@/components/AppLoader.vue'
import { orderBreadcrumbs } from '@/components/breadcrumbs/breadcrumbs-pages/order-breadcrumbs'
import AddressCard from '@/components/profile/AddressCard.vue'
import { useOrderStore } from '@/stores/order-store'
import { PATH_CART } from '@/mock/routes'

const orderStore = useOrderStore()
const router = useRouter()

const isLoading = ref(false)

const cancelOrder = () => {
  router.push(PATH_CART)
  orderStore.deleteAllItems()
}
</script>

<style scoped>
.order-view {
  display: grid;
  grid-template-columns: 1fr 491px;
  column-gap: 30px;
  padding-top: 48px;
}
@media (max-width: 1023px) {
  .order-view {
    grid-template-columns: 1fr;
    row-gap: 20px;
    padding-top: 28px;
  }
}
@media (max-width: 767px) {
  .order-view {
    row-gap: 0;
    padding-top: 16px;
  }
}
.order-view-address-submit {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.order-view-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 491px;
  column-gap: 30px;
}
.order-view-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease all;
}
.order-view-button-submit {
  background: var(--black-primary);
  color: var(--white-primary);
  border: 1px solid transparent;
}
.order-view-button-submit:hover {
  background: var(--blue-primary);
}
.order-view-button-cancel {
  color: var(--black-primary);
  border: 1px solid var(--gray-light-sixdary);
}
.order-view-button-cancel:hover {
  background: var(--gray-normal-primary);
}
</style>
