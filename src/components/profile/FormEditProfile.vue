<template>
  <!-- Кнопка меню профиля появляется при разрешении менее 1024px -->
  <AppProfileButton
    v-if="isScreenLarge && !props.fromPage === 'order'"
    @openProfileMenu="$emit('openProfileMenu')"
  />

  <AppProfileHeading v-if="!props.fromPage === 'order'" title="Редактирование профиля" />
  <form class="profile-edit-form" @submit.prevent="submitProfileEditForm">
    <div class="form-field">
      <label for="firstNameField" class="form-label">Имя:</label>
      <input
        type="text"
        id="firstNameField"
        name="firstNameField"
        placeholder="Введите ваше имя"
        v-model="v$.firstNameField.$model"
        :class="['form-input', { 'form-input-warning': v$.firstNameField.$errors.length }]"
      />
      <span v-for="item in v$.firstNameField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>
    <div class="form-field">
      <label for="lastNameField" class="form-label">Фамилия:</label>
      <input
        type="text"
        id="lastNameField"
        name="lastNameField"
        placeholder="Введите вашу фамилию"
        v-model="v$.lastNameField.$model"
        :class="['form-input', { 'form-input-warning': v$.lastNameField.$errors.length }]"
      />
      <span v-for="item in v$.lastNameField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>

    <!-- <div class="form-field">
      <label for="emailField" class="form-label">Email адрес:</label>
      <input
        type="email"
        id="emailField"
        name="emailField"
        placeholder="yavasyaivanov@gmail.com"
        v-model="v$.emailField.$model"
        :class="['form-input', { 'form-input-warning': v$.emailField.$errors.length }]"
      />
      <span v-for="item in v$.emailField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div> -->
    <div class="form-field">
      <label for="phoneField" class="form-label">Номер телефона:</label>
      <input
        type="tel"
        id="phoneField"
        name="phoneField"
        placeholder="89261002233"
        v-model="v$.phoneField.$model"
        :class="['form-input', { 'form-input-warning': v$.phoneField.$errors.length }]"
      />
      <span v-for="item in v$.phoneField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>
    <div v-if="!props.fromPage === 'order'" class="form-field">
      <span class="form-label">Email не может быть изменён</span>
      <div class="email-box">{{ userStore.user.email }}</div>
    </div>
    <button :class="['form-button', { 'form-button-active': isValid }]">
      <AppButtonLoader v-if="isLoading" />
      <span v-else>Сохранить</span>
    </button>
  </form>

  <AppToast v-if="isToastActive" title="Профиль успешно обновлен!" @closeToast="closeToast" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import {
  helpers,
  // required,
  //  email,
  minLength,
  numeric,
} from '@vuelidate/validators'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
// import { getAuth, updateProfile, updatePhoneNumber } from 'firebase/auth'
import AppButtonLoader from '@/components/loader/AppButtonLoader.vue'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import AppProfileButton from '@/components/profile/AppProfileButton.vue'
import { useResizeLarge } from '@/use/useResizeLarge'
import { useUserStore } from '@/stores/user-store'
import AppToast from '@/components/toast/AppToast.vue'

// Брейкпоинты ширины экрана
const { isScreenLarge } = useResizeLarge()

const emit = defineEmits(['openProfileMenu', 'closeEditProfileModal'])
const props = defineProps(['fromPage'])

const userStore = useUserStore()
const db = getFirestore()

// console.log(userStore.user.email)

const firstNameField = ref(userStore.user.firstName || null)
const lastNameField = ref(userStore.user.lastName || null)
// const emailField = ref(userStore.user.email || null)
const phoneField = ref(userStore.user.phone || null)

const isLoading = ref(false)
const isToastActive = ref(false)

const rules = computed(() => ({
  firstNameField: {
    // required: helpers.withMessage('Укажите имя', required),
    minLength: helpers.withMessage('Имя должно быть не менее 3 символов', minLength(3)),
  },
  lastNameField: {
    // required: helpers.withMessage('Укажите фамилию', required),
    minLength: helpers.withMessage('Фамилия должна быть не менее 3 символов', minLength(3)),
  },
  // emailField: {
  //   required: helpers.withMessage('Укажите почту', required),
  //   email: helpers.withMessage('Введите корректную почту', email),
  // },
  phoneField: {
    // required: helpers.withMessage('Укажите телефон', required),
    numeric: helpers.withMessage('Введите цифры', numeric),
  },
}))

const v$ = useVuelidate(rules, {
  firstNameField,
  lastNameField,
  // emailField,
  phoneField,
})

const isValid = computed(
  () =>
    firstNameField.value &&
    lastNameField.value &&
    // emailField.value &&
    phoneField.value &&
    !v$.$errors,
)

const closeToast = () => (isToastActive.value = false)

const submitProfileEditForm = async () => {
  isLoading.value = true

  const payload = {
    id: userStore.user.id,
    firstName: firstNameField.value,
    lastName: lastNameField.value,
    // email: emailField.value,
    phone: phoneField.value,
  }

  await setDoc(doc(db, `users/${userStore.user.id}/profile`, payload.id), payload).then(() => {
    userStore.setUserProfile(payload)
  })

  isLoading.value = false
  isToastActive.value = true

  if (props.fromPage === 'order') {
    emit('closeEditProfileModal')
  }

  firstNameField.value = ''
  lastNameField.value = ''
  phoneField.value = ''

  setTimeout(() => {
    isToastActive.value = false
  }, 5000)
}
</script>

<style scoped>
.profile-edit-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 433px;
  padding-top: 30px;
  padding-bottom: 80px;
}
@media (max-width: 767px) {
  .profile-edit-form {
    padding-top: 20px;
    padding-bottom: 40px;
  }
}
.email-box {
  width: 100%;
  height: 71px;
  border-radius: 5px;
  background: var(--gray-normal-primary);
  font-weight: 400;
  font-size: 14px;
  padding: 24px 20px 14px 20px;
  border: 1px solid transparent;
  transition: 0.3s ease all;
}
</style>
