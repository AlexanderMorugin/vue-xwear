<script>
import {
  computed,
  onMounted,
  // ref
} from 'vue'
import { useRoute } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
  getFirestore,
  collection,
  query,
  getDocs,
  // getDoc,
  // deleteDoc,
  // doc,
} from 'firebase/firestore'
import MainLayout from './layouts/MainLayout.vue'
import { useUserStore } from '@/stores/user-store'

export default {
  components: { MainLayout },
  setup() {
    const route = useRoute()
    const userStore = useUserStore()
    const db = getFirestore()
    // const profile = ref(null)

    // Функция получения с сервера профиля пользователя (Имя, фамилия и тд)
    const getProfile = async () => {
      const getData = query(collection(db, `users/${userStore.user.id}/profile`))
      const listDocs = await getDocs(getData)
      const profileData = listDocs.docs.map((doc) => doc.data())
      if (profileData[0]) {
        userStore.setUserProfile(profileData[0])
      }
    }

    // Слежение за наличием пользователя в приложении
    onMounted(() => {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          userStore.user.id = user.uid
          userStore.user.email = user.email
          getProfile()
          // userStore.getAddress()
          // userStore.setListOfAddressFromServer()
        }
      })
    })

    return {
      layout: computed(() => route.meta.layout),
    }
  },
}
</script>

<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<style scoped></style>
