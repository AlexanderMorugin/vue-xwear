<template>
  <div class="profilePanel">
    <ul class="list">
      <li v-for="item in icons()" :key="item.path" class="list-item">
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
import { iconsMobile, iconsDesktop } from '../../mock/header-profile-icons'

const { isScreenMedium } = useResizeMedium()

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

.sum {
  font-size: 13px;
  line-height: 13px;
  font-weight: 700;
  color: var(--color-sum-header);
  padding-left: 6px;
  padding-right: 6px;
}
</style>
