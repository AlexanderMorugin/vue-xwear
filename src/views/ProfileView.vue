<!-- ProfileView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="profileBreadcrumbs" />
    <app-page tag="div" class="title-container">
      <AppHeading title="Личный кабинет" />
    </app-page>
    <app-page tag="main" class="container split">
      <app-left v-if="hasChoiseBlock !== 1">
        <ul class="profile-menu">
          <li v-for="item in profileMenuList" :key="item.id">
            <button class="profile-menu-item" @click="handleChoiseBlock(item)">
              <img
                :src="setShowImage(item)"
                :alt="item.name"
                :class="[
                  'profile-menu-item-icon',
                  { 'profile-menu-item-icon-slim': item.name === 'Адреса' },
                ]"
              />
              <span class="profile-menu-item-text">{{ item.name }}</span>
            </button>
          </li>
        </ul>
      </app-left>
      <app-right>
        <div class="profile-menu-right" v-if="hasChoiseBlock === 1">
          <h2 class="profile-menu-right-title">Приветствуем, Василий!</h2>
          <ul class="profile-menu-right-list">
            <li v-for="item in profileMenuList.slice(1)" :key="item.id">
              <button class="profile-menu-right-item" @click="handleChoiseBlock(item)">
                <img :src="item.iconDark" :alt="item.name" class="profile-menu-right-item-icon" />
                <span class="profile-menu-right-item-text">{{ item.name }}</span>
              </button>
            </li>
          </ul>
        </div>
        <AppProfileOrders v-if="hasChoiseBlock === 3" />
        <AppProfileHistory v-if="hasChoiseBlock === 4" />
        <AppProfileAddress v-if="hasChoiseBlock === 5" />
        <AppProfileEdit v-if="hasChoiseBlock === 6" />

        <!-- <AppProfileAddressEdit v-if="hasChoiseBlock === 6" /> -->
        <!-- <AppProfilePassword v-if="hasChoiseBlock === 7" /> -->
      </app-right>
    </app-page>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppPage from '@/layouts/AppPage.vue'
import AppLeft from '@/layouts/AppLeft.vue'
import AppRight from '@/layouts/AppRight.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import { profileBreadcrumbs } from '@/components/breadcrumbs/breadcrumbs-pages/profile-breadcrumbs'
import AppHeading from '@/components/AppHeading.vue'
import AppProfileEdit from '@/components/profile/AppProfileEdit.vue'
import AppProfileHistory from '@/components/profile/AppProfileHistory.vue'
import AppProfileOrders from '@/components/profile/AppProfileOrders.vue'
import AppProfileAddress from '@/components/profile/AppProfileAddress.vue'
import AppProfileAddressEdit from '@/components/profile/AppProfileAddressEdit.vue'
import AppProfilePassword from '@/components/profile/AppProfilePassword.vue'
import { profileMenuList } from '@/mock/profile-menu-list'

const hasChoiseBlock = ref(1)

const handleChoiseBlock = (index) => {
  hasChoiseBlock.value = index.id
}

const setShowImage = (index) => {
  let image = index.icon

  if (hasChoiseBlock.value === index.id) {
    image = index.iconDark
  }

  return image
}
</script>

<style scoped>
.container-dashboard {
  padding-bottom: 80px;
}
.profile-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 21px;
  width: 318px;
  border-radius: 5px;
  border: 1px solid var(--white-sixdary);
  padding: 28px 40px 22px 40px;
}
.profile-menu-item {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 21px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: 0.3s ease all;
}
.profile-menu-item:hover {
  border-bottom: 1px solid var(--blue-primary);
}
.profile-menu-item-icon {
  width: 19px;
}
.profile-menu-item-icon-slim {
  width: 17px;
}
.profile-menu-item-text {
  font-weight: 500;
  font-size: 15px;
  line-height: 42px;
  color: var(--black-primary);
  transition: 0.2s ease all;
}
.profile-menu-item:hover .profile-menu-item-text {
  color: var(--blue-primary);
}
.profile-menu-right {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.profile-menu-right-title {
  font-weight: 700;
  font-size: 23px;
  line-height: 30px;
  color: var(--black-thirdary);
}
.profile-menu-right-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
@media (max-width: 1023px) {
  .profile-menu-right-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 767px) {
  .profile-menu-right-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
.profile-menu-right-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--gray-sixdary);
  padding: 33px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.profile-menu-right-item:hover {
  border: 1px solid var(--blue-primary);
}
@media (max-width: 767px) {
  .profile-menu-right-item {
    gap: 10px;
    padding: 16px;
  }
}
.profile-menu-right-item-icon {
  height: 30px;
}
@media (max-width: 767px) {
  .profile-menu-right-item-icon {
    height: 23px;
  }
}
.profile-menu-right-item-text {
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  vertical-align: middle;
  color: var(--black-primary);
  transition: 0.2s ease all;
}
</style>
