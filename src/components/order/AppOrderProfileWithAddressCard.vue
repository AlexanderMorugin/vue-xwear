<template>
  <div class="order-profile-address-card">
    <!-- Кнопка открытия модалки добавления адреса -->
    <button class="address-card-badge-top" @click="openAddAddressModal">Добавить адрес</button>

    <!-- Если на сервере есть имя пользователя, то показываем его -->
    <h3
      v-if="props.user.firstName && props.user.lastName && props.user.phone"
      class="order-profile-address-card-owner-name"
    >
      {{ props.user.firstName }} {{ props.user.lastName }}
    </h3>

    <!-- Иначе показываем кнопку открытия модалки, где пользователь вводит свои данные и далее они отправляются на сервер -->
    <button v-else class="order-profile-address-add-name" @click="openEditProfileModal">
      Добавьте ваше имя и телефон
    </button>

    <!-- Текст по поводу адресов доставки, если их несколько -->
    <p v-if="props.arrayOfAddress.length > 1" class="order-profile-address-card-choice-address">
      Выберите один из {{ props.arrayOfAddress.length }} адресов доставки.
    </p>
    <!-- Текст по поводу адресов доставки, если он один -->
    <p v-if="props.arrayOfAddress.length === 1" class="order-profile-address-card-choice-address">
      Подтвердите адрес доставки.
    </p>

    <!-- Текст если адресов нет совсем -->
    <p v-if="!props.arrayOfAddress.length" class="order-profile-address-card-choice-address">
      Добавьте адрес доставки. Кликайте кнопку вверху справа.
    </p>

    <!-- Список адресов доставки, на выбор по радио кнопкам -->
    <ul>
      <li
        v-for="item in props.arrayOfAddress"
        :key="item.id"
        class="order-profile-address-card-current"
      >
        <input
          type="radio"
          :id="item.id"
          name="address"
          :value="item"
          v-model="address"
          class="checkbox-input"
          @change="orderStore.setOrderAdress(address)"
        />
        <label :for="item.id" class="order-view-checkbox-label"
          >{{ item.postIndex }}, {{ item.country }}, р-н {{ item.region }}, г.{{ item.city }}, улица
          {{ item.street }}, д.{{ item.building }}, кв.{{ item.flat }}</label
        >
      </li>
    </ul>

    <!-- Телефон и почта пользователя -->
    <div v-if="props.user.phone" class="address-card-text-box">
      <span class="address-card-text-title">Телефон</span>
      <span class="address-card-text">{{ props.user.phone }}</span>
    </div>
    <div class="address-card-text-box">
      <span class="address-card-text-title">Email</span>
      <span class="address-card-text">{{ props.user.email }}</span>
    </div>

    <!-- Если есть адрес доставки, показываем кнопку открытия модалки, для редактирования адреса -->
    <div v-if="address" class="address-card-badge-bottom">
      <button class="address-card-badge-bottom-button" @click="openEditAddressModal">
        <img src="/icons/icon-pencil-dark.png" alt="Иконка редактирования" />
        <span class="address-card-badge-bottom-button-text">Редактировать адрес</span>
      </button>
    </div>
  </div>

  <!-- Модалка редактирования адреса -->
  <AppEditAddressModal
    v-if="isEditAddressModalOpen"
    @closeEditAddressModal="closeEditAddressModal"
    :address="address"
  />

  <!-- Модалка редактирования профиля, в случае того если в заказе не хватает профиля пользователя -->
  <AppOrderProfileModal
    v-if="isEditProfileModalOpen"
    @closeEditProfileModal="closeEditProfileModal"
  />

  <!-- Модалка добавления адреса -->
  <AppEditAddressModal
    v-if="isAddingAddressModalOpen"
    @closeEditAddressModal="closeAddAddressModal"
  />
</template>

<script setup>
import { ref } from 'vue'
import AppEditAddressModal from '@/components/profile/AppEditAddressModal.vue'
import AppOrderProfileModal from './AppOrderProfileModal.vue'
import { useOrderStore } from '@/stores/order-store'

const props = defineProps(['user', 'arrayOfAddress'])

const orderStore = useOrderStore()

const address = ref(null)
const isEditAddressModalOpen = ref(false)
const isEditProfileModalOpen = ref(false)
const isAddingAddressModalOpen = ref(false)

const openEditAddressModal = () => (isEditAddressModalOpen.value = true)
const closeEditAddressModal = () => (isEditAddressModalOpen.value = false)

const openEditProfileModal = () => (isEditProfileModalOpen.value = true)
const closeEditProfileModal = () => (isEditProfileModalOpen.value = false)

const openAddAddressModal = () => (isAddingAddressModalOpen.value = true)
const closeAddAddressModal = () => (isAddingAddressModalOpen.value = false)
</script>

<style scoped>
.order-profile-address-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid var(--white-sixdary);
  padding: 60px 35px;
  overflow: hidden;
}
@media (max-width: 767px) {
  .order-profile-address-card {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.order-profile-address-card-owner-name {
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: var(--black-primary);
}
.order-profile-address-card-choice-address {
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: var(--gray-normal-sixdary);
  padding-top: 20px;
}
.order-profile-address-card-current {
  display: grid;
  grid-template-columns: 23px 1fr;
  gap: 20px;
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
  transition: 0.3s ease all;
  cursor: pointer;
}
.address-card-badge-top:hover {
  background: var(--blue-primary);
  color: var(--black-secondary);
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
.order-profile-address-add-name {
  width: fit-content;
  border-bottom: 1px dashed var(--blue-primary);
  font-size: 14px;
  font-weight: 600;
  color: var(--blue-secondary);
  padding-bottom: 8px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.order-profile-address-add-name:hover {
  border-bottom: 1px dashed var(--green-primary);
  color: var(--green-secondary);
}
</style>
