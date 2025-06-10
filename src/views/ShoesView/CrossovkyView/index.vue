<!-- eslint-disable vue/multi-word-component-names -->
<!-- CrossovkyView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="allCrossovkyBreadcrumbs" />
    <app-page tag="main" class="container split">
      <!-- Если Десктоп то колонка слева AppLeft, если Мобайл то вызываемое меню AppFiltersMenu -->
      <component
        :is="isScreenLarge ? AppFiltersMenu : AppLeft"
        :isFiltersForMobileOpen="isFiltersForMobileOpen"
        @closeFiltersForMobile="closeFiltersForMobile"
        @resetFilters="resetFilters"
      >
        <!-- Фильтр по цене -->
        <AppFilterPrice
          title="Фильтр по цене"
          v-model:minPrice="minPrice"
          v-model:maxPrice="maxPrice"
        />

        <!-- Фильтр по брендам -->
        <AppFilterBrands
          title="Бренды"
          :filterList="brandList.value"
          v-model:modelValue="selectedBrands"
        />
        <!-- Фильтр по цвету -->
        <AppFilterColors
          title="Цвет"
          :filterList="colorList.value"
          v-model:modelValue="selectedColor"
        />
        <!-- Сброс фильтров -->
        <AppFilterReset @resetFilters="resetFilters" v-if="!isScreenMedium" />
      </component>

      <app-right>
        <AppHeading
          title="Кроссовки"
          :quantity="filterData.length"
          sortBox="true"
          filters="true"
          @toggleSorting="toggleSorting"
          @openFiltersForMobile="openFiltersForMobile"
          :isDesc="isDesc"
          fromPage="productPage"
        />

        <AppProductList v-if="filterData.length" :products="filterData" fromPage="productPage" />
        <AppProductNotFound v-else />
      </app-right>
    </app-page>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import AppPage from '@/layouts/AppPage.vue'
import AppLeft from '@/layouts/AppLeft.vue'
import AppRight from '@/layouts/AppRight.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppBreadcrumbs from '@/components/breadcrumbs/AppBreadcrumbs.vue'
import AppProductList from '@/components/product/AppProductList.vue'
import AppProductNotFound from '@/components/product/AppProductNotFound.vue'
import AppLoader from '@/components/loader/AppLoader.vue'
import AppFilterBrands from '@/components/filters/AppFilterBrands.vue'
import AppFilterColors from '@/components/filters/AppFilterColors.vue'
import AppFilterReset from '@/components/filters/AppFilterReset.vue'
import AppFilterPrice from '@/components/filters/AppFilterPrice.vue'
import AppFiltersMenu from '@/components/filters/AppFiltersMenu.vue'
import { allCrossovkyBreadcrumbs } from '@/components/breadcrumbs/breadcrumbs-pages/all-crossovky-breadcrumbs'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useResizeMedium } from '@/use/useResizeMedium'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()
const { isScreenMedium } = useResizeMedium()

const crossovky = ref([])
const isDesc = ref(false)
const isLoading = ref(false)
const isFiltersForMobileOpen = ref(false)

// Фильтрация
const brandList = ref([])
brandList.value = computed(() => [...new Set(crossovky.value.map((a) => a.brand))])
const selectedBrands = ref([])

const colorList = ref([])
colorList.value = computed(() => [...new Set(crossovky.value.map((a) => a.color))])
const selectedColor = ref([])

// Находим в массиве минимальную и максимальную цену
// const minPrice36 = computed(() => Math.min(...crossovky.value.map((item) => item.price36)))
// const maxPrice36 = computed(() => Math.max(...crossovky.value.map((item) => item.price36)))

const minPrice = ref(0)
const maxPrice = ref(20000)

