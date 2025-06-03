<template>
  <form class="size-container" @submit.prevent="submit">
    <h2 class="title">EU размеры:</h2>
    <ul class="form-radio-group">
      <li>
        <div class="form-radio-group-item">
          <input type="radio" id="36" name="size" value="36" v-model="chooseSize" checked />
          <label for="36">
            <span class="size">36</span>
            <span class="price">{{ currencyFormater(props.product.price36) }}</span>
          </label>
          <AppProductSizeBadge :id="props.id" size="36" />
        </div>
      </li>
      <li>
        <div class="form-radio-group-item">
          <input type="radio" id="37" name="size" value="37" v-model="chooseSize" />
          <label for="37">
            <span class="size">37</span>
            <span class="price">{{ currencyFormater(props.product.price37) }}</span>
          </label>
          <AppProductSizeBadge :id="props.id" size="37" />
        </div>
      </li>
      <li>
        <div class="form-radio-group-item">
          <input type="radio" id="38" name="size" value="38" v-model="chooseSize" />
          <label for="38">
            <span class="size">38</span>
            <span class="price">{{ currencyFormater(props.product.price38) }}</span>
          </label>
          <AppProductSizeBadge :id="props.id" size="38" />
        </div>
      </li>
      <li>
        <div class="form-radio-group-item">
          <input type="radio" id="39" name="size" value="39" v-model="chooseSize" />
          <label for="39">
            <span class="size">39</span>
            <span class="price">{{ currencyFormater(props.product.price39) }}</span>
          </label>
          <AppProductSizeBadge :id="props.id" size="39" />
        </div>
      </li>
      <li>
        <div class="form-radio-group-item">
          <input type="radio" id="40" name="size" value="40" v-model="chooseSize" />
          <label for="40">
            <span class="size">40</span>
            <span class="price">{{ currencyFormater(props.product.price40) }}</span>
          </label>
          <AppProductSizeBadge :id="props.id" size="40" />
        </div>
      </li>
      <li>
        <div class="form-radio-group-item">
          <input type="radio" id="41" name="size" value="41" v-model="chooseSize" />
          <label for="41">
            <span class="size">41</span>
            <span class="price">{{ currencyFormater(props.product.price41) }}</span>
          </label>
          <AppProductSizeBadge :id="props.id" size="41" />
        </div>
      </li>
      <li>
        <div class="form-radio-group-item">
          <input type="radio" id="42" name="size" value="42" v-model="chooseSize" />
          <label for="42">
            <span class="size">42</span>
            <span class="price">{{ currencyFormater(props.product.price42) }}</span>
          </label>
          <AppProductSizeBadge :id="props.id" size="42" />
        </div>
      </li>
      <li>
        <div class="form-radio-group-item">
          <input type="radio" id="43" name="size" value="43" v-model="chooseSize" />
          <label for="43">
            <span class="size">43</span>
            <span class="price">{{ currencyFormater(props.product.price43) }}</span>
          </label>
          <AppProductSizeBadge :id="props.id" size="43" />
        </div>
      </li>
      <li>
        <div class="form-radio-group-item">
          <input type="radio" id="44" name="size" value="44" v-model="chooseSize" />
          <label for="44">
            <span class="size">44</span>
            <span class="price">{{ currencyFormater(props.product.price44) }}</span>
          </label>
          <AppProductSizeBadge :id="props.id" size="44" />
        </div>
      </li>
      <li>
        <div class="form-radio-group-item">
          <input type="radio" id="45" name="size" value="45" v-model="chooseSize" />
          <label for="45">
            <span class="size">45</span>
            <span class="price">{{ currencyFormater(props.product.price45) }}</span>
          </label>
          <AppProductSizeBadge :id="props.id" size="45" />
        </div>
      </li>
    </ul>
    <div class="bottom-container">
      <div class="choose-box">
        <span class="choose-size">Размер - {{ chooseSize ? chooseSize : '36' }}</span>
        <span class="choose-price">{{ currencyFormater(setPrice()) }}</span>
      </div>
      <button class="btn-submit">
        Добавить в корзину
        <img src="/icons/icon-arrow-white.svg" alt="Стрелка" />
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { currencyFormater } from '@/utils/currency-formater'
import AppProductSizeBadge from './AppProductSizeBadge.vue'
import { useCartStore } from '@/stores/cart-store'

const cartStore = useCartStore()

const props = defineProps(['product', 'id'])

const chooseSize = ref(null)
const submitPrice = ref(null)

