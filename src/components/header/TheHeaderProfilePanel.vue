<template>
  <div class="profilePanel">
    <ul class="list">
      <li v-for="item in icons()" :key="item.path" class="list-item">
        <button @click="handleClickIcon(item)" class="list-item-button">
          <img :src="item.icon" :alt="item.name" />
        </button>
      </li>
    </ul>

    <div v-if="!isScreenMedium && cartStore.totalCartSum" class="sum">
      {{ currencyFormater(cartStore.totalCartSum) }}
    </div>
    <TheHeaderCartCount
      v-if="cartStore.totalCountCartItems"
      :amount="cartStore.totalCountCartItems"
    />
  </div>
  <AppProfileModal v-if="isLoginModal" @closeProfileModal="closeProfileModal" />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TheHeaderCartCount from './TheHeaderCartCount.vue'
import { useResizeMedium } from '@/use/useResizeMedium'
import { iconsMobile, iconsDesktop } from '@/mock/header-profile-icons'
import AppProfileModal from '@/components/profile/AppProfileModal.vue'
import { useCartStore } from '@/stores/cart-store'
import { useUserStore } from '@/stores/user-store'
import { currencyFormater } from '@/utils/currency-formater'

const cartStore = useCartStore()
const userStore = useUserStore()
const { isScreenMedium } = useResizeMedium()
const router = useRouter()
const isLoginModal = ref(false)

const handleClickIcon = (args) => {
  if (args.name === 'Профиль' && !userStore.user.id) {
    isLoginModal.value = true
  } else {
    router.push(args.path)
  }
}

const closeProfileModal = () => (isLoginModal.value = false)

const icons = () => {
  if (isScreenMedium.value) {
    return iconsMobile
  } else {
    return iconsDesktop
  }
}
</script>

<style scoped>
.profilePanel {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 280px;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  /* max-width: 104px; */
  max-width: 52px;
}
/* @media (max-width: 767px) {
  .list {
    max-width: 52px;
  }
} */
.list-item {
  height: 20px;
}
.list-item-button {
  cursor: pointer;
}
.sum {
  font-size: 13px;
  line-height: 13px;
  font-weight: 700;
  color: var(--color-sum-header);
  padding-left: 6px;
  padding-right: 6px;
}
</style>
