import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
  const cartItems = ref([])

  // Подтягиваем данные корзины из LocalStorage
  const cartItemsinLocalStorage = localStorage.getItem('cartItems')

  if (cartItemsinLocalStorage) {
    cartItems.value = JSON.parse(cartItemsinLocalStorage)
  }

  const totalCountCartItems = computed(() => cartItems.value.length)

  const totalCartSum = computed(() => {
    let data = null
    if (cartItems.value.length) {
      data = cartItems.value.map((item) => Number(item.price)).reduce((a, b) => a + b)
    }
    return data
  })

  // Используется для составления массива товаров с уникальными ID
  const getCurrentItem = (item) => {
    return cartItems.value.filter((el) => el.id === item.id)
  }

  // Используется для составления массива товаров с уникальными ID
  const getCurrentItemById = (id) => {
    return cartItems.value.filter((el) => el.id === id)
  }

  const cartItemsId = computed(() => cartItems.value.map((item) => item.id))
  // const cartItemsSize = computed(() => cartItems.value.map((item) => item.size))

  const addCartItem = (item) => {
    if (cartItems.value.find((el) => el.size === item.size && el.id === item.id)) {
      return
    } else if (cartItemsId.value.find((el) => el !== item.id)) {
      cartItems.value.push(item)
    } else {
      cartItems.value.push(item)
    }
  }

  // const addALLCartItems = (items) => {
  //   cartItems.value = items
  // }

  const increment = (id, size) => {
    const currentItem = cartItems.value.find((item) => item.id === id && item.size === size)
    currentItem.count++
    currentItem.price = Number(currentItem.price) * 2
  }

  const decrement = (id, size) => {
    const currentItem = cartItems.value.find((item) => item.id === id && item.size === size)
    if (currentItem.count > 1) {
      currentItem.count--
      currentItem.price = Number(currentItem.price) / 2
    }
  }

  const deleteItem = (id, size) => {
    const currentItem = cartItems.value.find((item) => item.id === id && item.size === size)
    cartItems.value = cartItems.value.filter((item) => item !== currentItem)
  }

  const deleteAllItems = () => (cartItems.value = [])

  // Следим за изменениями в корзине и обновляем данные в LocalStorage
  watch(
    () => cartItems,
    (cartItems) => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
    },
    { deep: true },
  )

  return {
    cartItems,
    totalCountCartItems,
    totalCartSum,
    getCurrentItem,
    getCurrentItemById,
    addCartItem,
    // addALLCartItems,
    increment,
    decrement,
    deleteItem,
    deleteAllItems,
  }
})
