<template>
  <button
    :class="['btn-delete', { 'btn-delete-cart': props.isPage !== 'order' }]"
    @click="$emit('openDeleteModal')"
  >
    <img src="/icons/icon-trash-gray.svg" alt="Иконка удаления" class="btn-delete-icon" />
  </button>
</template>

<script setup>
const props = defineProps(['isPage'])
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openDeleteModal'])
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
.btn-delete-cart {
  top: 33px;
  right: 25px;
}
@media (max-width: 767px) {
  .btn-delete-cart {
    top: 0;
    right: 15px;
  }
}
.btn-delete-icon {
  width: 19px;
}
</style>
