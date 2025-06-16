import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { useUserStore } from '@/stores/user-store'

export const useOrderStore = defineStore('orderStore', () => {
  const orderItems = ref([])
  const ordersFromServer = ref([])
  const orderAddress = ref(null)

  const router = useRouter()
  const db = getFirestore()
  const userStore = useUserStore()

  const isLoading = ref(false)

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

  const getOrders = async () => {
    isLoading.value = true
    const getData = query(
      collection(db, `users/${userStore.user.id}/orders`),
      orderBy('date', 'desc'),
    )
    const listDocs = await getDocs(getData)
    isLoading.value = false
    return listDocs.docs.map((doc) => doc.data())
  }

  const setOrdersFromServerList = async () => {
    const orderList = await getOrders()
    return (ordersFromServer.value = [...orderList])
  }

  // Создаем новый id заказа, который на 1 больше предыдущего
  const setOrderId = async () => {
    let nextId = 1

    await setOrdersFromServerList()
    const idArray = ordersFromServer.value.map((item) => item.id)

    if (idArray.length) {
      nextId = ++idArray[0]
    } else {
      nextId
    }

    return nextId
  }

  // Удаляем с сервера конкретный заказ
  const deleteOrderFromServer = async (id) => {
    await deleteDoc(doc(db, `users/${userStore.user.id}/orders`, id))
    const orderList = await getOrders()
    ordersFromServer.value = [...orderList]
  }

  const setOrderAdress = (address) => (orderAddress.value = address)

  // Следим за изменениями в заказе и обновляем данные в LocalStorage
  watch(
    () => orderItems,
    (orderItems) => {
      localStorage.setItem('orderItems', JSON.stringify(orderItems.value))
    },
    { deep: true },
  )

  return {
    isLoading,
    orderItems,
    totalOrderSum,
    ordersFromServer,
    orderAddress,
    addOrderItem,
    deleteAllItems,
    addAllCartItemsToOrder,
    increment,
    decrement,
    deleteOrderItem,
    getOrders,
    setOrdersFromServerList,
    setOrderId,
    deleteOrderFromServer,
    setOrderAdress,
  }
})
