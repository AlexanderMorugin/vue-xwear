<!-- eslint-disable vue/multi-word-component-names -->
<!-- CrossovkyView -->
<template>
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
            <input type="checkbox" :id="item" :value="item" v-model="selectedBrands" />
            <label for="item">{{ item }}</label>
          </li>
        </ul>
      </div>

      <!-- Фильтр по цвету -->
      <div class="filter-box">
        <p class="filter-title">Цвет</p>
        <ul class="filter-checkbox-list">
          <li class="filter-checkbox-item" v-for="(item, index) in colorList.value" :key="index">
            <input type="checkbox" :id="item" :value="item" v-model="selectedColor" />
            <label for="item">{{ item }}</label>
          </li>
        </ul>
      </div>
    </app-left>
    <app-right>
      <AppHeading
        title="Кроссовки"
        :quantity="filterData.length"
        sortBox="true"
        @toggleSorting="toggleSorting"
        :isDesc="isDesc"
      />
      <!-- <AppProductList :shoes="sortProductByPrice(filterData)" /> -->
      <!-- <AppProductList :shoes="filterBrandData" /> -->
      <AppProductList :shoes="sortProductByPrice(filterData)" />

      <!-- <p v-else>Кроссовок не обнаружено</p> -->
    </app-right>
  </app-page>
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
import AppFilterBox from '@/components/filters/AppFilterBox.vue'

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

  // console.log('dataBrands - ', dataBrands.length)
  // console.log('dataColor - ', dataColor.length)
  return data
})
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
  /* height: 300px; */
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
}
.filter-checkbox-item {
}
</style>
