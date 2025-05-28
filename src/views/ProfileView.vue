<!-- ProfileView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <app-page-dashboard>
      <AppHeading title="Личный кабинет" />
    </app-page-dashboard>
    <app-page-dashboard class="container container-dashboard">
      <app-left>
        <AppProfileMenu />
      </app-left>
      <app-right><AppProfile /></app-right>
    </app-page-dashboard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppPageDashboard from '@/layouts/AppPageDashboard.vue'
import AppLeft from '@/layouts/AppLeft.vue'
import AppRight from '@/layouts/AppRight.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppProfileMenu from '@/components/profile/AppProfileMenu.vue'
import AppProfile from '@/components/profile/AppProfile.vue'
import { PATH_PROFILE } from '../mock/routes'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Личный кабинет',
    path: PATH_PROFILE,
    content: 'last',
  },
])
</script>

<style scoped>
.container-dashboard {
  padding-bottom: 80px;
}
</style>
