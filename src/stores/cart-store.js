import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
  const cartItems = ref([])

  // const CartItemsGetter = computed(() => cartItems.value)
  const totalCountCartItems = computed(() => cartItems.value.length)

  const totalCartSum = computed(() => {
    let data = null
    if (cartItems.value.length) {
      data = cartItems.value.map((item) => Number(item.price)).reduce((a, b) => a + b)
    }
    return data
  })

  const getCurrentItem = (id) => {
    return cartItems.value.find((item) => item.id === id)
  }

  // const getItemId = (id) => {
  //   return cartItems.value.find((item) => item.id === id)
  // }
  // const getItemSize = (size) => {
  //   return cartItems.value.find((item) => item.size === size)
  // }

  const cartItemsId = computed(() => cartItems.value.map((item) => item.id))
  const cartItemsSize = computed(() => cartItems.value.map((item) => item.size))

  const addCartItem = (item) => {
    if (cartItems.value.find((el) => el.size === item.size && el.id === item.id)) {
      return
    } else if (cartItemsId.value.find((el) => el !== item.id)) {
      cartItems.value.push(item)
    } else {
      cartItems.value.push(item)
    }
    console.log(item.size)
    console.log(cartItemsId.value)
    console.log(cartItemsSize.value)
  }

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
    getCurrentItem,
    addCartItem,
    increment,
    decrement,
    deleteItem,
    deleteAllItems,
  }
})
