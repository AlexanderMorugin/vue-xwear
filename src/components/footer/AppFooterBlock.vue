<template>
  <div class="footer-block">
    <div class="footer-block-top">
      <p class="footer-block-title">{{ props.title }}</p>
      <ul v-if="props.status === 'catalog' || 'info'" class="footer-block-list">
        <li v-for="item in links" :key="item.name">
          <router-link :to="item.path" class="footer-block-link">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <AppLogo v-if="props.status === 'catalog' && !isScreenLarge" place="footer" />
    <AppDeveloperLogo v-if="props.status === 'info'" />
  </div>
</template>

<script setup>
import AppLogo from '@/components/logo/AppLogo.vue'
import AppDeveloperLogo from '@/components/logo/AppDeveloperLogo.vue'
import { useResizeLarge } from '@/use/useResizeLarge'

const props = defineProps(['title', 'links', 'status'])

const { isScreenLarge } = useResizeLarge()
</script>

<style scoped>
.footer-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 275px;
  border: 1px solid orange;
}
.footer-block-title {
  font-weight: 700;
  font-size: 15px;
  line-height: 28px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--white-primary);
}
.footer-block-list {
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-top: 9px;
}
.footer-block-link {
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  color: var(--gray-sixdary);
  transition: 0.3s ease all;
}
.footer-block-link:hover {
  color: var(--white-primary);
}
</style>
