<template>
  <Teleport to="body">
    <div class="profile-modal-overlay" @click="$emit('closeProfileModal')">
      <div @click.stop class="profile-modal">
        <!-- Кнопка крестик -->
        <button v-if="!isScreenMedium" class="modal-close" @click="$emit('closeProfileModal')">
          <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
        </button>

        <div class="profile-modal-content">
          <!-- <FormLogin @closeProfileModal="$emit('closeProfileModal')" /> -->
          <FormRegistration @closeProfileModal="$emit('closeProfileModal')" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
// import FormLogin from './FormLogin.vue'
import FormRegistration from './FormRegistration.vue'
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeProfileModal'])
</script>

<style scoped>
.profile-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-right: 10px;
  padding-left: 10px;
}
.profile-modal {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
  max-width: 494px;
  animation: slide-in 300ms ease-in-out;
}
.modal-close {
  cursor: pointer;
  animation: slide-in 1000ms ease-in-out;
}
.profile-modal-content {
  width: 100%;
  background: var(--white-primary);
  border-radius: 5px;
  padding: 35px 40px;
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
