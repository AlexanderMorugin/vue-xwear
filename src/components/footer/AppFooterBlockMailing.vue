<template>
  <div class="footer-block-mail-container">
    <AppFooterSocial v-if="isScreenMedium" />

    <div class="footer-block-mail">
      <div class="title">
        <p class="footer-block-mail-title">Подписка на новости</p>
        <p class="footer-block-mail-subtitle">Будьте в курсе скидок и новостей</p>
      </div>
      <form @submit.prevent="submit" class="footer-block-mail-form">
        <input type="email" id="email" name="email" v-model="email" placeholder="Ваш email" />
        <button class="footer-block-mail-button">
          <img src="/icons/icon-arrow-black.svg" alt="Стрелка" />
        </button>
      </form>
      <p class="footer-block-mail-text">
        Подписываясь на рассылку вы соглашатесь с обработкой персональных данных
      </p>
    </div>
    <AppFooterPrivacy v-if="!isScreenLarge" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppFooterPrivacy from './AppFooterPrivacy.vue'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useResizeMedium } from '@/use/useResizeMedium'
import AppFooterSocial from './AppFooterSocial.vue'

const { isScreenLarge } = useResizeLarge()
const { isScreenMedium } = useResizeMedium()

const email = ref(null)

const submit = () => {
  console.log(email.value)

  email.value = null
}
</script>

<style scoped>
.footer-block-mail-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .footer-block-mail-container {
    align-items: center;
  }
}
.footer-block-mail {
  display: flex;
  flex-direction: column;
}
@media (max-width: 1023px) {
  .footer-block-mail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'title form' 'text text' 'privacy privacy';
    align-items: center;
    column-gap: 74px;
  }
}
@media (max-width: 767px) {
  .footer-block-mail {
    display: flex;
    flex-direction: column;
  }
}
.title {
  grid-area: title;
}
.footer-block-mail-title {
  font-weight: 700;
  font-size: 15px;
  line-height: 28px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--white-primary);
}
@media (max-width: 767px) {
  .footer-block-mail-title {
    font-size: 13px;
    text-align: center;
  }
}
.footer-block-mail-subtitle {
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  color: var(--gray-sixdary);
  padding-top: 9px;
}
@media (max-width: 1023px) {
  .footer-block-mail-subtitle {
    padding-top: 0;
  }
}
@media (max-width: 767px) {
  .footer-block-mail-subtitle {
    font-size: 14px;
    text-align: center;
  }
}
.footer-block-mail-form {
  grid-area: form;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 43px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  margin-top: 20px;
}
@media (max-width: 1023px) {
  .footer-block-mail-form {
    margin-top: 0;
  }
}
@media (max-width: 767px) {
  .footer-block-mail-form {
    width: 100%;
    margin-top: 9px;
  }
}
.footer-block-mail-form input[type='email'] {
  width: 80%;
  height: 80%;
  border-radius: 5px;
  font-weight: 400;
  font-size: 13px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.6);
  padding-left: 12px;
  padding-right: 12px;
  transition: 0.3s ease all;
}
.footer-block-mail-form input[type='email']:focus {
  color: var(--white-primary);
  background: var(--black-fivedary);
  outline: 0;
}
.footer-block-mail-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background: var(--white-primary);
  cursor: pointer;
  transition: 0.3s ease all;
}
.footer-block-mail-button:hover {
  background: var(--blue-primary);
}
.footer-block-mail-text {
  grid-area: text;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.4);
  padding-top: 20px;
}
@media (max-width: 767px) {
  .footer-block-mail-text {
    text-align: center;
  }
}
</style>
