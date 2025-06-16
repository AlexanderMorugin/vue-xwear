<template>
  <Teleport to="body">
    <div class="order-profile-modal-overlay" @click="$emit('closeEditProfileModal')">
      <div @click.stop class="order-profile-modal">
        <!-- Кнопка крестик, показывается при разрешении более 768px -->
        <button
          v-if="!isScreenMedium"
          class="profile-close"
          @click="$emit('closeEditProfileModal')"
        >
          <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
        </button>

        <FormEditProfile fromPage="order" @closeEditProfileModal="$emit('closeEditProfileModal')" />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import FormEditProfile from '@/components/profile/FormEditProfile.vue'
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeEditProfileModal'])
</script>

<style scoped>
.order-profile-modal-overlay {
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
.order-profile-modal {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* gap: 20px; */
  width: 100%;
  max-width: 500px;
  animation: slide-in 300ms ease-in-out;
}
.order-profile-modal-close {
  cursor: pointer;
  animation: slide-in 1000ms ease-in-out;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
