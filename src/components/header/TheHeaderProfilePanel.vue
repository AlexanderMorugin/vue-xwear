<template>
  <div class="profilePanel">
    <ul class="list">
      <li v-for="item in icons()" :key="item.path" class="list-item">
        <!-- <router-link :to="item.path"> -->
        <button @click="handleClickIcon(item)" class="list-item-button">
          <img :src="item.icon" :alt="item.name" />
        </button>
        <!-- </router-link> -->
      </li>
    </ul>

    <div v-if="!isScreenMedium" class="sum">111 899 P</div>
    <TheHeaderCartCount />
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

const { isScreenMedium } = useResizeMedium()
const router = useRouter()
const isLoginModal = ref(false)

const handleClickIcon = (args) => {
  if (args.name === 'Профиль') {
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
  max-width: 168px;
}
@media (max-width: 767px) {
  .list {
    max-width: 92px;
  }
}
.list-item {
  height: 20px;
}
.list-item-button {
  cursor: pointer;
}
/* .list-item.active {
  border-bottom: 2px solid var(--color-link-header-hover);
} */
.sum {
  font-size: 13px;
  line-height: 13px;
  font-weight: 700;
  color: var(--color-sum-header);
  padding-left: 6px;
  padding-right: 6px;
}
</style>
