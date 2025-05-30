<template>
  <Teleport to="body" v-if="props.isProfileMenuMobileOpen">
    <div class="profile-menu-mobile-overlay" @click="$emit('closeProfileMenu')">
      <div @click.stop class="profile-menu">
        <!-- Кнопка крестик, показывается при разрешении более 768px -->
        <button v-if="!isScreenMedium" class="profile-close" @click="$emit('closeProfileMenu')">
          <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
        </button>

        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps(['isProfileMenuMobileOpen'])
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeProfileMenu'])
</script>

<style scoped>
.profile-menu-mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-right: 10px;
  padding-left: 10px;
}
.profile-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 20px;
  width: 100%;
  max-width: 318px;
  animation: slide-in 300ms ease-in-out;
}
.profile-close {
  cursor: pointer;
  animation: slide-in 1000ms ease-in-out;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
