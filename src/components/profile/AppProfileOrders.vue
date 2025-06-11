<template>
  <AppLoader v-if="isLoading" />

  <div v-else>
    <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
    <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

    <AppProfileHeading title="Заказы в пути" />
    <ul v-if="orders.length" class="profile-orders">
      <li v-for="order in orders" :key="order.id">
        <AppProfileServerOrder
          :order="order"
          @openServerOrderDeleteModal="openServerOrderDeleteModal"
        />

        <!-- Модалка удаления -->
        <AppOrderDeleteModal
          v-if="isServerOrderDeleteModalOpen"
          title="Удалить заказ из базы данных?"
          @closeOrderDeleteModal="closeServerOrderDeleteModal"
          @deleteOrderItem="deleteServerOrderItem(order.id)"
        />
      </li>
    </ul>

    <div v-else class="profile-orders-empty">Заказов нет. Возможно они были удалены...</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import AppProfileServerOrder from './AppProfileServerOrder.vue'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useUserStore } from '@/stores/user-store'
import AppOrderDeleteModal from '@/components/order/AppOrderDeleteModal.vue'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()
const db = getFirestore()
const userStore = useUserStore()

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])

const isLoading = ref(false)
const isServerOrderDeleteModalOpen = ref(false)
const orders = ref([])

const getOrders = async () => {
  isLoading.value = true
  const getData = query(
    collection(db, `users/${userStore.user.id}/orders`),
    orderBy('date', 'desc'),
  )
  const listDocs = await getDocs(getData)
  isLoading.value = false
  return listDocs.docs.map((doc) => doc.data())
}

onMounted(async () => {
  const orderList = await getOrders()
  orders.value = [...orderList]
})

const openServerOrderDeleteModal = () => (isServerOrderDeleteModalOpen.value = true)
const closeServerOrderDeleteModal = () => (isServerOrderDeleteModalOpen.value = false)

const deleteServerOrderItem = async (id) => {
  closeServerOrderDeleteModal()
  isLoading.value = true
  await deleteDoc(doc(db, `users/${userStore.user.id}/orders`, id))
  const orderList = await getOrders()
  orders.value = [...orderList]
  isLoading.value = false
}
</script>

<style scoped>
.profile-orders {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 30px;
}
@media (max-width: 767px) {
  .profile-orders {
    padding-top: 20px;
  }
}
.profile-orders-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  line-height: 28px;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-align: center;
  color: var(--gray-normal-thirdary);
  padding-top: 60px;
}
</style>
