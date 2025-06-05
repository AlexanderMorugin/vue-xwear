<template>
  <Teleport to="body">
    <div class="order-submit-modal-overlay">
      <div class="order-submit-modal">
        <!-- Контент модалки -->
        <div class="order-submit-modal-content">
          <span class="order-submit-modal-title"
            >Благодарим за покупку! Скоро мы свяжемся с вами.</span
          >
          <ul class="order-submit-modal-buttons">
            <li class="order-submit-modal-button">
              <router-link
                class="order-submit-modal-link"
                :to="PATH_CART"
                @click="$emit('closeSubmitModal')"
                >Назад в корзину</router-link
              >
            </li>
            <li class="order-submit-modal-button">
              <router-link
                class="order-submit-modal-link"
                :to="PATH_PROFILE"
                @click="$emit('closeSubmitModal')"
                >В личный кабинет</router-link
              >
            </li>
            <li class="order-submit-modal-button">
              <router-link
                class="order-submit-modal-link"
                :to="PATH_SHOES"
                @click="$emit('closeSubmitModal')"
                >Выбрать еще обувь</router-link
              >
            </li>
            <li class="order-submit-modal-button">
              <router-link class="order-submit-modal-link" to="/" @click="$emit('closeSubmitModal')"
                >На главную</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { PATH_CART, PATH_PROFILE, PATH_SHOES } from '../../mock/routes'

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['closeSubmitModal'])
</script>

<style scoped>
.order-submit-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
}
.order-submit-modal {
  width: 100%;
  max-width: 400px;
  animation: scale-in 300ms ease-in-out;
}
.order-submit-modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  background: var(--black-primary);
  border-radius: 10px;
  padding: 35px 40px;
}
@media (max-width: 767px) {
  .order-submit-modal-content {
    gap: 20px;
    padding: 20px;
  }
}
.order-submit-modal-title {
  line-height: 32px;
  font-size: 22px;
  font-weight: 600;
  color: var(--white-primary);
  text-align: center;
}
.order-submit-modal-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.order-submit-modal-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  background: var(--gray-normal-thirdary);
  border: 1px solid var(--gray-normal-fivedary);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.order-submit-modal-button:hover {
  background: var(--blue-primary);
}
.order-submit-modal-link {
  font-size: 18px;
  font-weight: 600;
  color: var(--white-secondary);
}
@media (max-width: 767px) {
  .order-submit-modal-link {
    font-size: 14px;
  }
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
