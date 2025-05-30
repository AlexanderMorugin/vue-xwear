<!-- ProfileView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="profileBreadcrumbs" />
    <app-page tag="div" class="title-container">
      <AppHeading title="Личный кабинет" />
    </app-page>
    <app-page tag="main" class="container split">
      <!-- В зависимости от ширины экрана, компонент меняет свои свойства и функционал -->
      <component
        :is="!isScreenLarge ? AppLeft : AppProfileMenuMobile"
        v-if="hasChoiseBlock !== 1"
        :isProfileMenuMobileOpen="isProfileMenuMobileOpen"
        @closeProfileMenu="closeProfileMenu"
      >
        <AppProfileMenu
          @handleChoiseBlock="(item) => handleChoiseBlock(item)"
          :hasChoiseBlock="hasChoiseBlock"
        />
      </component>

      <app-right>
        <div class="profile-menu-right" v-if="hasChoiseBlock === 1">
          <AppProfileHeading title="Приветствуем, Василий!" />

          <ul class="profile-menu-right-list">
            <li v-for="item in profileMenuList.slice(1)" :key="item.id">
              <button class="profile-menu-right-item" @click="handleChoiseBlock(item)">
                <img :src="item.iconDark" :alt="item.name" class="profile-menu-right-item-icon" />
                <span class="profile-menu-right-item-text">{{ item.name }}</span>
              </button>
            </li>
          </ul>
        </div>
        <AppProfileFavorite v-if="hasChoiseBlock === 2" @openProfileMenu="openProfileMenu" />
        <AppProfileOrders v-if="hasChoiseBlock === 3" @openProfileMenu="openProfileMenu" />
        <AppProfileHistory v-if="hasChoiseBlock === 4" @openProfileMenu="openProfileMenu" />
        <AppProfileAddress v-if="hasChoiseBlock === 5" @openProfileMenu="openProfileMenu" />
        <AppProfileEdit v-if="hasChoiseBlock === 6" @openProfileMenu="openProfileMenu" />
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
import AppProfileFavorite from '@/components/profile/AppProfileFavorite.vue'
import { profileMenuList } from '@/mock/profile-menu-list'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppProfileMenu from '@/components/profile/AppProfileMenu.vue'
import AppProfileMenuMobile from '@/components/profile/AppProfileMenuMobile.vue'

import { useResizeLarge } from '@/use/useResizeLarge'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()

const hasChoiseBlock = ref(1)
const isProfileMenuMobileOpen = ref(false)

const handleChoiseBlock = (index) => {
  hasChoiseBlock.value = index.id
  isProfileMenuMobileOpen.value = false
}

const openProfileMenu = () => (isProfileMenuMobileOpen.value = true)
const closeProfileMenu = () => (isProfileMenuMobileOpen.value = false)
</script>

<style scoped>
.container-dashboard {
  padding-bottom: 80px;
}
.profile-menu-right {
  display: flex;
  flex-direction: column;
  gap: 30px;
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
