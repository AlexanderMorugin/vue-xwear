<template>
  <div>
    <button class="btn-delete" @click="$emit('openOrderDeleteModal')">
      <img src="/icons/icon-trash-gray.svg" alt="Иконка удаления" class="btn-delete-icon" />
    </button>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openOrderDeleteModal'])
</script>

<style scoped>
.btn-delete {
  position: absolute;
  top: 10px;
  right: 0;
  cursor: pointer;
  z-index: 10;
}
@media (max-width: 767px) {
  .btn-delete {
    top: 20px;
  }
}
.btn-delete-icon {
  width: 19px;
}
</style>
