<!-- OrderView -->
<template>
  <div>
    <AppBreadcrumbs :breadcrumbs="orderBreadcrumbs" />
    <app-page tag="main" class="container">
      <AppHeading title="Оформление заказа" />

      <div class="order-view">
        <AppOrderList
          :orderStore="orderStore"
          :discount="discount"
          :delivery="delivery"
          :totalSum="totalSum"
        />
        <div class="order-view-address">
          <!-- Профиль пользователя с адресом доставки -->
          <AppOrderProfileWithAddressCard
            :user="userStore.user"
            :arrayOfAddress="userStore.userAddress"
          />

          <!-- Комментарий к заказу и чекбокс правильности заказа и адреса доставки -->
          <form class="order-view-comment">
            <div class="form-field">
              <label for="commentField" class="form-label">Комментарий:</label>
              <input
                type="text"
                id="commentField"
                name="commentField"
                placeholder="Напишите нам"
                v-model="commentField"
                class="form-input"
              />
            </div>
            <div class="order-view-checkbox">
              <input
                type="checkbox"
                id="checkboxAgree"
                value="checkboxAgree"
                v-model="checkboxAgree"
                class="checkbox-input"
              />
              <label :for="item" class="order-view-checkbox-label">Подтвердите заказ.</label>
            </div>
          </form>

          <!-- Кнопки Подтверждения или отмены заказа -->
          <div class="order-view-buttons">
            <button
              :class="[
                'order-view-button',
                {
                  'order-view-button-submit':
                    userStore.user.firstName &&
                    userStore.user.lastName &&
                    userStore.user.phone &&
                    orderStore.orderAddress &&
                    checkboxAgree,
                },
              ]"
              @click="submitOrder"
            >
              <AppButtonLoader v-if="isLoading" />
              <span v-else>Оформить</span>
            </button>
            <button class="order-view-button order-view-button-cancel" @click="cancelOrder">
              Отменить
            </button>
          </div>
        </div>
      </div>

      <!-- Модалка "Благодарим за заказ" -->
      <AppOrderSubmitModal v-if="isSubmitModalOpen" @closeSubmitModal="closeSubmitModal" />
    </app-page>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppOrderList from '@/components/order/AppOrderList.vue'
import { orderBreadcrumbs } from '@/components/breadcrumbs/breadcrumbs-pages/order-breadcrumbs'
import AppOrderProfileWithAddressCard from '@/components/order/AppOrderProfileWithAddressCard.vue'
import { useOrderStore } from '@/stores/order-store'
import { useCartStore } from '@/stores/cart-store'
import { useUserStore } from '@/stores/user-store'
import { PATH_CART } from '@/mock/routes'
import AppOrderSubmitModal from '@/components/order/AppOrderSubmitModal.vue'
import AppButtonLoader from '@/components/loader/AppButtonLoader.vue'

const orderStore = useOrderStore()
const cartStore = useCartStore()
const userStore = useUserStore()
const router = useRouter()
const db = getFirestore()

const isLoading = ref(false)
const isSubmitModalOpen = ref(false)
const checkboxAgree = ref(false)
const commentField = ref(null)

const discount = ref(20)
const delivery = ref(500)

const totalSum = computed(() => {
  const discountSum = (orderStore.totalOrderSum * discount.value) / 100
  return orderStore.totalOrderSum - discountSum + delivery.value
})

const closeSubmitModal = () => (isSubmitModalOpen.value = false)

onMounted(async () => {
  await userStore.setListOfAddressFromServer()
})

const submitOrder = async () => {
  isLoading.value = true

  const payload = {
    id: (await orderStore.setOrderId()).toString(),
    date: new Date().toLocaleString(),
    items: orderStore.orderItems,
    discount: discount.value,
    delivery: delivery.value,
    totalSum: totalSum.value,
    customer: `${userStore.user.firstName} ${userStore.user.lastName}`,
    address: orderStore.orderAddress,
    phone: userStore.user.phone,
    email: userStore.user.email,
    comment: commentField.value,
  }

  await setDoc(doc(db, `users/${userStore.user.id}/orders`, payload.id), payload).then(() => {
    isSubmitModalOpen.value = true
    orderStore.deleteAllItems()
  })

  isLoading.value = false
}

const cancelOrder = () => {
  if (!cartStore.cartItems.length) {
    router.push('/')
  } else {
    router.push(PATH_CART)
  }

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
.order-view-address {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.order-view-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  column-gap: 30px;
}
@media (max-width: 767px) {
  .order-view-buttons {
    column-gap: 10px;
  }
}
.order-view-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 5px;
  border: 1px solid var(--gray-light-sixdary);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  transition: 0.3s ease all;
}
.order-view-button-submit {
  background: var(--black-primary);
  color: var(--white-primary);
  border: 1px solid transparent;
  cursor: pointer;
}
.order-view-button-submit:hover {
  background: var(--blue-primary);
}
.order-view-button-cancel {
  color: var(--black-primary);
  border: 1px solid var(--gray-light-sixdary);
  cursor: pointer;
}
.order-view-button-cancel:hover {
  background: var(--gray-normal-primary);
}
.order-view-checkbox {
  display: flex;
  gap: 20px;
  padding-top: 20px;
}
.order-view-checkbox-label {
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: var(--black-fourdary);
}
</style>
