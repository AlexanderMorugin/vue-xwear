<template>
  <Teleport to="body">
    <div class="address-modal-overlay" @click="$emit('closeUserAddressModal')">
      <!-- <div @click.stop class="profile-modal"> -->
      <div @click.stop class="address-modal">
        <div class="address-modal-title-box">
          <span class="address-modal-title">Выберите адрес</span>
          <!-- Кнопка крестик -->
          <button class="address-modal-close" @click="$emit('closeUserAddressModal')">
            <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
          </button>
        </div>
        <ul>
          <li v-for="item in props.userStore.userAddress" :key="item.id">
            <button
              :class="[
                'address-modal-button',
                {
                  'address-modal-button-active':
                    props.userStore.currentAdress && props.userStore.currentAdress.id === item.id,
                },
              ]"
              @click="setAddress(item)"
            >
              {{ item.index }}, {{ item.country }}, {{ item.city }}, {{ item.street }}, д.{{
                item.building
              }}, кв.{{ item.flat }}
            </button>
          </li>
        </ul>

        <!-- <button class="address-modal-button">{{ props.userStore.currentAdress }}</button> -->
      </div>
    </div>
    <!-- </div> -->
  </Teleport>
</template>

<script setup>
const emit = defineEmits(['closeUserAddressModal'])
const props = defineProps(['userStore'])

const setAddress = (item) => {
  props.userStore.setCurrentAdress(item)
  emit('closeUserAddressModal')
}
</script>

<style scoped>
.address-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
}
.address-modal {
  width: 100%;
  max-width: 494px;
  background: var(--black-primary);
  border-radius: 10px;
  padding: 35px 40px;
  animation: slide-in 300ms ease-in-out;
}
@media (max-width: 767px) {
  .address-modal {
    padding: 20px;
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