onMounted(async () => {
  try {
    isLoading.value = true

    const { data } = await axios.get('https://vue-xwear-default-rtdb.firebaseio.com/shoes.json')

    if (data) {
      crossovky.value = Object.keys(data)
        .map((key) => {
          return {
            id: key,
            ...data[key],
          }
        })
        .filter((item) => item.category === 'crossovky')
    }

    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
})

const toggleSorting = () => {
  isDesc.value = !isDesc.value
}

const openFiltersForMobile = () => {
  isFiltersForMobileOpen.value = true
}

const closeFiltersForMobile = () => {
  isFiltersForMobileOpen.value = false
}

const filterData = computed(() => {
  let dataBrands = []
  let dataColor = []
  let dataPrice = []
  let data = []
  const priceValues = minPrice.value > 0 || maxPrice.value < 20000

  // Фильтр Бренда один
  if (selectedBrands.value.length) {
    dataBrands = crossovky.value.filter((x) => selectedBrands.value.indexOf(x.brand) != -1)
  }
  // Фильтр Бренда + фильтр Цвета
  if (dataBrands.length && selectedColor.value.length) {
    dataColor = dataBrands.filter((x) => selectedColor.value.indexOf(x.color) != -1)
  }

  // Фильтр Бренда + фильтр Цены
  if (dataBrands.length && priceValues) {
    dataPrice = dataBrands
      .filter((x) => selectedBrands.value.indexOf(x.brand) != -1)
      .filter((item) => item.price36 >= minPrice.value && item.price36 <= maxPrice.value)
    if (!dataPrice.length) {
      return (dataPrice = [])
    }
  }

  // Фильтр Бренда + фильтр Цвета + фильтр Цены
  if (dataBrands.length && selectedColor.value.length && priceValues) {
    dataPrice = dataBrands
      .filter((x) => selectedColor.value.indexOf(x.color) != -1)
      .filter((item) => item.price36 >= minPrice.value && item.price36 <= maxPrice.value)
  }
  // Фильтр Цвета один
  if (!dataBrands.length && selectedColor.value.length) {
    dataColor = crossovky.value.filter((x) => selectedColor.value.indexOf(x.color) != -1)
  }
  // Фильтр Цвета + фильтр Цены
  if (dataColor.length && priceValues) {
    dataPrice = dataColor
      .filter((x) => selectedColor.value.indexOf(x.color) != -1)
      .filter((item) => item.price36 >= minPrice.value && item.price36 <= maxPrice.value)
    if (!dataPrice.length) {
      return (dataPrice = [])
    }
  }
  // Фильтр Цены один
  if (priceValues && !dataBrands.length && !dataColor.length) {
    dataPrice = crossovky.value.filter(
      (item) => item.price36 >= minPrice.value && item.price36 <= maxPrice.value,
    )
  } else {
    // иначе отдаем все данные из массива
    data = crossovky.value
  }

  // Условия сортировки
  if (dataBrands.length && !isDesc.value) {
    data = dataBrands.sort((a, b) => b.price36 - a.price36) // DESC (по убыванию)
  }
  if (dataBrands.length && isDesc.value) {
    data = dataBrands.sort((a, b) => a.price36 - b.price36) // ASC (по возрастанию)
  }
  if (dataColor.length && !isDesc.value) {
    data = dataColor.sort((a, b) => b.price36 - a.price36) // DESC (по убыванию)
  }
  if (dataColor.length && isDesc.value) {
    data = dataColor.sort((a, b) => a.price36 - b.price36) // ASC (по возрастанию)
  }
  if (dataPrice.length && !isDesc.value) {
    data = dataPrice.sort((a, b) => b.price36 - a.price36) // DESC (по убыванию)
  }
  if (dataPrice.length && isDesc.value) {
    data = dataPrice.sort((a, b) => a.price36 - b.price36) // ASC (по возрастанию)
  }
  if (data.length && !isDesc.value) {
    data = data.sort((a, b) => b.price36 - a.price36) // DESC (по убыванию)
  }
  if (data.length && isDesc.value) {
    data = data.sort((a, b) => a.price36 - b.price36) // ASC (по возрастанию)
  }

  return data
})

const resetFilters = () => {
  selectedBrands.value = []
  selectedColor.value = []
  minPrice.value = 0
  maxPrice.value = 20000
}
</script>

<style scoped></style>
