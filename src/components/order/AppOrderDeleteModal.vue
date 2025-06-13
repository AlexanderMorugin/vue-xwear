<template>
  <Teleport to="body">
    <div class="order-delete-modal-overlay" @click="$emit('closeOrderDeleteModal')">
      <div @click.stop class="order-delete-modal">
        <!-- Кнопка крестик -->
        <button class="order-delete-modal-close" @click="$emit('closeOrderDeleteModal')">
          <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
        </button>

        <!-- Контент модалки -->
        <div class="order-delete-modal-content">
          <span class="order-delete-modal-title">{{ props.title }}</span>
          <div class="order-delete-modal-buttons">
            <button class="order-delete-modal-button yes" @click="$emit('deleteOrder')">Да</button>

            <button class="order-delete-modal-button no" @click="$emit('closeOrderDeleteModal')">
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps(['title'])

const emit = defineEmits(['closeOrderDeleteModal', 'deleteOrder'])

onMounted(() => window.addEventListener('keydown', escCloseModal))
onUnmounted(() => window.removeEventListener('keydown', escCloseModal))

const escCloseModal = (e) => {
  if (e.key === 'Escape') {
    emit('closeOrderDeleteModal')
  }
}
</script>

<style scoped>
.order-delete-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
}
.order-delete-modal {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
  max-width: 350px;
  animation: scale-in 300ms ease-in-out;
}
.order-delete-modal-close {
  cursor: pointer;
  animation: scale-in 1000ms ease-in-out;
}
.order-delete-modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  background: var(--white-primary);
  border-radius: 10px;
  padding: 35px 40px;
}
@media (max-width: 767px) {
  .order-delete-modal-content {
    gap: 20px;
    padding: 20px;
  }
}
.order-delete-modal-title {
  line-height: 22px;
  font-size: 18px;
  font-weight: 600;
  color: var(--black-primary);
  text-align: center;
}
.order-delete-modal-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.order-delete-modal-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  height: 46px;
  border: 1px solid transparent;
  border-radius: 5px;
  line-height: 22px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}
.yes {
  background: var(--blue-primary);
  color: var(--black-primary);
}
.no {
  border: 1px solid var(--gray-dark-fourdary);
  color: var(--black-primary);
  transition: 0.3s ease all;
}
.no:hover {
  background: var(--white-sixdary);
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
