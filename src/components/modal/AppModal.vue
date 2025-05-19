<template>
  <div>
    <app-modal-overlay>
      <div class="modal"></div>
    </app-modal-overlay>
  </div>
</template>

<script setup>
import AppModalOverlay from './AppmodalOverlay.vue'
</script>

<style scoped>
.modal {
  width: 500px;
  height: 400px;
  background: white;
}
</style>
