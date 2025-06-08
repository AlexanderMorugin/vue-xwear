import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const userAddress = ref([
    {
      id: 1,
      index: '056734',
      country: 'Poccия',
      city: 'Mосква',
      street: 'улица Варшавская',
      building: '37/5',
      flat: '574',
    },
    {
      id: 2,
      index: '123548',
      country: 'Poccия',
      city: 'Владивосток',
      street: 'улица Охотская',
      building: '41',
      flat: '16',
    },
  ])

  const currentAdress = ref(userAddress.value[0])

  const setCurrentAdress = (item) => {
    if (item) {
      const adress = userAddress.value.find((el) => el.id === item.id)
      currentAdress.value = adress
    } else {
      currentAdress.value = userAddress.value[0]
    }
  }

  // console.log('currentAdress - ', currentAdress.value)

  return {
    userAddress,
    currentAdress,
    setCurrentAdress,
  }
})
