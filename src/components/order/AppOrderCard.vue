<template>
  <div class="order">
    <div v-if="props.fromPage">
      <h3 class="order-title">Заказ #4353</h3>
      <div class="order-subtitle">
        Был оформлен&nbsp;
        <span class="order-subtitle-span">27 Июня в 12:34</span>
        &nbsp;- статус заказа
        <span class="order-subtitle-status">Отправлен</span>
      </div>
    </div>

    <!-- Таблица -->
    <div class="order-items">
      <div class="order-item order-item-top">
        <span class="order-item-top-name">Товар</span>
        <span class="order-item-top-name">Итого</span>
      </div>
      <ul>
        <li
          v-for="(item, index) in props.orderStore.orderItems"
          :key="index"
          class="order-item order-item-product"
        >
          <router-link
            :to="`${PATH_SHOES}/${item.category}/${item.id}`"
            class="order-item-product-link"
          >
            <img :src="item.imageOneSmall" :alt="item.name" class="order-item-product-image" />

            <div class="order-item-product-text-block">
              <span class="order-item-product-name"
                >{{ categoryNameFormater(item.category) }} {{ item.name }}</span
              >
              <div class="order-item-product-details">
                <div>
                  Цвет:
                  <span class="order-item-product-details-accent">{{
                    colorNameFormater(item.color)
                  }}</span>
                </div>
                <div>
                  Размер: <span class="order-item-product-details-accent">{{ item.size }}</span>
                </div>
                <div>
                  Количество:
                  <span class="order-item-product-details-accent">{{ item.count }}</span>
                </div>
              </div>
            </div>
          </router-link>
          <span class="order-item-product-price">{{ currencyFormater(item.price) }}</span>
        </li>
      </ul>
      <ul>
        <li class="order-item order-item-product">
          <span class="order-item-bottom-name">Всего</span>
          <span class="order-item-bottom-price">{{
            currencyFormater(orderStore.totalOrderSum)
          }}</span>
        </li>
        <li class="order-item order-item-product">
          <span class="order-item-bottom-name">Скидка</span>
          <span class="order-item-bottom-price">{{ discount }} %</span>
        </li>
        <li class="order-item order-item-product">
          <span class="order-item-bottom-name">Доставка</span>
          <span class="order-item-bottom-price">{{ currencyFormater(delivery) }}</span>
        </li>
      </ul>
      <div class="order-item order-item-product">
        <span class="order-item-total-name">Итого</span>
        <span class="order-item-total-price">{{ currencyFormater(totalSum) }}</span>
      </div>
    </div>
  </div>

  <!-- <AddressCard number="1" /> -->
</template>

<script setup>
import { ref, computed } from 'vue'
import { PATH_SHOES } from '@/mock/routes'
// import AddressCard from '@/components/profile/AddressCard.vue'
import { categoryNameFormater } from '@/utils/category-name-formater'
import { colorNameFormater } from '@/utils/color-name-formater'
import { currencyFormater } from '@/utils/currency-formater'

const props = defineProps(['orderStore', 'fromPage'])

const discount = ref(20)
const delivery = ref(500)

const totalSum = computed(() => {
  const discountSum = (props.orderStore.totalOrderSum * discount.value) / 100
  return props.orderStore.totalOrderSum - discountSum + delivery.value
})
</script>

<style scoped>
.order {
  border: 1px solid var(--white-sixdary);
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 36px;
}
@media (max-width: 767px) {
  .order {
    padding: 10px;
  }
}
.order-title {
  font-weight: 700;
  font-size: 17px;
  line-height: 30px;
  color: var(--black-primary);
}
.order-subtitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: var(--gray-semi-secondary);
}
.order-subtitle-span {
  font-weight: 700;
  color: var(--black-sixdary);
}
.order-subtitle-status {
  width: fit-content;
  border-radius: 5px;
  border: 1px solid var(--gray-semi-thirdary);
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: var(--green-secondary);
  padding: 10px 13px;
  margin-left: 10px;
}
.order-items {
  display: flex;
  flex-direction: column;
  padding-top: 22px;
}
.order-item {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 16px;
  width: 100%;
  border-bottom: 1px solid var(--gray-semi-fourdary);
}
@media (max-width: 767px) {
  .order-item {
    align-items: flex-start;
  }
}
.order-item:last-child {
  border-bottom: none;
}
.order-item-top {
  height: 44px;
}
.order-item-product {
  padding-top: 20px;
  padding-bottom: 20px;
}
.order-item-product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
/* @media (max-width: 767px) {
  .order-item-product-image {
    width: 50px;
    height: 50px;
  }
} */
.order-item-top-name {
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 1%;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--gray-dark-sevendary);
}
.order-item-product-link {
  display: flex;
  align-items: center;
  gap: 10px;
}
@media (max-width: 767px) {
  .order-item-product-link {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
}
.order-item-product-text-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.order-item-product-name {
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: var(--gray-dark-sevendary);
  transition: 0.3s ease all;
}
.order-item-product-link:hover .order-item-product-name {
  color: var(--blue-primary);
}
.order-item-product-details {
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1%;
  vertical-align: middle;
  color: var(--gray-semi-fivedary);
}
/* @media (max-width: 767px) {
  .order-item-product-details {
    flex-direction: column;
  }
} */
.order-item-product-details-accent {
  font-weight: 600;
  font-size: 14px;
  color: var(--black-thirdary);
}
.order-item-product-price {
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--black-primary);
}
.order-item-bottom-name {
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 1%;
  vertical-align: middle;
  color: var(--gray-dark-sevendary);
}
.order-item-bottom-price {
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0%;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--black-primary);
}
.order-item-total-name {
  font-weight: 700;
  font-size: 19px;
  line-height: 30px;
  letter-spacing: 1%;
  vertical-align: middle;
  color: var(--gray-dark-sevendary);
}
.order-item-total-price {
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0%;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--black-primary);
}
</style>
