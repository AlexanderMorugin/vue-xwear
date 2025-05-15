<template>
  <div class="details-container">
    <p class="details-description">{{ props.product.description }}</p>
    <div class="details-box">
      <p class="details-text key">
        Артикул
        <span class="details-line" v-if="!isScreenMedium">
          ------------------------------------</span
        >
      </p>
      <p class="details-text value">{{ props.id }}</p>

      <p class="details-text key">
        Категория<span class="details-line" v-if="!isScreenMedium">
          ------------------------------------</span
        >
      </p>
      <router-link :to="`/shoes/${props.product.category}`" class="details-text value link"
        >{{ props.product.category }}
        <img src="/icons/icon-arrow-details.svg" alt="Стрелка" />
      </router-link>

      <p class="details-text key">
        Бренд<span class="details-line" v-if="!isScreenMedium">
          ------------------------------------</span
        >
      </p>
      <p class="details-text value">{{ props.product.brand }}</p>

      <p class="details-text key">
        Модель<span class="details-line" v-if="!isScreenMedium">
          ------------------------------------</span
        >
      </p>
      <p class="details-text value">{{ props.product.name }}</p>

      <p class="details-text key">
        Цвет<span class="details-line" v-if="!isScreenMedium">
          ------------------------------------</span
        >
      </p>
      <p class="details-text value">{{ props.product.color }}</p>
    </div>
  </div>
</template>

<script setup>
import { useResizeMedium } from '@/use/useResizeMedium'
const { isScreenMedium } = useResizeMedium()

const props = defineProps(['product', 'id'])
</script>

<style scoped>
.details-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
}
@media (max-width: 1023px) {
  .details-container {
    gap: 33px;
    margin-top: 33px;
  }
}
@media (max-width: 767px) {
  .details-container {
    gap: 23px;
    margin-top: 23px;
  }
}
.details-description {
  line-height: 27px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: var(--color-text-product-details-description);
}
.details-box {
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;
  max-width: 475px;
}
@media (max-width: 767px) {
  .details-box {
    grid-template-columns: 1fr;
  }
}
.details-text {
  line-height: 22px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.7px;
}
.key {
  color: var(--black-fourdary);
}
.value {
  color: var(--black-fourdary);
  transition: 0.3s ease all;
}
@media (max-width: 767px) {
  .value {
    color: var(--gray-dark-primary);
    padding-bottom: 20px;
  }
}
.link {
  transition: 0.3s ease all;
}
.link:hover {
  color: var(--blue-primary);
}
.details-line {
  color: var(--white-secondary);
}
</style>
