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
            <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
          </button>
        </div>
        <!-- <div class="order-without-user-modal-forms"> -->
        <FormRegistrationWithAddress />
        <!-- </div> -->
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import FormRegistrationWithAddress from '@/components/profile/FormRegistrationWithAddress.vue'
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeOrderWithoutUserModal'])
// const props = defineProps(['userStore'])
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
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
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
  }
}
.order-without-user-modal-close {
  cursor: pointer;
  animation: slide-in 1000ms ease-in-out;
}
/* .order-without-user-modal-forms {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
} */
/* .address-modal-button {
  background: var(--black-thirdary);
  border: 1px solid var(--gray-dark-fourdary);
  border-radius: 5px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: var(--white-primary);
  padding: 10px;
  margin-top: 30px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.address-modal-button:hover {
  background: var(--gray-dark-sixdary);
}
.address-modal-button-active {
  background: var(--blue-secondary);
}
.address-modal-button-active:hover {
  background: var(--blue-secondary);
} */

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
