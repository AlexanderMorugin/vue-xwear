<template>
  <div class="details-head">
    <button
      class="details-btn"
      :class="{ 'details-btn-active': isDetailsActive }"
      @click="setActive('details')"
    >
      Детали
    </button>
    <button
      class="details-btn"
      :class="{ 'details-btn-active': isDeliveryActive }"
      @click="setActive('delivery')"
    >
      Доставка
    </button>
    <button
      class="details-btn"
      :class="{ 'details-btn-active': isPayActive }"
      @click="setActive('pay')"
    >
      Оплата
    </button>
    <button
      class="details-btn"
      :class="{ 'details-btn-active': isFaqActive }"
      @click="setActive('faq')"
    >
      FAQ
    </button>
  </div>
  <AppCurrentProductDetailsDescription :product="props.product" :id="props.id" />
</template>

<script setup>
import { ref } from 'vue'
// import { useResizeMedium } from '@/use/useResizeMedium'
import AppCurrentProductDetailsDescription from './AppCurrentProductDetailsDescription.vue'

// const { isScreenMedium } = useResizeMedium()

const props = defineProps(['product', 'id'])

const isDetailsActive = ref(true)
const isDeliveryActive = ref(false)
const isPayActive = ref(false)
const isFaqActive = ref(false)

const setActive = (args) => {
  if (args === 'details') {
    isDetailsActive.value = true
    isDeliveryActive.value = false
    isPayActive.value = false
    isFaqActive.value = false
  } else if (args === 'delivery') {
    isDetailsActive.value = false
    isDeliveryActive.value = true
    isPayActive.value = false
    isFaqActive.value = false
  } else if (args === 'pay') {
    isDetailsActive.value = false
    isDeliveryActive.value = false
    isPayActive.value = true
    isFaqActive.value = false
  } else if (args === 'faq') {
    isDetailsActive.value = false
    isDeliveryActive.value = false
    isPayActive.value = false
    isFaqActive.value = true
  }
}
</script>

<style scoped>
.details-head {
  display: flex;
  gap: 50px;
  border-top: 1px solid var(--color-border-product-details-head);
  border-bottom: 1px solid var(--color-border-product-details-head);
}
@media (max-width: 767px) {
  .details-head {
    gap: 31px;
  }
}
.details-btn {
  height: 55px;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-product-details-head);
  opacity: 0.4;
  border-bottom: 1px solid transparent;
  transition: 0.3s ease all;
  cursor: pointer;
}
@media (max-width: 767px) {
  .details-btn {
    font-size: 16px;
  }
}
.details-btn-active {
  opacity: 1;
  border-bottom: 1px solid var(--color-border-product-details-head-button);
}
</style>
