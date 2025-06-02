// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    totalCountCartItems() {
      return this.cartItems.length
    },
    totalCartSum() {
      if (this.cartItems.length) {
        return this.cartItems.map((item) => Number(item.price)).reduce((a, b) => a + b)
      }
    },
  },
  actions: {
    addCartItem(item) {
      this.cartItems.push(item)
    },
    increment(id, size) {
      const currentItem = this.cartItems.find((item) => item.id === id && item.size === size)
      currentItem.count++
      currentItem.price = Number(currentItem.price) * 2
    },
    decrement(id, size) {
      const indexId = this.cartItems.findIndex((item) => item.id === id)
      const indexSize = this.cartItems.findIndex((item) => item.size === size)

      if (this.cartItems[(indexId, indexSize)].count > 1) {
        this.cartItems[(indexId, indexSize)].count--
        this.cartItems[(indexId, indexSize)].price = this.cartItems[(indexId, indexSize)].price / 2
      } else {
        this.cartItems[(indexId, indexSize)].count = 1
      }
    },
    deleteItem(id, size) {
      const currentItem = this.cartItems.find((item) => item.id === id && item.size === size)
      this.cartItems = this.cartItems.filter((item) => item !== currentItem)
    },
    deleteAllItems() {
      this.cartItems = []
    },
  },
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
})

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
