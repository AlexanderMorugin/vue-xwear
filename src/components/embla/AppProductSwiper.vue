<template>
  <section class="embla">
    <div class="embla__viewport" ref="emblaRef">
      <div class="embla__container">
        <div class="embla__slide">
          <div class="embla__slide__inner">Slide 1</div>
        </div>
        <div class="embla__slide">
          <div class="embla__slide__inner">Slide 2</div>
        </div>
        <div class="embla__slide">
          <div class="embla__slide__inner">Slide 3</div>
        </div>
        <div class="embla__slide">
          <div class="embla__slide__inner">Slide 4</div>
        </div>
        <div class="embla__slide">
          <div class="embla__slide__inner">Slide 5</div>
        </div>
        <div class="embla__slide">
          <div class="embla__slide__inner">Slide 6</div>
        </div>
        <div class="embla__slide">
          <div class="embla__slide__inner">Slide 7</div>
        </div>
        <div class="embla__slide">
          <div class="embla__slide__inner">Slide 8</div>
        </div>
        <div class="embla__slide">
          <div class="embla__slide__inner">Slide 9</div>
        </div>
      </div>
    </div>

    <div class="embla__buttons">
      <button @click="scrollPrev" :disabled="!canScrollPrev">Prev</button>
      <button @click="scrollNext" :disabled="!canScrollNext">Next</button>
    </div>

    <div class="embla__dots">
      <button
        v-for="(dot, index) in dots"
        @click="scrollTo(index)"
        :key="index"
        :class="{ 'embla__dot--active': selectedIndex === index }"
      >
        Dot {{ index + 1 }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

const canScrollPrev = ref(false)
const canScrollNext = ref(false)
let selectedIndex = ref(0)
let scrollNextDisabled = ref(false)
let scrollPrevDisabled = ref(false)
let dots = ref([])

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: false }, [Autoplay()])

const scrollTo = (index) => emblaApi.value?.scrollTo(index)

const onSelect = (emblaApi) => {
  selectedIndex.value = emblaApi.selectedScrollSnap()
  scrollNextDisabled.value = !emblaApi.canScrollNext()
  scrollPrevDisabled.value = !emblaApi.canScrollPrev()
}

const createDots = (emblaApi) => {
  dots.value = emblaApi.scrollSnapList()
}

function scrollNext() {
  emblaApi?.value.scrollNext()
}

function scrollPrev() {
  emblaApi?.value.scrollPrev()
}

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
  width: 100%;
  --slide-spacing: 10px;
}

.embla__viewport {
  overflow: hidden;
}

.embla__container {
  display: flex;
  margin-left: calc(var(--slide-spacing) * -1);
}

.embla__slide {
  flex: 0 0 100%;
  padding-left: var(--slide-spacing);
}

.embla__slide__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: black;
  color: white;
}

.embla__buttons {
  margin-top: 20px;
}

.embla__dots {
  margin-top: 20px;
}

.embla__dot--active {
  background-color: red;
}
</style>
