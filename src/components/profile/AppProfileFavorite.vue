<template>
  <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
  <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

  <AppProfileHeading title="Избранные товары" />

  <AppLoader v-if="isLoading" />

  <div v-else>
    <AppProductList
      v-if="favoriteProducts.length"
      :products="favoriteProducts"
      fromPage="profileFavorite"
    />
    <AppFavoriteIsEmpty v-else />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AppFavoriteIsEmpty from '@/components/favorite/AppFavoriteIsEmpty.vue'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import AppProductList from '@/components/product/AppProductList.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import { useResizeLarge } from '@/use/useResizeLarge'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])

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