const setPrice = () => {
  if (chooseSize.value === '37') {
    return (submitPrice.value = props.product.price37)
  } else if (chooseSize.value === '38') {
    return (submitPrice.value = props.product.price38)
  } else if (chooseSize.value === '39') {
    return (submitPrice.value = props.product.price39)
  } else if (chooseSize.value === '40') {
    return (submitPrice.value = props.product.price40)
  } else if (chooseSize.value === '41') {
    return (submitPrice.value = props.product.price41)
  } else if (chooseSize.value === '42') {
    return (submitPrice.value = props.product.price42)
  } else if (chooseSize.value === '43') {
    return (submitPrice.value = props.product.price43)
  } else if (chooseSize.value === '44') {
    return (submitPrice.value = props.product.price44)
  } else if (chooseSize.value === '45') {
    return (submitPrice.value = props.product.price45)
  } else {
    return (submitPrice.value = props.product.price36)
  }
}

const getCartItemsId = computed(() => cartStore.cartItems.map((item) => item.id))
const getCartItemsSize = computed(() => cartStore.cartItems.map((item) => item.size))

const submit = () => {
  const data = {
    id: props.id,
    category: props.product.category,
    brand: props.product.brand,
    name: props.product.name,
    size: chooseSize.value ? chooseSize.value : '36',
    price: submitPrice.value,
    // description: props.product.description,
    color: props.product.color,
    imageOneSmall: props.product.imageOneSmall,
    count: 1,
    // imageOneBig: props.product.imageOneBig,
    // imageTwoSmall: props.product.imageTwoSmall,
    // imageTwoBig: props.product.imageTwoBig,
    // imageThreeSmall: props.product.imageThreeSmall,
    // imageThreeBig: props.product.imageThreeBig,
    // isFavorite: props.product.isFavorite,
  }

  cartStore.addCartItem(data)
}
</script>

<style scoped>
.size-container {
  display: flex;
  flex-direction: column;
  padding-top: 13px;
}
@media (max-width: 767px) {
  .size-container {
    padding-top: 31px;
  }
}
.title {
  line-height: 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-product-size-title);
  text-transform: uppercase;
}
.form-radio-group {
  display: flex;
  column-gap: 10px;
  row-gap: 13px;
  flex-wrap: wrap;
  padding-top: 13px;
}
@media (max-width: 1023px) {
  .form-radio-group {
    column-gap: 5px;
    row-gap: 5px;
    padding-top: 15px;
  }
}
@media (max-width: 767px) {
  .form-radio-group {
    padding-top: 13px;
  }
}
.form-radio-group-item {
  position: relative;
}
.form-radio-group input[type='radio'] {
  display: none;
}
.form-radio-group-item label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 82px;
  border: 1px solid var(--color-border-product-size);
  border-radius: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  transition: 0.3s ease all;
}
@media (max-width: 1023px) {
  .form-radio-group-item label {
    width: 64px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
@media (max-width: 767px) {
  .form-radio-group-item label {
    padding-top: 8px;
    padding-bottom: 8px;
  }
}
.size {
  line-height: 15px;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-product-size);
  transition: 0.5s ease all;
}
@media (max-width: 1023px) {
  .size {
    font-size: 14px;
  }
}
.price {
  line-height: 15px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-product-price);
  transition: 0.8s ease all;
}

/* Checked */
.form-radio-group input:checked + label {
  background: var(--color-border-product-size-hover);
  border: 1px solid var(--color-border-product-size-hover);
}
.form-radio-group input:checked + label .size {
  color: var(--color-text-product-size-active);
}
.form-radio-group input:checked + label .price {
  color: var(--color-text-product-size-active);
}

/* Hover */
.form-radio-group label:hover {
  border: 1px solid var(--color-border-product-size-hover);
}

.bottom-container {
  display: flex;
  align-items: center;
  gap: 34px;
  padding-top: 29px;
}
@media (max-width: 1023px) {
  .bottom-container {
    padding-top: 20px;
  }
}
@media (max-width: 767px) {
  .bottom-container {
    justify-content: flex-end;
    padding-top: 25px;
  }
}
.choose-box {
  display: flex;
  flex-direction: column;
}
.choose-price {
  line-height: 24px;
  font-size: 20px;
  font-weight: 400;
  color: var(--color-text-product-choose-price);
}
@media (max-width: 1023px) {
  .choose-price {
    line-height: 20px;
    font-size: 14px;
  }
}
@media (max-width: 767px) {
  .choose-price {
    line-height: 16px;
  }
}
.choose-size {
  line-height: 24px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-product-choose-size);
  text-transform: uppercase;
}
.btn-submit {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
  border-radius: 5px;
  background: var(--color-background-product-choose-button);
  line-height: 20px;
  font-size: 12px;
  font-weight: 800;
  color: var(--color-text-product-choose-button);
  text-transform: uppercase;
  padding: 23px 27px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.btn-submit:hover {
  background: var(--color-background-product-choose-button-hover);
}
@media (max-width: 1023px) {
  .btn-submit {
    gap: 14px;
    font-size: 10px;
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media (max-width: 767px) {
  .btn-submit {
    gap: 23px;
    padding: 15px 12px;
  }
}
</style>
