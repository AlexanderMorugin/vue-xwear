<template>
  <button class="btn-delete" @click="handleDelete">
    <img src="/icons/icon-trash-gray.svg" alt="Иконка удаления" class="btn-delete-icon" />
  </button>
</template>

<script setup></script>

<style scoped>
.btn-delete {
  position: absolute;
  top: 33px;
  right: 25px;
  cursor: pointer;
  z-index: 10;
}
@media (max-width: 767px) {
  .btn-delete {
    top: 0;
    right: 15px;
  }
}
.btn-delete-icon {
  width: 19px;
}
</style>
