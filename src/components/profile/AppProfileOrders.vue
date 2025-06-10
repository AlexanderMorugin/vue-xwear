<template>
  <AppLoader v-if="isLoading" />

  <div v-else>
    <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
    <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

    <AppProfileHeading title="Заказы в пути" />
    <!-- <ul class="profile-orders">
    <li>
      <AppOrderCard />
    </li>
  </ul> -->

    {{ orders }}
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
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
// import AppOrderCard from '@/components/order/AppOrderCard.vue'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useUserStore } from '@/stores/user-store'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()
const db = getFirestore()
const userStore = useUserStore()

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])

const isLoading = ref(false)
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

  // return listDocs
}

// onMounted(async () => {
//   const getData = query(collection(db, `users/${userStore.user.id}/orders`))

//   const listDocs = await getDocs(getData)

//   console.log(listDocs.docs.map((doc) => doc.data()))
// })

onMounted(async () => {
  const orderList = await getOrders()

  orders.value = [...orderList]

  console.log(orders.value)
})
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
</style>
