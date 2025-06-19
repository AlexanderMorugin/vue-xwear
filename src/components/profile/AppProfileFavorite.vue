<template>
  <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
  <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

  <AppProfileHeading title="Избранные товары" />

  <AppProductList
    v-if="userStore.userFavorite.length"
    :products="userStore.userFavorite"
    fromPage="profileFavorite"
  />

  <AppFavoriteIsEmpty v-else />
</template>

<script setup>
import AppFavoriteIsEmpty from '@/components/favorite/AppFavoriteIsEmpty.vue'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import AppProductList from '@/components/product/AppProductList.vue'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useUserStore } from '@/stores/user-store'

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()

// const db = getFirestore()
const userStore = useUserStore()
</script>
