<template>
  <div class="profilePanel">
    <ul class="list">
      <li v-for="item in icons" :key="item.path" class="list-item">
        <router-link :to="item.path">
          <img :src="item.icon" :alt="item.name" />
        </router-link>
      </li>
    </ul>
    <div v-if="!isScreenMedium" class="sum">111 899 P</div>
    <TheHeaderCartCount />
  </div>
</template>

<script setup>
import TheHeaderCartCount from './TheHeaderCartCount.vue'
import { useResizeMedium } from '../../use/useResizeMedium'

const { isScreenMedium } = useResizeMedium()

const icons = [
  {
    name: 'Поиск',
    path: '/search',
    icon: '/icons/icon-search.svg',
  },
  {
    name: 'Избранные',
    path: '/favorite',
    icon: '/icons/icon-star.svg',
  },
  {
    name: 'Профиль',
    path: '/profile',
    icon: '/icons/icon-profile.svg',
  },
  {
    name: 'Корзина',
    path: '/cart',
    icon: '/icons/icon-cart.svg',
  },
]
</script>

<style scoped>
.profilePanel {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 260px;
}

.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 168px;
}

.list-item {
  height: 20px;
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
