<!-- eslint-disable vue/multi-word-component-names -->
<!-- CrossovkyView -->
<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <app-page class="container">
      <app-left>
        <!-- <AppFilterBox
        title="Бренды"
        :brandList="brandList.value"
        v-model:modelValue="selectedBrands"
      /> -->

        <!-- Фильтр по брендам -->
        <div class="filter-box">
          <p class="filter-title">Бренды</p>
          <ul class="filter-checkbox-list">
            <li class="filter-checkbox-item" v-for="(item, index) in brandList.value" :key="index">
              <input
                type="checkbox"
                :id="item"
                :value="item"
                v-model="selectedBrands"
                class="checkbox-input"
              />
              <label for="item" class="checkbox-label">{{ item }}</label>
            </li>
          </ul>
        </div>

        <!-- Фильтр по цвету -->
        <div class="filter-box">
          <p class="filter-title">Цвет</p>
          <ul class="filter-checkbox-list">
            <li class="filter-checkbox-item" v-for="(item, index) in colorList.value" :key="index">
              <input
                type="checkbox"
                :id="item"
                :value="item"
                v-model="selectedColor"
                class="checkbox-input"
              />
              <label for="item" class="checkbox-label">{{ colorNameFormater(item) }}</label>
            </li>
          </ul>
        </div>

        <!-- Сброс фильтров -->
        <button class="filter-reset" @click="resetFilters">
          <img src="/icons/icon-close-filters.svg" alt="Сбросить фильтры" />
          <p class="filter-reset-title">Сбросить все фильтры</p>
        </button>
      </app-left>
      <app-right>
        <AppHeading
          title="Кроссовки"
          :quantity="filterData.length"
          sortBox="true"
          @toggleSorting="toggleSorting"
          :isDesc="isDesc"
        />

        <AppProductList :shoes="sortProductByPrice(filterData)" />
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
import { PATH_SHOES, PATH_CROSSOVKY } from '@/mock/routes'
import AppLoader from '@/components/AppLoader.vue'
import { colorNameFormater } from '@/utils/color-name-formater'
// import AppFilterBox from '@/components/filters/AppFilterBox.vue'

const breadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Обувь',
    path: PATH_SHOES,
    content: '2',
  },
  {
    name: 'Кроссовки',
    path: PATH_CROSSOVKY,
    content: 'last',
  },
])

const crossovky = ref([])
const isDesc = ref(false)
const isLoading = ref(false)

const brandList = ref([])
brandList.value = computed(() => [...new Set(crossovky.value.map((a) => a.brand))])
const selectedBrands = ref([])

const colorList = ref([])
colorList.value = computed(() => [...new Set(crossovky.value.map((a) => a.color))])
const selectedColor = ref([])

const sortProductByPrice = (args) => {
  if (!isDesc.value) {
    return args.sort((a, b) => b.price36 - a.price36) // DESC (по убыванию)
  } else {
    return args.sort((a, b) => a.price36 - b.price36) // ASC (по возрастанию)
  }
}

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

const filterData = computed(() => {
  let dataBrands = []
  let dataColor = []
  let data = []

  // если есть выбранные чекбоксы
  if (selectedBrands.value.length) {
    // фильтруем данные
    dataBrands = crossovky.value.filter((x) => selectedBrands.value.indexOf(x.brand) != -1)
  }
  if (dataBrands && selectedColor.value.length) {
    // фильтруем данные
    dataColor = dataBrands.filter((x) => selectedColor.value.indexOf(x.color) != -1)
  }
  if (!dataBrands.length && selectedColor.value.length) {
    // фильтруем данные
    dataColor = crossovky.value.filter((x) => selectedColor.value.indexOf(x.color) != -1)
  } else {
    // иначе отдаем все данные из массива
    data = crossovky.value
  }

  if (dataBrands.length) {
    data = dataBrands
  }

  if (dataColor.length) {
    data = dataColor
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
.filter-box {
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
  border: 1px solid var(--gray-light-fivedary);
  border-radius: 5px;
  padding: 25px;
}
.filter-title {
  line-height: 20px;
  font-size: 13px;
  font-weight: 900;
  color: var(--black-primary);
  text-transform: uppercase;
}
.filter-checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 19px;
}
.filter-checkbox-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.checkbox-input {
  appearance: none;
  position: relative;
  width: 23px;
  height: 23px;
  background: var(--white-fourdary);
  border: 1px solid var(--gray-light-fourdary);
  border-radius: 3px;
  transition: 500ms;
  cursor: pointer;
}
.checkbox-input::after {
  content: '';
  position: absolute;
  width: 0px;
  height: 0px;
  background: var(--blue-primary);
  background-image: url('/icons/icon-checkbox.svg');
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 3px;
}
.checkbox-input:checked::after {
  width: 23px;
  height: 23px;
}
.checkbox-label {
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: var(--black-fourdary);
  text-transform: capitalize;
}
.filter-reset {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  border: 1px solid var(--gray-light-fivedary);
  border-radius: 5px;
  padding: 13px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.filter-reset:hover {
  border: 1px solid var(--blue-primary);
}
.filter-reset-title {
  line-height: 20px;
  font-size: 12px;
  font-weight: 800;
  color: var(--black-primary);
  text-transform: uppercase;
}
</style>
