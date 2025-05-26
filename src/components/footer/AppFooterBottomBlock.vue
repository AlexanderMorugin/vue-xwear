<template>
  <div class="footer-bottom-block">
    <AppLogo v-if="!isScreenMedium" place="footer" />
    <AppFooterPrivacy v-if="!isScreenMedium" />
    <AppDeveloperLogo v-if="!isScreenMedium" />
  </div>
</template>

<script setup>
import AppLogo from '@/components/logo/AppLogo.vue'
import AppFooterPrivacy from './AppFooterPrivacy.vue'
import AppDeveloperLogo from '@/components/logo/AppDeveloperLogo.vue'
</script>

<style scoped>
.footer-bottom-block {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  padding-top: 31px;
}
</style>
