import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('orderStore', () => {
  const orderItems = ref([])

  // Подтягиваем данные заказа из LocalStorage
  const orderItemsinLocalStorage = localStorage.getItem('orderItems')

  if (orderItemsinLocalStorage) {
    orderItems.value = JSON.parse(orderItemsinLocalStorage)
  }

  const orderItemsId = computed(() => orderItems.value.map((item) => item.id))
  // const cartItemsSize = computed(() => cartItems.value.map((item) => item.size))

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

  // const totalCountCartItems = computed(() => cartItems.value.length)

  const totalOrderSum = computed(() => {
    let data = null
    if (orderItems.value.length) {
      data = orderItems.value.map((item) => Number(item.price)).reduce((a, b) => a + b)
    }
    return data
  })

  // // Используется для составления массива товаров с уникальными ID
  // const getCurrentItem = (item) => {
  //   return cartItems.value.filter((el) => el.id === item.id)
  // }

  // // Используется для составления массива товаров с уникальными ID
  // const getCurrentItemById = (id) => {
  //   return cartItems.value.filter((el) => el.id === id)
  // }

  // const increment = (id, size) => {
  //   const currentItem = cartItems.value.find((item) => item.id === id && item.size === size)
  //   currentItem.count++
  //   currentItem.price = Number(currentItem.price) * 2
  // }

  // const decrement = (id, size) => {
  //   const currentItem = cartItems.value.find((item) => item.id === id && item.size === size)
  //   if (currentItem.count > 1) {
  //     currentItem.count--
  //     currentItem.price = Number(currentItem.price) / 2
  //   }
  // }

  // const deleteItem = (id, size) => {
  //   const currentItem = cartItems.value.find((item) => item.id === id && item.size === size)
  //   cartItems.value = cartItems.value.filter((item) => item !== currentItem)
  // }

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
    addOrderItem,
    totalOrderSum,
    deleteAllItems,
    addAllCartItemsToOrder,
    // totalCountCartItems,
    // totalCartSum,
    // getCurrentItem,
    // getCurrentItemById,
    // addCartItem,
    // increment,
    // decrement,
    // deleteItem,
    // deleteAllItems,
  }
})
