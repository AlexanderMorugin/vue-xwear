<template>
  <section class="embla">
    <div class="embla-viewport" ref="emblaRef">
      <ul class="embla-container">
        <li v-for="item in props.blogs" :key="item.id" class="embla-slide">
          <AppBlogCard :item="item" />
        </li>
      </ul>
    </div>

    <!-- Блок навигации-пагинации -->
    <div class="embla-navigation">
      <div class="embla-buttons">
        <!-- Кнопка-стрелка навигации "НАЗАД" -->
        <button
          @click="scrollPrev"
          :disabled="!canScrollPrev"
          :class="['embla-button', { 'embla-button-disabled': !canScrollPrev }]"
        >
          <img
            src="/icons/icon-carousel-arrow-black.svg"
            alt="Стрелка"
            :class="['embla-button-arrow', { 'embla-button-arrow-disabled': !canScrollPrev }]"
          />
        </button>

        <!-- Кнопки-точки пагинации -->
        <div class="embla-dots">
          <button
            v-for="(dot, index) in dots"
            @click="scrollTo(index)"
            :key="index"
            class="embla-dot-button"
          >
            <div :class="['embla-dot', { 'embla-dot-active': selectedIndex === index }]" />
          </button>
        </div>

        <!-- Кнопка-стрелка навигации "ВПЕРЕД" -->
        <button
          @click="scrollNext"
          :disabled="!canScrollNext"
          :class="['embla-button', { 'embla-button-disabled': !canScrollNext }]"
        >
          <img
            src="/icons/icon-carousel-arrow-black.svg"
            alt="Стрелка"
            :class="['embla-button-arrow-right', { 'embla-button-arrow-disabled': !canScrollNext }]"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import AppBlogCard from '@/components/blog/AppBlogCard.vue'
// import Autoplay from 'embla-carousel-autoplay'

const props = defineProps(['blogs'])

const canScrollPrev = ref(false)
const canScrollNext = ref(false)
const selectedIndex = ref(0)
const scrollNextDisabled = ref(false)
const scrollPrevDisabled = ref(false)
const dots = ref([])

const [emblaRef, emblaApi] = emblaCarouselVue(
  { align: 'start' },
  // , loop: true
  // , [Autoplay()]
)

const onSelect = (emblaApi) => {
  selectedIndex.value = emblaApi.selectedScrollSnap()
  scrollNextDisabled.value = !emblaApi.canScrollNext()
  scrollPrevDisabled.value = !emblaApi.canScrollPrev()
}

const createDots = (emblaApi) => {
  dots.value = emblaApi.scrollSnapList()
}
// Листать влево, по нажатию на стрелку Prev
const scrollNext = () => emblaApi?.value.scrollNext()

// Листать враво, по нажатию на стрелку Next
const scrollPrev = () => emblaApi?.value.scrollPrev()

// Функция перехода к слайду, по нажатию на Thumb
const scrollTo = (index) => emblaApi.value?.scrollTo(index)

function updateButtonStates(emblaApi) {
  canScrollPrev.value = emblaApi.canScrollPrev()
  canScrollNext.value = emblaApi.canScrollNext()
}

onMounted(() => {
  if (!emblaApi.value) return

  updateButtonStates(emblaApi.value)
  emblaApi.value.on('select', updateButtonStates)

  onSelect(emblaApi.value)
  createDots(emblaApi.value)

  emblaApi.value.on('select', onSelect)
  emblaApi.value.on('reInit', createDots)
})
</script>

<style scoped>
.embla {
  --slide-spacing: 31px;
}
@media (max-width: 767px) {
  .embla {
    --slide-spacing: 20px;
  }
}
.embla-viewport {
  overflow: hidden;
}
.embla-container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla-slide {
  flex: 0 0 464px;
  padding-left: var(--slide-spacing);
}
@media (max-width: 1023px) {
  .embla-slide {
    flex: 0 0 355px;
  }
}
@media (max-width: 767px) {
  .embla-slide {
    flex: 0 0 320px;
  }
}
.embla-navigation {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
@media (max-width: 1023px) {
  .embla-navigation {
    margin-top: 40px;
  }
}
.embla-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 51px;
}
@media (max-width: 767px) {
  .embla-buttons {
    gap: 25px;
  }
}
.embla-button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.embla-button-disabled {
  cursor: default;
}
.embla-button-arrow {
  height: 12px;
}
.embla-button-arrow-right {
  height: 12px;
  transform: rotate(180deg);
}
.embla-button-arrow-disabled {
  opacity: 0.3;
}
.embla-dots {
  display: flex;
  align-items: center;
  gap: 45px;
}
@media (max-width: 767px) {
  .embla-dots {
    gap: 10px;
  }
}
.embla-dot-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
}
.embla-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--black-primary);
  opacity: 0.7;
  cursor: pointer;
}
.embla-dot-active {
  width: 10px;
  height: 10px;
  opacity: 1;
  cursor: default;
}
</style>
