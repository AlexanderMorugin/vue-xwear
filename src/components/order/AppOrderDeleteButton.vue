<template>
  <button
    :class="[
      'btn-delete',
      { 'btn-delete-profile-server-order': props.fromPage === 'profileServerOrder' },
    ]"
    @click="$emit('openOrderDeleteModal')"
  >
    <img src="/icons/icon-trash-gray.svg" alt="Иконка удаления" class="btn-delete-icon" />
  </button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['openOrderDeleteModal'])
const props = defineProps(['fromPage'])
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
.btn-delete-profile-server-order {
  top: 10px;
  right: 10px;
}
.btn-delete-icon {
  width: 19px;
}
</style>
