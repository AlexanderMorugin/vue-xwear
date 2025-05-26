<template>
  <div :class="['footer-block', { 'footer-block-active': isOpen(props.status) }]">
    <div class="footer-block-top">
      <!-- Блок для десктопа -->
      <div v-if="!isScreenMedium">
        <p class="footer-block-title">{{ props.title }}</p>
        <ul v-if="props.status === 'catalog' || 'info'" class="footer-block-list">
          <li v-for="item in links" :key="item.name">
            <router-link :to="item.path" class="footer-block-link">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <!-- Тотже блок для мобилки -->
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
        <ul
          v-if="props.status === 'catalog' || 'info'"
          :class="[
            'footer-block-list-mobile',
            { 'footer-block-list-mobile-active': isOpen(props.status) },
          ]"
        >
          <li v-for="item in links" :key="item.name">
            <router-link :to="item.path" class="footer-block-link">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
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
@media (max-width: 767px) {
  .footer-block {
    max-height: 48px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    transition: 0.3s ease all;
  }
}
.footer-block-active {
  max-height: 200px;
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
  transition: 0.2s ease all;
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
</style>
