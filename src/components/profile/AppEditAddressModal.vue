<template>
  <Teleport to="body">
    <div class="edit-address-modal-overlay" @click="$emit('closeEditAddressModal')">
      <div @click.stop class="edit-address-modal">
        <div class="address-modal-title-box">
          <span class="address-modal-title">Редактирование адреса №{{ props.address.id }}</span>

          <!-- Кнопка крестик -->
          <button class="address-modal-close" @click="$emit('closeEditAddressModal')">
            <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
          </button>
        </div>

        <FormEditAddress
          :address="address"
          @closeEditAddressModal="$emit('closeEditAddressModal')"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import FormEditAddress from './FormEditAddress.vue'
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeEditAddressModal'])
const props = defineProps(['address'])
</script>

<style scoped>
.edit-address-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
}
@media (max-width: 767px) {
  .edit-address-modal-overlay {
    padding-left: 0;
    padding-right: 0;
  }
}
.edit-address-modal {
  width: 100%;
  max-width: 494px;
  height: fit-content;
  background: var(--gray-normal-fivedary);
  border-radius: 10px;
  padding: 35px 40px;
  animation: slide-in 300ms ease-in-out;
}
@media (max-width: 767px) {
  .edit-address-modal {
    border-radius: 0;
    height: 100vh;
    padding: 30px 10px;
    overflow-y: scroll;
  }
}
.address-modal-title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.address-modal-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--white-primary);
}
@media (max-width: 767px) {
  .address-modal-title {
    font-size: 18px;
  }
}
.address-modal-close {
  cursor: pointer;
  animation: slide-in 1000ms ease-in-out;
}
.address-modal-button {
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
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateT(0);
  }
}
</style>
