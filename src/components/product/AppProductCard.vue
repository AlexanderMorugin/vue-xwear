<template>
  <div class="product-card">
    <!-- Бейджи-Absolut сверху на карточке товара -->
    <!-- Бейдж-звездочка Избранные -->
    <!-- <AppFavoriteButton :isFavorite="props.item.isFavorite" :id="props.item" /> -->
    <AppFavoriteButton :item="props.item" />
    <!-- Бейдж с размером показывается только если товар добавлен в корзину -->
    <AppProductListBadgeSize v-if="currentCartItem.length" :currentCartItem="currentCartItem" />

    <img :src="props.item.imageOneSmall" alt="product" class="image" />
    <p class="name">{{ props.item.name }}</p>
    <span class="price">от {{ currencyFormater(props.item.price36) }}</span>

    <!-- Роут на конкретный товар, для страницы "Избранные" из Профиля или "Корзины"-->
    <router-link
      v-if="props.fromPage === 'profileFavorite' || props.fromPage === 'cartPage'"
      :to="`${PATH_SHOES}/${props.item.category}/${props.item.id}`"
      class="product-link"
    ></router-link>

    <!-- Роут на конкретный товар, для страниц товаров "CrossovkyView" или "KedyView"-->
    <router-link
      v-if="props.fromPage === 'productPage'"
      :to="`${props.item.category}/${props.item.id}`"
      class="product-link"
    ></router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppFavoriteButton from '@/components/product/AppFavoriteButton.vue'
import { currencyFormater } from '@/utils/currency-formater'
import { PATH_SHOES } from '@/mock/routes'
import { useCartStore } from '@/stores/cart-store'
import AppProductListBadgeSize from './AppProductListBadgeSize.vue'

const props = defineProps(['item', 'fromPage'])

const cartStore = useCartStore()

const currentCartItem = computed(() => cartStore.getCurrentItem(props.item))
</script>

<style scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 318px;
}
.image {
  width: 100%;
}
.name {
  line-height: 28px;
  font-size: 19px;
  font-weight: 700;
  color: var(--color-text-card-name);
  padding-top: 10px;
}
@media (max-width: 767px) {
  .name {
    line-height: 18px;
    font-size: 14px;
  }
}
.price {
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text-card-price);
}
@media (max-width: 767px) {
  .price {
    font-size: 12px;
  }
}
.product-link {
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  height: 85%;
  z-index: 10;
}
@media (max-width: 590px) {
  .product-link {
    top: 35px;
  }
}
.product-cart-badge {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
