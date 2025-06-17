<template>
  <Teleport to="body">
    <div class="order-without-user-modal-overlay" @click="$emit('closeOrderWithoutUserModal')">
      <div @click.stop class="order-without-user-modal">
        <div class="order-without-user-modal-title-box">
          <span class="order-without-user-modal-title">Ваши данные для доставки</span>
          <!-- Кнопка крестик -->
          <button
            class="order-without-user-modal-close"
            @click="$emit('closeOrderWithoutUserModal')"
          >
            <img
              v-if="isScreenMedium"
              src="/icons/icon-close-filters.svg"
              alt="Закрыть"
              class="order-without-user-modal-close-image"
            />
            <img
              v-else
              src="/icons/icon-close-gray.svg"
              alt="Закрыть"
              class="order-without-user-modal-close-image"
            />
          </button>
        </div>

        <FormRegistrationWithAddress @closeOrderWithoutUserModal="closeOrderWithoutUserModal" />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import FormRegistrationWithAddress from '@/components/profile/FormRegistrationWithAddress.vue'
import { useResizeMedium } from '@/use/useResizeMedium'
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeOrderWithoutUserModal'])

const { isScreenMedium } = useResizeMedium()
</script>

<style scoped>
.order-without-user-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.order-without-user-modal {
  width: 100%;
  max-width: 1000px;
  max-height: 100vh;
  background: var(--black-primary);
  border-radius: 10px;
  padding: 35px 40px;
  animation: slide-in 300ms ease-in-out;
  overflow-y: auto;
}
@media (max-width: 767px) {
  .order-without-user-modal {
    background: var(--white-primary);
    border-radius: 0;
    padding: 20px;
  }
}
.order-without-user-modal-title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.order-without-user-modal-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--white-primary);
}
@media (max-width: 767px) {
  .order-without-user-modal-title {
    font-size: 18px;
    color: var(--black-primary);
  }
}
.order-without-user-modal-close {
  cursor: pointer;
  animation: slide-in 1000ms ease-in-out;
}
.order-without-user-modal-close-image {
  width: 12px;
  height: 12px;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
