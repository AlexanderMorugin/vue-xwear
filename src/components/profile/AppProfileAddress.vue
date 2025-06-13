<template>
  <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
  <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

  <AppProfileHeading title="Мои адреса" />
  <ul v-if="userStore.userAddress.length" class="profile-address">
    <li v-for="address in userStore.userAddress" :key="address.id">
      <AddressCard :address="address" />
    </li>
  </ul>

  <div v-else class="profile-address-empty">Нет ни одного адреса...</div>

  <button class="add-address-block" v-if="!isAddAddressOpen" @click="openFormAddAddress">
    <div class="add-address-button">
      <div class="add-address-button-circle">
        <img src="/icons/icon-add-address.png" alt="Иконка добавления" />
      </div>
      <span class="add-address-button-text">Добавить новый</span>
    </div>
  </button>

  <FormAddAddress v-if="isAddAddressOpen" @closeAddressForm="closeAddressForm" />
</template>

<script setup>
import { ref } from 'vue'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AddressCard from '@/components/profile/AddressCard.vue'
import FormAddAddress from '@/components/profile/FormAddAddress.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useUserStore } from '@/stores/user-store'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()
const userStore = useUserStore()

const isAddAddressOpen = ref(false)

const openFormAddAddress = () => (isAddAddressOpen.value = true)
const closeAddressForm = () => (isAddAddressOpen.value = false)
</script>

<style scoped>
.profile-address {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 80px;
}
@media (max-width: 767px) {
  .profile-address {
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: 20px;
    padding-bottom: 40px;
  }
}
.add-address-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px dashed var(--white-sixdary);
  border-radius: 5px;
  padding: 29px;
  cursor: pointer;
  transition: 0.5s ease all;
}
.add-address-block:hover {
  background: var(--white-fivedary);
}
.add-address-button {
  display: flex;
  align-items: center;
  gap: 17px;
  width: fit-content;
}
.add-address-button-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 62px;
  background: var(--white-sevendary);
  border-radius: 50%;
}
.add-address-button-text {
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  color: var(--gray-normal-sevendary);
  transition: 0.3s ease all;
}
.add-address-block:hover .add-address-button-text {
  color: var(--blue-primary);
}
.profile-address-empty {
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
  padding-bottom: 60px;
}
</style>
