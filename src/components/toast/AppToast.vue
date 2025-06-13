<template>
  <Teleport to="body">
    <div class="toast-overlay">
      <div class="toast-content">
        <span class="toast-title">{{ props.title }}</span>
        <!-- Кнопка крестик -->
        <button class="toast-close" @click="$emit('closeToast')">
          <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps(['title'])

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeToast'])
</script>

<style scoped>
.toast-overlay {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.toast-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 250px;
  background: var(--green-primary);
  border-radius: 5px;
  padding: 10px 20px;
  animation: slide-in 300ms ease-in-out;
}
.toast-title {
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--black-primary);
}
.toast-close {
  cursor: pointer;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
