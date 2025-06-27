<template>
  <div class="product-container">
    <div class="image-container">
      <div class="image-box">
        <img :src="currentImage" :alt="props.product.name" class="image" @click="openModal" />
        <AppFavoriteButton :item="currentItemWithId" />
      </div>
      <ul class="image-thumbs">
        <li class="image-thumbs-item" :class="{ 'image-thumbs-item-active': isOneActive }">
          <button class="image-thumbs-button" @click="setShowImage('one')">
            <img :src="props.product.imageOneSmall" :alt="props.product.name" class="image-thumb" />
          </button>
        </li>
        <li class="image-thumbs-button" :class="{ 'image-thumbs-item-active': isTwoActive }">
          <button class="image-thumbs-button" @click="setShowImage('two')">
            <img :src="props.product.imageTwoSmall" :alt="props.product.name" class="image-thumb" />
          </button>
        </li>
        <li class="image-thumbs-button" :class="{ 'image-thumbs-item-active': isThreeActive }">
          <button class="image-thumbs-button" @click="setShowImage('three')">
            <img
              :src="props.product.imageThreeSmall"
              :alt="props.product.name"
              class="image-thumb"
            />
          </button>
        </li>
      </ul>
    </div>

    <div class="details">
      <h1 class="title">
        {{ categoryNameFormater(props.product.category) }} {{ props.product.name }}
      </h1>
      <AppProductSizes :product="props.product" :id="props.currentId" />
    </div>
  </div>

  <AppCurrentProductDetails :product="props.product" :id="props.currentId" />

  <Teleport to="body">
    <AppModal
      v-if="isModalOpen"
      @closeModal="closeModal"
      :image="currentModalImage"
      :title="`${categoryNameFormater(props.product.category)} ${props.product.name}`"
    />
  </Teleport>
</template>
<script setup>
import { watch, onMounted, ref } from 'vue'
import AppFavoriteButton from '@/components/product/AppFavoriteButton.vue'
import AppProductSizes from '@/components/product/AppProductSizes.vue'
import AppCurrentProductDetails from '@/components/product/AppCurrentProductDetails.vue'
import { categoryNameFormater } from '@/utils/category-name-formater'
import AppModal from '@/components/modal/AppModal.vue'

const props = defineProps(['product', 'currentId'])

const currentImage = ref(props.product.imageOneNormal)
// const currentImage = computed(() => props.product.imageOneNormal)
const currentModalImage = ref(props.product.imageOneBig)
const isOneActive = ref(true)
const isTwoActive = ref(false)
const isThreeActive = ref(false)

const isModalOpen = ref(false)

const openModal = () => (isModalOpen.value = true)

const closeModal = () => (isModalOpen.value = false)

const setShowImage = (args) => {
  if (args === 'one') {
    currentImage.value = props.product.imageOneNormal
    currentModalImage.value = props.product.imageOneBig
    isOneActive.value = true
    isTwoActive.value = false
    isThreeActive.value = false
  }
  if (args === 'two') {
    currentImage.value = props.product.imageTwoNormal
    currentModalImage.value = props.product.imageTwoBig
    isOneActive.value = false
    isTwoActive.value = true
    isThreeActive.value = false
  }
  if (args === 'three') {
    currentImage.value = props.product.imageThreeNormal
    currentModalImage.value = props.product.imageThreeBig
    isOneActive.value = false
    isTwoActive.value = false
    isThreeActive.value = true
  }
}

const currentItemWithId = ref(props.product)

const setItemWithId = () => {
  return (currentItemWithId.value['id'] = props.currentId)
}

watch(
  () => props.product,
  async (newProduct) => {
    await setShowImage('one')(newProduct)
  },
)

onMounted(() => {
  setItemWithId()
})
</script>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  padding-top: 17px;
}
@media (max-width: 1023px) {
  .product-container {
    column-gap: 20px;
    padding-top: 9px;
  }
}
@media (max-width: 767px) {
  .product-container {
    grid-template-columns: 1fr;
    row-gap: 31px;
  }
}
.image-container {
  display: flex;
  flex-direction: column;
}
.image-box {
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 664px;
  height: 489px;
  overflow: hidden;
}
@media (max-width: 1023px) {
  .image-box {
    height: 227px;
  }
}
@media (max-width: 767px) {
  .image-box {
    height: 283px;
  }
}
.image {
  width: 100%;
  object-fit: cover;
}
.image-thumbs {
  display: flex;
  gap: 25px;
  width: fit-content;
  border-bottom: 1px solid var(--gray-light-fourdary);
}
@media (max-width: 767px) {
  .image-thumbs {
    gap: 10px;
  }
}
.image-thumbs-item {
  height: 106px;
  cursor: pointer;
}
@media (max-width: 1023px) {
  .image-thumbs-item {
    height: 96px;
  }
}
@media (max-width: 767px) {
  .image-thumbs-item {
    height: 86px;
  }
}
.image-thumbs-item-active {
  border-bottom: 1px solid var(--blue-primary);
}
.image-thumbs-button {
  height: 106px;
  cursor: pointer;
}
@media (max-width: 1023px) {
  .image-thumbs-button {
    height: 96px;
  }
}
@media (max-width: 767px) {
  .image-thumbs-button {
    height: 86px;
  }
}
.image-thumb {
  width: 105px;
}
@media (max-width: 1023px) {
  .image-thumb {
    width: 95px;
  }
}
@media (max-width: 767px) {
  .image-thumb {
    width: 85px;
  }
}
.details {
  width: 100%;
}
.title {
  line-height: 42px;
  font-size: 31px;
  font-weight: 900;
  color: var(--color-text-product-title);
}
@media (max-width: 1023px) {
  .title {
    line-height: 29px;
    font-size: 25px;
  }
}
@media (max-width: 767px) {
  .title {
    line-height: 30px;
    font-size: 19px;
  }
}
</style>
