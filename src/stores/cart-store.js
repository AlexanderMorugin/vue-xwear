import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
  const cartItems = ref([])

  const totalCountCartItems = computed(() => cartItems.value.length)

  const totalCartSum = computed(() => {
    let data = null
    if (cartItems.value.length) {
      data = cartItems.value.map((item) => Number(item.price)).reduce((a, b) => a + b)
    }
    return data
  })

  const addCartItem = (item) => cartItems.value.push(item)

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

  return {
    cartItems,
    totalCountCartItems,
    totalCartSum,
    addCartItem,
    increment,
    decrement,
    deleteItem,
    deleteAllItems,
  }
})
