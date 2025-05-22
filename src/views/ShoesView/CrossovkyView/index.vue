<!-- eslint-disable vue/multi-word-component-names -->
<!-- CrossovkyView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="allCrossovkyBreadcrumbs" />
    <app-page class="container">
      <app-left>
        <AppFilterPrice title="Фильтр пока не работает" />
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
        <AppFilterReset @resetFilters="resetFilters" />
      </app-left>

      <Teleport to="body">
        <app-filters-menu
          v-if="isFiltersForMobileOpen"
          @closeFiltersForMobile="closeFiltersForMobile"
        >
          <!-- Фильтр по брендам -->
          <AppFilterBrands
            title="Бренды"
            :filterList="brandList.value"
            v-model:modelValue="selectedBrands"
          />
        </app-filters-menu>
      </Teleport>

      <app-right>
        <AppHeading
          title="Кроссовки"
          :quantity="filterData.length"
          sortBox="true"
          @toggleSorting="toggleSorting"
          @openFiltersForMobile="openFiltersForMobile"
          :isDesc="isDesc"
        />

        <AppProductList :products="filterData" />
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
import AppLoader from '@/components/AppLoader.vue'
import AppFilterBrands from '@/components/filters/AppFilterBrands.vue'
import AppFilterColors from '@/components/filters/AppFilterColors.vue'
import AppFilterReset from '@/components/filters/AppFilterReset.vue'
import AppFilterPrice from '@/components/filters/AppFilterPrice.vue'
import AppFiltersMenu from '@/components/filters/AppFiltersMenu.vue'
import { allCrossovkyBreadcrumbs } from '@/components/breadcrumbs/breadcrumbs-pages/all-crossovky-breadcrumbs'

const crossovky = ref([])
const isDesc = ref(false)
const isLoading = ref(false)
const isFiltersForMobileOpen = ref(false)

const brandList = ref([])
brandList.value = computed(() => [...new Set(crossovky.value.map((a) => a.brand))])
const selectedBrands = ref([])

const colorList = ref([])
colorList.value = computed(() => [...new Set(crossovky.value.map((a) => a.color))])
const selectedColor = ref([])

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
  let data = []

  // если есть выбранные чекбоксы
  if (selectedBrands.value.length) {
    dataBrands = crossovky.value.filter((x) => selectedBrands.value.indexOf(x.brand) != -1)
  }
  if (dataBrands && selectedColor.value.length) {
    dataColor = dataBrands.filter((x) => selectedColor.value.indexOf(x.color) != -1)
  }
  if (!dataBrands.length && selectedColor.value.length) {
    dataColor = crossovky.value.filter((x) => selectedColor.value.indexOf(x.color) != -1)
  } else {
    // иначе отдаем все данные из массива
    data = crossovky.value
  }

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
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 28px;
}
</style>
