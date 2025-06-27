<template>
  <div class="logo-box">
    <AppLogo place="header" />
    <TheMenuButton
      :isToggle="isToggle"
      @toggleHeaderMobileMenuModal="toggleHeaderMobileMenuModal"
    />
  </div>
  <TheHeaderMobileMenuModal
    :isToggle="isToggle"
    @toggleHeaderMobileMenuModal="toggleHeaderMobileMenuModal"
  />
</template>

<script setup>
import { ref, watch } from 'vue'
import AppLogo from '@/components/logo/AppLogo.vue'
import TheMenuButton from '@/components/header/TheMenuButton.vue'
import TheHeaderMobileMenuModal from './TheHeaderMobileMenuModal.vue'

const isHeaderMobileMenuModalOpen = ref(false)
const isToggle = ref(false)

const toggleHeaderMobileMenuModal = () => {
  isHeaderMobileMenuModalOpen.value = !isHeaderMobileMenuModalOpen.value
  isToggle.value = !isToggle.value
}

// Останавливаем прокрутку контента под модальным окном
watch(
  () => isHeaderMobileMenuModalOpen.value,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  },
)
</script>

<style scoped>
.logo-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 85px;
}
@media (max-width: 1023px) {
  .logo-box {
    max-width: 160px;
  }
}
@media (max-width: 767px) {
  .logo-box {
    display: grid;
    grid-template-columns: 1fr 1fr 84px;
    grid-template-areas: 'button logo';
  }
}
</style>
