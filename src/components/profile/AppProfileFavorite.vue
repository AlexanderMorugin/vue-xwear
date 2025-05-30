<template>
  <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
  <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

  <AppProfileHeading title="Избранные товары" />
  <AppFavoriteIsEmpty />
</template>

<script setup>
import AppFavoriteIsEmpty from '@/components/favorite/AppFavoriteIsEmpty.vue'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import { useResizeLarge } from '@/use/useResizeLarge'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])
</script>
