<template>
  <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
  <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

  <AppProfileHeading title="Заказы в пути" />
  <ul class="profile-orders">
    <li>
      <OrderCard />
    </li>
  </ul>
</template>

<script setup>
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import OrderCard from '@/components/profile/OrderCard.vue'
import { useResizeLarge } from '@/use/useResizeLarge'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openProfileMenu'])
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
