<!-- CartView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="cartBreadcrumbs" />
    <app-page tag="main" class="container">
      <AppHeading title="Корзина товаров" fromPage="cartPage" />

      <!-- Список товаров в корзине -->
      <AppProductList
        v-if="cartStore.cartItems.length"
        :products="cartStore.cartItems"
        fromPage="cartPage"
        :cartStore="cartStore"
      />

      <!-- Если корзина пуста, показываем этот блок -->
      <AppCartIsEmpty v-else />
    </app-page>
  </div>
</template>

<script setup>
import {
  ref,
  // onMounted
} from 'vue'
// import axios from 'axios'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppCartIsEmpty from '@/components/cart/AppCartIsEmpty.vue'
import AppProductList from '@/components/product/AppProductList.vue'
import AppLoader from '@/components/AppLoader.vue'
import { cartBreadcrumbs } from '@/components/breadcrumbs/breadcrumbs-pages/cart-breadcrumbs'
import { useCartStore } from '@/stores/cart-store'

const cartStore = useCartStore()

const isLoading = ref(false)
// const favoriteProducts = ref([])

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
