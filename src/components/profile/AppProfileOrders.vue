<template>
  <AppLoader v-if="orderStore.isLoading" />

  <div v-else>
    <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
    <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

    <AppProfileHeading title="Заказы в пути" />
    <ul v-if="orderStore.ordersFromServer.length" class="profile-orders">
      <li v-for="order in orderStore.ordersFromServer" :key="order.id">
        <AppProfileServerOrder
          :order="order"
          @openServerOrderDeleteModal="openServerOrderDeleteModal"
        />

        <!-- Модалка удаления -->
        <AppOrderDeleteModal
          v-if="isServerOrderDeleteModalOpen"
          title="Удалить заказ из базы данных?"
          @closeOrderDeleteModal="closeServerOrderDeleteModal"
          @deleteOrder="deleteOrder(order.id)"
        />
      </li>
    </ul>

    <div v-else class="profile-orders-empty">Заказов нет или они были удалены...</div>
  </div>

  <AppToast v-if="isToastActive" :title="`Заказ был удалён из базы`" @closeToast="closeToast" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import AppProfileServerOrder from './AppProfileServerOrder.vue'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useOrderStore } from '@/stores/order-store'
import AppOrderDeleteModal from '@/components/order/AppOrderDeleteModal.vue'
import AppToast from '@/components/toast/AppToast.vue'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()
const orderStore = useOrderStore()

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])

const isServerOrderDeleteModalOpen = ref(false)
const isToastActive = ref(false)

const closeToast = () => (isToastActive.value = false)

onMounted(async () => {
  await orderStore.setOrdersFromServerList()
})

const openServerOrderDeleteModal = () => (isServerOrderDeleteModalOpen.value = true)
const closeServerOrderDeleteModal = () => (isServerOrderDeleteModalOpen.value = false)

const deleteOrder = async (id) => {
  await orderStore.deleteOrderFromServer(id)

  closeServerOrderDeleteModal()
  isToastActive.value = true

  setTimeout(() => {
    isToastActive.value = false
  }, 5000)
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
