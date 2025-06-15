<template>
  <router-link :to="`${PATH_SHOES}/${item.category}/${item.id}`" class="order-item-product-link">
    <img :src="item.imageOneSmall" :alt="item.name" class="order-item-product-image" />

    <div class="order-item-product-text-block">
      <span class="order-item-product-name"
        >{{ categoryNameFormater(item.category) }} {{ item.name }}</span
      >
      <div class="order-item-product-details">
        <div>
          Цвет:
          <span class="order-item-product-details-accent">{{ colorNameFormater(item.color) }}</span>
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

  <div class="order-item-product-price-box">
    <!-- Счетчик увеличинения и уменьшения товара -->
    <AppCounter
      v-if="props.fromPage !== 'profileServerOrder'"
      :item="item"
      @decrement="props.orderStore.decrement(item.id, item.size)"
      @increment="props.orderStore.increment(item.id, item.size)"
    />
    <span class="order-item-product-price">{{ currencyFormater(item.price) }}</span>
  </div>

  <div v-if="props.fromPage !== 'profileServerOrder'">
    <!-- Кнопка "Удалить" в верхнем правом углу карточки товара -->
    <AppOrderDeleteButton @openOrderDeleteModal="openOrderDeleteModal" />
    <!-- Модалка удаления -->
    <AppOrderDeleteModal
      v-if="isOrderDeleteModalOpen"
      title="Удалить товар из заказа?"
      @closeOrderDeleteModal="closeOrderDeleteModal"
      @deleteOrder="deleteOrderItem(item.id, item.size)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PATH_SHOES } from '@/mock/routes'
import { categoryNameFormater } from '@/utils/category-name-formater'
import { colorNameFormater } from '@/utils/color-name-formater'
import { currencyFormater } from '@/utils/currency-formater'
import AppCounter from '@/components/counter/AppCounter.vue'
import AppOrderDeleteButton from '@/components/order/AppOrderDeleteButton.vue'
import AppOrderDeleteModal from './AppOrderDeleteModal.vue'

const props = defineProps(['item', 'orderStore', 'fromPage'])

const isOrderDeleteModalOpen = ref(false)

const openOrderDeleteModal = () => (isOrderDeleteModalOpen.value = true)
const closeOrderDeleteModal = () => (isOrderDeleteModalOpen.value = false)

const deleteOrderItem = (id, size) => {
  props.orderStore.deleteOrderItem(id, size)
  closeOrderDeleteModal()
}
</script>

<style scoped>
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
.order-item-product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
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
.order-item-product-details-accent {
  font-weight: 600;
  font-size: 14px;
  color: var(--black-thirdary);
}
.order-item-product-price-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.order-item-product-price {
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  vertical-align: middle;
  text-transform: uppercase;
  color: var(--black-primary);
}
</style>
