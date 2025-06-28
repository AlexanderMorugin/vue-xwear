<template>
  <div :class="['footer-block', { 'footer-block-active': isOpen(props.status) }]">
    <div v-if="!isScreenMedium">
      <p class="footer-block-title">{{ props.title }}</p>
      <!-- Блоки "Каталог" и "Инфо" для десктопа -->
      <ul v-if="props.status === 'catalog' || 'info'" class="footer-block-list">
        <li v-for="item in props.links" :key="item.name">
          <router-link :to="item.path" class="footer-block-link">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <!-- Блоки "Каталог" и "Инфо" и "Контакты" для мобилки -->
    <div v-else class="footer-block-button-block">
      <button @click="toggleAccordion(props.status)" class="footer-block-button">
        <p class="footer-block-title">{{ props.title }}</p>
        <img
          src="/icons/icon-arrow-white.svg"
          alt="Стрелка"
          :class="[
            'footer-block-button-arrow',
            { 'footer-block-button-arrow-active': isOpen(props.status) },
          ]"
        />
      </button>
      <!-- Контент блока "Каталог" и "Инфо" для мобилок -->
      <ul
        v-if="props.status === 'catalog' || 'info'"
        :class="[
          'footer-block-list-mobile',
          { 'footer-block-list-mobile-active': isOpen(props.status) },
        ]"
      >
        <li v-for="item in props.links" :key="item.name">
          <router-link :to="item.path" class="footer-block-link">{{ item.name }}</router-link>
        </li>
      </ul>
      <!-- Контент блока "Контакты" для мобилок -->
      <ul
        v-if="props.status === 'contact'"
        :class="[
          'footer-block-list-mobile',
          { 'footer-block-list-mobile-active': isOpen(props.status) },
        ]"
      >
        <li>
          <a href="mailto:info@xwear.info" class="footer-block-contact-email">info@xwear.info</a>
        </li>
        <li>
          <a href="tel:+79936083885" class="footer-block-contact-phone">+7 993 608 38 85</a>
        </li>
        <li>
          <router-link :to="PATH_CONTACTS" class="footer-block-link">Все контакты</router-link>
        </li>
      </ul>
    </div>
    <!-- Блок "Контакты" для десктопа -->
    <div v-if="props.status === 'contact' && !isScreenMedium" class="footer-block-contact">
      <a href="mailto:info@xwear.info" class="footer-block-contact-email">info@xwear.info</a>
      <a href="tel:+79936083885" class="footer-block-contact-phone">+7 993 608 38 85</a>
      <div class="footer-block-contact-social">
        <span class="footer-block-contact-social-title">Мессенджеры</span>
        <div class="footer-block-contact-social-icons">
          <a target="_blank" href="https://t.me/имя_пользователя">
            <img
              src="/icons/icon-telegramm.png"
              alt="Телеграм"
              class="footer-block-contact-social-icon"
            />
          </a>
          <a target="_blank" href="https://wa.me/+79001111111">
            <img
              src="/icons/icon-whatsapp.png"
              alt="Вотсап"
              class="footer-block-contact-social-icon"
            />
          </a>
        </div>
      </div>
      <div v-if="!isScreenMedium" class="footer-block-contact-social">
        <span class="footer-block-contact-social-title">Наши соц.сети</span>
        <div class="footer-block-contact-social-icons">
          <a target="_blank" href="https://vk.com/имя_пользователя">
            <img
              src="/icons/icon-wk.png"
              alt="ВКонтакте"
              class="footer-block-contact-social-icon"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Блоки "Логотипов" для мобильных расширений -->
    <AppLogo v-if="props.status === 'catalog' && !isScreenLarge" place="footer" />
    <AppDeveloperLogo v-if="props.status === 'info' && !isScreenLarge" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppLogo from '@/components/logo/AppLogo.vue'
import AppDeveloperLogo from '@/components/logo/AppDeveloperLogo.vue'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useResizeMedium } from '@/use/useResizeMedium'
import { PATH_CONTACTS } from '@/mock/routes'

const props = defineProps(['title', 'links', 'status'])

const { isScreenLarge } = useResizeLarge()
const { isScreenMedium } = useResizeMedium()

const openIndex = ref(null)

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const isOpen = (index) => {
  return openIndex.value === index
}
</script>

<style scoped>
.footer-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 275px;
}
@media (max-width: 1023px) {
  .footer-block {
    height: 246px;
  }
}
@media (max-width: 767px) {
  .footer-block {
    max-height: 48px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    transition: 0.3s ease all;
  }
}
.footer-block-active {
  max-height: 150px;
}
.footer-block-title {
  font-weight: 700;
  font-size: 15px;
  line-height: 28px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--white-primary);
}
@media (max-width: 767px) {
  .footer-block-title {
    font-size: 13px;
  }
}
.footer-block-list {
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-top: 9px;
}
.footer-block-link {
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  color: var(--gray-sixdary);
}
.footer-block-link:hover {
  color: var(--white-primary);
}
.footer-block-button-block {
  height: 48px;
  transition: 0.3s ease all;
}
.footer-block-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  cursor: pointer;
}
.footer-block-button-arrow {
  transform: rotate(90deg);
  transition: 0.8s ease all;
}
.footer-block-button-arrow-active {
  transform: rotate(270deg);
}
.footer-block-list-mobile {
  visibility: hidden;
}
.footer-block-list-mobile-active {
  max-height: 100vh;
  visibility: visible;
}
.footer-block-contact {
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.footer-block-contact-email {
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  text-decoration: underline;
  text-decoration-style: solid;
  color: var(--gray-sixdary);
}
.footer-block-contact-email:hover {
  color: var(--white-primary);
}
.footer-block-contact-phone {
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: var(--white-primary);
}
.footer-block-contact-social {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.footer-block-contact-social-title {
  font-weight: 800;
  font-size: 12px;
  line-height: 28px;
  text-transform: uppercase;
  color: var(--white-primary);
}
.footer-block-contact-social-icons {
  display: flex;
  gap: 9px;
  width: fit-content;
}
.footer-block-contact-social-icon {
  width: 30px;
}
</style>
