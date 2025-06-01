<template>
  <div class="cart-product-card">
    <div class="cart-product-sum-box">
      <span class="cart-product-sum">{{ currencyFormater(sum) }}</span>
      <div class="cart-product-size">Размер: <span class="cart-product-size-number">42</span></div>
    </div>
    <AppCartDeleteButton />
    <img :src="props.item.imageOneSmall" alt="product" class="cart-image" />

    <span class="cart-product-brand">{{ props.item.brand }}</span>
    <p class="cart-product-name">
      {{ categoryNameFormater(props.item.category) }} - {{ props.item.name }}
    </p>

    <router-link
      :to="`${PATH_SHOES}/${props.item.category}/${props.item.id}`"
      class="cart-product-link"
    ></router-link>
  </div>

  <div class="cart-product-counter-box">
    <div class="cart-product-counter">
      <button class="cart-product-count" @click="handleDecrement">&#8722;</button>
      <span class="cart-product-quantity">{{ quantity }}</span>
      <button class="cart-product-count" @click="handleIncrement">&#43;</button>
    </div>
    <button class="cart-product-button">Купить</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AppCartDeleteButton from '@/components/cart/AppCartDeleteButton.vue'
import { currencyFormater } from '@/utils/currency-formater'
import { categoryNameFormater } from '@/utils/category-name-formater'
import { PATH_SHOES } from '@/mock/routes'

const props = defineProps(['item', 'fromPage'])

const quantity = ref(1)
const sum = computed(() => props.item.price36 * quantity.value)

const handleIncrement = () => quantity.value++

const handleDecrement = () => {
  if (quantity.value > 1) {
    quantity.value--
  } else {
    quantity.value = null
  }
}
</script>

<style scoped>
.cart-product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 318px;
}
.cart-product-sum-box {
  position: absolute;
  top: 33px;
  left: 25px;
  z-index: 10;
}
@media (max-width: 767px) {
  .cart-product-sum-box {
    top: 0;
    left: 0;
  }
}
.cart-product-sum {
  line-height: 28px;
  font-size: 19px;
  font-weight: 700;
  color: var(--color-text-card-name);
}
@media (max-width: 767px) {
  .cart-product-sum {
    top: 15px;
    left: 15px;
    line-height: 18px;
    font-size: 14px;
  }
}
.cart-product-size {
  line-height: 16px;
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-dark-fourdary);
}
.cart-product-size-number {
  line-height: 18px;
  font-size: 14px;
  font-weight: 600;
  color: var(--black-thirdary);
}
.cart-image {
  width: 100%;
}
.cart-product-brand {
  line-height: 28px;
  font-size: 19px;
  font-weight: 500;
  color: var(--black-thirdary);
  text-transform: capitalize;
}
@media (max-width: 767px) {
  .cart-product-brand {
    line-height: 18px;
    font-size: 14px;
  }
}
.cart-product-name {
  height: 48px;
  line-height: 28px;
  font-size: 19px;
  font-weight: 500;
  color: var(--black-thirdary);
  overflow: hidden;
}
@media (max-width: 767px) {
  .cart-product-name {
    /* height: 36px; */
    line-height: 18px;
    font-size: 14px;
  }
}
.cart-product-counter-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  /* margin-top: 20px; */
}
.cart-product-counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  /* width: fit-content; */
}
.cart-product-count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white-primary);
  border-radius: 50%;
  border: 1px solid var(--gray-semi-fourdary);
  width: 28px;
  height: 28px;
  line-height: 18px;
  font-size: 18px;
  font-weight: 500;
  color: var(--black-thirdary);
  cursor: pointer;
  transition: 0.3s ease all;
}
@media (max-width: 767px) {
  .cart-product-count {
    width: 22px;
    height: 22px;
  }
}
.cart-product-count:hover {
  border: 1px solid var(--blue-primary);
}
.cart-product-quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: var(--blue-primary); */
  border-radius: 5px;
  border: 1px solid transparent;
  width: 32px;
  height: 28px;
  line-height: 16px;
  font-size: 16px;
  font-weight: 500;
  color: var(--black-thirdary);
}
@media (max-width: 767px) {
  .cart-product-quantity {
    width: 32px;
    height: 22px;
    line-height: 14px;
    font-size: 14px;
  }
}
.cart-product-link {
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  height: 85%;
  z-index: 10;
}
@media (max-width: 590px) {
  .cart-product-link {
    top: 35px;
  }
}
.cart-product-button {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: var(--black-primary); */
  border: 1px solid var(--gray-dark-fourdary);
  border-radius: 5px;
  width: fit-content;
  height: 42px;
  line-height: 16px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  /* color: var(--white-primary); */
  color: var(--black-primary);
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.3s ease all;
}
@media (max-width: 767px) {
  .cart-product-button {
    height: 32px;
    line-height: 14px;
    font-size: 14px;
  }
}
.cart-product-button:hover {
  background: var(--blue-primary);
}
</style>
