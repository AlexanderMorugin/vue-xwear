<template>
  <Teleport to="body" :disabled="!isScreenMedium">
    <div v-if="!isScreenMedium" class="btn-favorite-modal">
      <span class="btn-favorite-modal-text"
        >Делать товар избранным могут только зарегистрированные пользователи. Кликайте иконку
        человечка в верхнем правом углу.</span
      >
      <button class="btn-favorite-modal-close-button" @click="$emit('closeFavoriteButtonModal')">
        <img
          src="/icons/icon-close-dark.svg"
          alt="Иконка закрыть"
          class="btn-favorite-modal-close-image"
        />
      </button>
    </div>

    <div v-else class="btn-favorite-modal-overlay" @click="$emit('closeFavoriteButtonModal')">
      <div @click.stop class="btn-favorite-modal">
        <span class="btn-favorite-modal-text"
          >Делать товар избранным могут только зарегистрированные пользователи. Кликайте иконку
          человечка в верхнем правом углу.</span
        >
        <button class="btn-favorite-modal-close-button" @click="$emit('closeFavoriteButtonModal')">
          <img
            src="/icons/icon-close-dark.svg"
            alt="Иконка закрыть"
            class="btn-favorite-modal-close-image"
          />
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useResizeMedium } from '@/use/useResizeMedium'
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeFavoriteButtonModal'])

const { isScreenMedium } = useResizeMedium()
</script>

<style scoped>
.btn-favorite-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
}
.btn-favorite-modal {
  position: absolute;
  top: 60px;
  right: 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 250px;
  background: var(--orange-primary);
  border-radius: 10px;
  padding: 10px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 20;
  animation: scale-in 200ms ease-in-out;
}
@media (max-width: 767px) {
  .btn-favorite-modal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.btn-favorite-modal-close-button {
  cursor: pointer;
}
.btn-favorite-modal-close-image {
  width: 10px;
}
.btn-favorite-modal-text {
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: var(--black-primary);
}

@keyframes scale-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
