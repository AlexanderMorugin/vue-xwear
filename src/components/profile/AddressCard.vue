<template>
  <div class="address-card">
    <p class="address-card-owner-address">
      {{ props.address.postIndex }}, {{ props.address.country }}, р-н {{ props.address.region }},
      г.{{ props.address.city }}, улица {{ props.address.street }}, д.{{ props.address.building }},
      кв.{{ props.address.flat }}
    </p>
    <div class="address-card-badge-top">Адрес доставки #{{ props.address.id }}</div>
    <div class="address-card-badge-bottom">
      <button class="address-card-badge-bottom-button" @click="openEditAddressModal">
        <img src="/icons/icon-pencil-dark.png" alt="Иконка редактирования" />
        <span class="address-card-badge-bottom-button-text">Редактировать</span>
      </button>
      <button class="address-card-badge-bottom-button" @click="emit('deleteAddress')">
        <img src="/icons/icon-delete-address.png" alt="Иконка удаления" />
        <span class="address-card-badge-bottom-button-text">Удалить</span>
      </button>
    </div>

    <AppEditAddressModal
      v-if="isEditAddressModal"
      @closeEditAddressModal="closeEditAddressModal"
      :address="props.address"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppEditAddressModal from './AppEditAddressModal.vue'
// import { useUserStore } from '@/stores/user-store'

const emit = defineEmits(['deleteAddress'])
const props = defineProps(['address'])

// const userStore = useUserStore()

const isEditAddressModal = ref(false)

const openEditAddressModal = () => (isEditAddressModal.value = true)
const closeEditAddressModal = () => (isEditAddressModal.value = false)
</script>

<style scoped>
.address-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 491px;
  height: 100%;
  border-radius: 5px;
  border: 1px solid var(--white-sixdary);
  padding: 60px 35px;
  overflow: hidden;
}
.address-card-owner-name {
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: var(--black-primary);
}
.address-card-owner-address {
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: var(--gray-normal-fivedary);
  padding-top: 24px;
}
.address-card-text-box {
  display: flex;
  flex-direction: column;
  padding-top: 14px;
}
.address-card-text-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: var(--gray-normal-sixdary);
}
.address-card-text {
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: var(--gray-normal-fivedary);
}
.address-card-badge-top {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white-sevendary);
  border-left: 1px solid var(--white-sixdary);
  border-bottom: 1px solid var(--white-sixdary);
  border-bottom-left-radius: 5px;
  font-weight: 800;
  font-size: 11px;
  line-height: 23px;
  text-align: center;
  text-transform: uppercase;
  color: var(--black-thirdary);
  padding: 13px 29px;
}
.address-card-badge-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 27px;
  border-right: 1px solid var(--white-sixdary);
  border-top: 1px solid var(--white-sixdary);
  border-top-right-radius: 5px;
  padding: 13px 34px;
}
@media (max-width: 389px) {
  .address-card-badge-bottom {
    padding-left: 20px;
    padding-right: 20px;
  }
}
.address-card-badge-bottom-button {
  display: flex;
  align-items: center;
  gap: 9px;
  width: fit-content;
  cursor: pointer;
}
.address-card-badge-bottom-button-text {
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: var(--black-thirdary);
  transition: 0.3s ease all;
}
.address-card-badge-bottom-button:hover .address-card-badge-bottom-button-text {
  color: var(--blue-primary);
}
</style>
