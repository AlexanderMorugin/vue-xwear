<template>
  <AppProfileHeading title="Войти" />
  <form class="profile-modal-form" @submit.prevent="submitSignInForm">
    <div class="form-field">
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
    </div>
    <div class="form-field">
      <label for="passwordField" class="form-label">Пароль:</label>
      <input
        type="password"
        id="passwordField"
        name="passwordField"
        placeholder="123456"
        v-model="v$.passwordField.$model"
        :class="['form-input', { 'form-input-warning': v$.passwordField.$errors.length }]"
      />
      <span v-for="item in v$.passwordField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>
    <div class="profile-modal-form-bottom">
      <!-- <div class="profile-modal-form-checkbox-container">
        <input
          type="checkbox"
          :id="item"
          :value="item"
          v-model="selectedBrands"
          class="checkbox-input"
        />
        <label :for="item" class="profile-modal-form-checkbox-label">Запомнить меня</label>
      </div> -->

      <!-- <span class="profile-modal-form-bottom-button" @click="$emit('openAdminForm')">
        Вход для сотрудников
      </span> -->

      <span class="profile-modal-form-bottom-button" @click="$emit('openRegisterForm')">
        Зарегистрироваться?
      </span>
    </div>
    <button :class="['form-button', { 'form-button-active': isValid }]">
      <AppButtonLoader v-if="userStore.isAuthLoading" />
      <span v-else>Войти</span>
    </button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, email, minLength } from '@vuelidate/validators'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import { PATH_PROFILE } from '@/mock/routes'
import { useUserStore } from '@/stores/user-store'
import AppButtonLoader from '@/components/loader/AppButtonLoader.vue'

const emit = defineEmits(['closeProfileModal', 'openRegisterForm', 'openAdminForm'])

const router = useRouter()
const userStore = useUserStore()

const emailField = ref(null)
const passwordField = ref(null)

const rules = computed(() => ({
  emailField: {
    required: helpers.withMessage('Укажите почту', required),
    email: helpers.withMessage('Введите корректную почту', email),
  },
  passwordField: {
    required: helpers.withMessage('Укажите пароль', required),
    minLength: helpers.withMessage('Пароль должен быть не менее 6 символов', minLength(6)),
  },
}))

const v$ = useVuelidate(rules, {
  emailField,
  passwordField,
})

const isValid = computed(() => emailField.value && passwordField.value && !v$.$errors)

const submitSignInForm = async () => {
  await userStore.signIn(emailField.value, passwordField.value)

  if (!userStore.error) {
    router.push(PATH_PROFILE)
    emit('closeProfileModal')
  } else {
    emailField.value = ''
    passwordField.value = ''
  }
}
// const submitSignInForm = async () => {
//   await userStore.auth(
//     {
//       email: emailField.value,
//       password: passwordField.value,
//     },
//     'signIn',
//   )

//   if (!userStore.error) {
//     router.push(PATH_PROFILE)
//     emit('closeProfileModal')
//   } else {
//     emailField.value = ''
//     passwordField.value = ''
//   }
// }
</script>

<style scoped></style>
