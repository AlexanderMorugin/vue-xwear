<template>
  <Teleport to="body">
    <div
      class="header-mobile-menu-modal-overlay"
      :class="{ 'header-mobile-menu-modal-overlay-active': props.isToggle }"
      @click="$emit('toggleHeaderMobileMenuModal')"
    >
      <div @click.stop class="header-mobile-menu-modal">
        <!-- Кнопка крестик -->
        <button
          class="header-mobile-menu-modal-close"
          :class="{ 'header-mobile-menu-modal-close-active': props.isToggle }"
          @click="$emit('toggleHeaderMobileMenuModal')"
        >
          <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
        </button>

        <!-- Контент модалки -->
        <ul class="header-mobile-menu-modal-content">
          <li
            v-for="link in headerNavLinks"
            :key="link.name"
            @click="$emit('toggleHeaderMobileMenuModal')"
          >
            <router-link :to="link.path" class="header-mobile-menu-modal-content-link">{{
              link.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { headerNavLinks } from '@/mock/header-nav-links'

const props = defineProps(['title', 'isToggle'])

const emit = defineEmits(['toggleHeaderMobileMenuModal'])

onMounted(() => window.addEventListener('keydown', escCloseModal))
onUnmounted(() => window.removeEventListener('keydown', escCloseModal))

const escCloseModal = (e) => {
  if (e.key === 'Escape') {
    emit('toggleHeaderMobileMenuModal')
  }
}
</script>

<style scoped>
.header-mobile-menu-modal-overlay {
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  transform: translateX(-100%);
  transition: 0.5s ease all;
  z-index: 10;
}
.header-mobile-menu-modal-overlay-active {
  transform: translateX(0);
}
.header-mobile-menu-modal {
  position: relative;
  width: 100%;
  max-width: 350px;
  background: var(--black-primary);
  padding-top: 67px;
  padding-left: 44px;
}
.header-mobile-menu-modal-close {
  position: absolute;
  top: 17px;
  right: 22px;
  cursor: pointer;
  transition: 1.8s ease all;
  opacity: 0;
  transform: scale(0);
}
.header-mobile-menu-modal-close-active {
  opacity: 1;
  transform: scale(1);
}
.header-mobile-menu-modal-content {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.header-mobile-menu-modal-content-link {
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--white-primary);
}
</style>
