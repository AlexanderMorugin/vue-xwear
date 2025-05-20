<template>
  <div>
    <div class="modal-overlay" @click="$emit('closeModal')">
      <div class="modal">
        <button class="modal-close" @click="$emit('closeModal')">
          <img src="/icons/icon-close-gray.svg" alt="Закрыть" />
        </button>

        <AppCurrentProductModal :image="props.image" :title="props.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppCurrentProductModal from '@/components/product/AppCurrentProductModal.vue'
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeModal'])
const props = defineProps(['image', 'title'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  overflow: hidden;
  z-index: 10;
}
.modal {
  position: relative;
  width: 95%;
  padding-top: 30px;
  animation: slide-in 300ms ease-in-out;
}
.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(50%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
