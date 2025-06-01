<template>
  <Teleport to="body">
    <div class="profile-modal-overlay" @click="$emit('closeProfileModal')">
      <div @click.stop class="profile-modal">
        <!-- Кнопка крестик -->
        <button v-if="!isScreenMedium" class="modal-close" @click="$emit('closeProfileModal')">
          <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
        </button>

        <div class="profile-modal-content">
          <FormLogin
            @closeProfileModal="$emit('closeProfileModal')"
            @openRegisterForm="openRegisterForm"
            @openAdminForm="openAdminForm"
            v-if="isLoginForm"
          />
          <FormRegistration
            @closeProfileModal="$emit('closeProfileModal')"
            @openLoginForm="openLoginForm"
            v-if="isRegisterForm"
          />
          <FormAdmin @closeProfileModal="$emit('closeProfileModal')" v-if="isAdminForm" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import FormLogin from './FormLogin.vue'
import FormRegistration from './FormRegistration.vue'
import FormAdmin from './FormAdmin.vue'
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeProfileModal'])

const isLoginForm = ref(true)
const isRegisterForm = ref(false)
const isAdminForm = ref(false)

const openLoginForm = () => {
  isLoginForm.value = true
  isRegisterForm.value = false
  isAdminForm.value = false
}
const openRegisterForm = () => {
  isLoginForm.value = false
  isRegisterForm.value = true
  isAdminForm.value = false
}
const openAdminForm = () => {
  isLoginForm.value = false
  isRegisterForm.value = false
  isAdminForm.value = true
}
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
  padding-right: 20px;
  padding-left: 20px;
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
  border-radius: 10px;
  padding: 35px 40px;
}
@media (max-width: 767px) {
  .profile-modal-content {
    padding: 20px 10px;
  }
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
