<!-- CartView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <app-page tag="main" class="container">
      <AppHeading title="Корзина товаров" fromPage="cartPage" />
      <AppProductList
        v-if="favoriteProducts.length"
        :products="favoriteProducts"
        fromPage="cartPage"
      />
      <AppCartIsEmpty v-else />
    </app-page>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AppPage from '@/layouts/AppPage.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppCartIsEmpty from '@/components/cart/AppCartIsEmpty.vue'
import AppProductList from '@/components/product/AppProductList.vue'
import AppLoader from '@/components/AppLoader.vue'
import { PATH_CART } from '@/mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Корзина',
    path: PATH_CART,
    content: 'last',
  },
])

const isLoading = ref(false)
const favoriteProducts = ref([])

onMounted(async () => {
  try {
    isLoading.value = true

    const { data } = await axios.get('https://vue-xwear-default-rtdb.firebaseio.com/shoes.json')

    if (data) {
      favoriteProducts.value = Object.keys(data)
        .map((key) => {
          return {
            id: key,
            ...data[key],
          }
        })
        .filter((item) => item.isFavorite)
    }

    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
})
</script>
