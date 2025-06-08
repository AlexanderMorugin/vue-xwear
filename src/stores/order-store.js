import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useOrderStore = defineStore('orderStore', () => {
  const orderItems = ref([])

  const router = useRouter()

  // Подтягиваем данные заказа из LocalStorage
  const orderItemsinLocalStorage = localStorage.getItem('orderItems')

  if (orderItemsinLocalStorage) {
    orderItems.value = JSON.parse(orderItemsinLocalStorage)
  }

  const orderItemsId = computed(() => orderItems.value.map((item) => item.id))

  const addOrderItem = (item) => {
    if (orderItems.value.find((el) => el.size === item.size && el.id === item.id)) {
      return
    } else if (orderItemsId.value.find((el) => el !== item.id)) {
      orderItems.value.push(item)
    } else {
      orderItems.value.push(item)
    }
  }

  const addAllCartItemsToOrder = (items) => {
    if (orderItems.value.length) {
      orderItems.value = orderItems.value.concat(items)
    } else {
      orderItems.value = items
    }
  }

  const increment = (id, size) => {
    const currentItem = orderItems.value.find((item) => item.id === id && item.size === size)
    currentItem.count++
    currentItem.price = Number(currentItem.price) * 2
  }

  const decrement = (id, size) => {
    const currentItem = orderItems.value.find((item) => item.id === id && item.size === size)
    if (currentItem.count > 1) {
      currentItem.count--
      currentItem.price = Number(currentItem.price) / 2
    }
  }

  const deleteOrderItem = (id, size) => {
    const currentItem = orderItems.value.find((item) => item.id === id && item.size === size)
    orderItems.value = orderItems.value.filter((item) => item !== currentItem)

    if (!orderItems.value.length) {
      router.push('/')
    }
  }

  const totalOrderSum = computed(() => {
    let data = null
    if (orderItems.value.length) {
      data = orderItems.value.map((item) => Number(item.price)).reduce((a, b) => a + b)
    }
    return data
  })

  const deleteAllItems = () => (orderItems.value = [])

  // Следим за изменениями в заказе и обновляем данные в LocalStorage
  watch(
    () => orderItems,
    (orderItems) => {
      localStorage.setItem('orderItems', JSON.stringify(orderItems.value))
    },
    { deep: true },
  )

  return {
    orderItems,
    totalOrderSum,
    addOrderItem,
    deleteAllItems,
    addAllCartItemsToOrder,
    increment,
    decrement,
    deleteOrderItem,
  }
})
