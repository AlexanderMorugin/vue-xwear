<template>
  <section :class="['product-faq', { 'product-faq-page': props.isPage }]">
    <h2 class="product-faq-title">Общие вопросы</h2>
    <ul class="product-faq-list">
      <li v-for="item in faqTextCommon" :key="item.id" class="product-faq-list-item">
        <button class="product-faq-list-button" @click="toggleCommonAccordion(item.id)">
          {{ item.question }}
          <img
            :src="
              isOpenCommon(item.id) ? '/icons/icon-minus-black.svg' : '/icons/icon-plus-black.svg'
            "
            alt="Нажать кнопку"
          />
        </button>
        <div
          :class="[
            'product-faq-list-answer',
            { 'product-faq-list-answer-active': isOpenCommon(item.id) },
          ]"
        >
          <p class="product-faq-list-answer-text">{{ item.answer }}</p>
        </div>
      </li>
    </ul>

    <h2 class="product-faq-title">Товары</h2>
    <ul class="product-faq-list">
      <li v-for="item in faqTextThings" :key="item.id" class="product-faq-list-item">
        <button class="product-faq-list-button" @click="toggleThingsAccordion(item.id)">
          {{ item.question }}
          <img
            :src="
              isOpenThings(item.id) ? '/icons/icon-minus-black.svg' : '/icons/icon-plus-black.svg'
            "
            alt="Нажать кнопку"
          />
        </button>
        <div
          :class="[
            'product-faq-list-answer',
            { 'product-faq-list-answer-active': isOpenThings(item.id) },
          ]"
        >
          <p class="product-faq-list-answer-text">{{ item.answer }}</p>
        </div>
      </li>
    </ul>

    <h2 class="product-faq-title">Доставка</h2>
    <ul class="product-faq-list">
      <li v-for="item in faqTextDelivery" :key="item.id" class="product-faq-list-item">
        <button class="product-faq-list-button" @click="toggleDeliveryAccordion(item.id)">
          {{ item.question }}
          <img
            :src="
              isOpenDelivery(item.id) ? '/icons/icon-minus-black.svg' : '/icons/icon-plus-black.svg'
            "
            alt="Нажать кнопку"
          />
        </button>
        <div
          :class="[
            'product-faq-list-answer',
            { 'product-faq-list-answer-active': isOpenDelivery(item.id) },
          ]"
        >
          <p class="product-faq-list-answer-text">{{ item.answer }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { faqTextCommon, faqTextThings, faqTextDelivery } from '@/mock/faq-text'

const props = defineProps(['isPage'])

const openCommonIndex = ref(null)
const openThingsIndex = ref(null)
const openDeliveryIndex = ref(null)

const toggleCommonAccordion = (index) => {
  openCommonIndex.value = openCommonIndex.value === index ? null : index
}

const isOpenCommon = (index) => {
  return openCommonIndex.value === index
}

const toggleThingsAccordion = (index) => {
  openThingsIndex.value = openThingsIndex.value === index ? null : index
}

const isOpenThings = (index) => {
  return openThingsIndex.value === index
}
const toggleDeliveryAccordion = (index) => {
  openDeliveryIndex.value = openDeliveryIndex.value === index ? null : index
}

const isOpenDelivery = (index) => {
  return openDeliveryIndex.value === index
}
</script>

<style scoped>
.product-faq {
  width: 100%;
  max-width: 810px;
  padding-top: 46px;
}
@media (max-width: 1023px) {
  .product-faq {
    padding-top: 24px;
  }
}
@media (max-width: 767px) {
  .product-faq {
    padding-top: 25px;
  }
}
.product-faq-page {
  max-width: 100%;
}
.product-faq-title {
  line-height: 28px;
  font-size: 19px;
  font-weight: 700;
  color: var(--black-primary);
  text-transform: uppercase;
}
@media (max-width: 767px) {
  .product-faq-title {
    font-size: 15px;
  }
}
.product-faq-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 35px;
}
.product-faq-list-item {
  border-bottom: 1px solid var(--gray-light-thirdary);
}
.product-faq-list-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 70px;
  line-height: 28px;
  font-size: 14px;
  font-weight: 600;
  color: var(--black-primary);
  text-align: start;
  text-transform: uppercase;
  padding: 21px 0 21px 10px;
  cursor: pointer;
}
.product-faq-list-answer {
  visibility: hidden;
  max-height: 0;
  transition: 0.3s all;
}
.product-faq-list-answer-active {
  max-height: 100vh;
  visibility: visible;
}
.product-faq-list-answer-text {
  line-height: 21px;
  font-size: 14px;
  font-weight: 400;
  color: var(--black-fivedary);
  padding: 19px 30px 19px 23px;
}
@media (max-width: 1023px) {
  .product-faq-list-answer-text {
    padding-right: 21px;
  }
}
@media (max-width: 767px) {
  .product-faq-list-answer-text {
    padding-right: 9px;
  }
}
</style>
