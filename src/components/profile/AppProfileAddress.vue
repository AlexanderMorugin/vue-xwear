<template>
  <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
  <AppProfileButton v-if="isScreenLarge" @openProfileMenu="$emit('openProfileMenu')" />

  <AppProfileHeading title="Мои адреса" />
  <div class="profile-address">
    <AddressCard number="1" />
    <AddressCard number="2" />
  </div>

  <div class="add-address-block" v-if="!isAddAddressOpen">
    <button class="add-address-button" @click="openFormAddAddress">
      <div class="add-address-button-circle">
        <img src="/icons/icon-add-address.png" alt="Иконка добавления" />
      </div>
      <span class="add-address-button-text">Добавить новый</span>
    </button>
  </div>

  <FormAddAddress v-if="isAddAddressOpen" @closeForm="closeForm" />
</template>

<script setup>
import { ref } from 'vue'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AddressCard from '@/components/profile/AddressCard.vue'
import FormAddAddress from '@/components/profile/FormAddAddress.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import { useResizeLarge } from '@/use/useResizeLarge'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()

const isAddAddressOpen = ref(false)

const openFormAddAddress = () => (isAddAddressOpen.value = true)
const closeForm = () => (isAddAddressOpen.value = false)
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
}
.add-address-button {
  display: flex;
  align-items: center;
  gap: 17px;
  width: fit-content;
  cursor: pointer;
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
.add-address-button:hover .add-address-button-text {
  color: var(--blue-primary);
}
</style>
