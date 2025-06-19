<template>
  <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
  <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

  <AppProfileHeading title="Избранные товары" />

  <!-- <AppLoader v-if="isLoading" /> -->

  <!-- <div v-else> -->
  <AppProductList
    v-if="userStore.userFavorite"
    :products="userStore.userFavorite"
    fromPage="profileFavorite"
  />
  <!-- :products="favoriteProducts" -->
  <AppFavoriteIsEmpty v-else />
  <!-- </div> -->

  <!-- {{ userStore.userFavorite }} -->
</template>

<script setup>
// import {
//   ref,
//   // onMounted,
//   // computed,
// } from 'vue'
// import { getFirestore, collection, query, getDocs } from 'firebase/firestore'
// import axios from 'axios'
import AppFavoriteIsEmpty from '@/components/favorite/AppFavoriteIsEmpty.vue'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import AppProductList from '@/components/product/AppProductList.vue'
// import AppLoader from '@/components/loader/AppLoader.vue'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useUserStore } from '@/stores/user-store'

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()

// const db = getFirestore()
const userStore = useUserStore()

// const isLoading = ref(false)
// const favoriteFromServer = ref([])
// const favoriteFromServer = computed(() => userStore.userFavorite)

// const getFavorite = async () => {
//   isLoading.value = true
//   const getData = query(collection(db, `users/${userStore.user.id}/favorite`))
//   const listDocs = await getDocs(getData)
//   isLoading.value = false
//   // userStore.addUserFavorite(listDocs.docs.map((doc) => doc.data()))
//   return listDocs.docs.map((doc) => doc.data())
// }

// onMounted(async () => {
//   // await getFavorite()
//   const favoriteList = await getFavorite()
//   // console.log(favoriteList)
//   userStore.addUserFavorite(favoriteList)
//   // return (favoriteFromServer.value = [...favoriteList])
// })

// onMounted(async () => {
//   try {
//     isLoading.value = true

//     const { data } = await axios.get('https://vue-xwear-default-rtdb.firebaseio.com/shoes.json')

//     if (data) {
//       favoriteProducts.value = Object.keys(data)
//         .map((key) => {
//           return {
//             id: key,
//             ...data[key],
//           }
//         })
//         .filter((item) => item.isFavorite)
//     }

//     isLoading.value = false
//   } catch (error) {
//     console.log(error)
//   }
// })
</script>
