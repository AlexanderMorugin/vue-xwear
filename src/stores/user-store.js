import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const useUserStore = defineStore('userStore', () => {
  const user = ref({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const error = ref('')
  const isLoading = ref(false)

  const signUp = async (email, password) => {
    isLoading.value = true
    error.value = ''

    try {
      await createUserWithEmailAndPassword(getAuth(), email, password)
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }

  const signIn = async (email, password) => {
    isLoading.value = true
    error.value = ''

    try {
      const data = await signInWithEmailAndPassword(getAuth(), email, password)

      user.value.id = data.user.uid
      user.value.email = data.user.email
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }

  const setUserProfile = (profileData) => {
    user.value.firstName = profileData.firstName
    user.value.lastName = profileData.lastName
    user.value.phone = profileData.phone
  }

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

  return {
    user,
    userAddress,
    currentAdress,
    error,
    isLoading,
    setCurrentAdress,
    signUp,
    signIn,
    setUserProfile,
  }
})
