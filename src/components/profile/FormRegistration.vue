<template>
  <AppProfileHeading title="Регистрация" />
  <form class="profile-modal-form" @submit.prevent="submitProfileEditForm">
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
    <div class="form-field">
      <label for="confirmPasswordField" class="form-label">Повторите пароль:</label>
      <input
        type="password"
        id="confirmPasswordField"
        name="confirmPasswordField"
        placeholder="123456"
        v-model.trim="v$.confirmPasswordField.$model"
        :class="['form-input', { 'form-input-warning': v$.confirmPasswordField.$errors.length }]"
      />
      <span
        v-for="item in v$.confirmPasswordField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>
    <div class="profile-modal-form-bottom">
      <button class="profile-modal-form-bottom-button" @click="$emit('openLoginForm')">
        Уже есть логин?
      </button>
    </div>

    <button :class="['form-button', { 'form-button-active': isValid }]">Зарегистрироваться</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, email, minLength, sameAs } from '@vuelidate/validators'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import { PATH_PROFILE } from '@/mock/routes'

const emit = defineEmits(['closeProfileModal', 'openLoginForm'])

const router = useRouter()

const emailField = ref(null)
const passwordField = ref(null)
const confirmPasswordField = ref(null)

const rules = computed(() => ({
  emailField: {
    required: helpers.withMessage('Укажите почту', required),
    email: helpers.withMessage('Введите корректную почту', email),
  },
  passwordField: {
    required: helpers.withMessage('Укажите пароль', required),
    minLength: helpers.withMessage('Пароль должен быть не менее 6 символов', minLength(6)),
  },
  confirmPasswordField: {
    required: helpers.withMessage('Подтвердите пароль', required),
    sameAsPassword: helpers.withMessage('Пароли не совпадают', sameAs(passwordField.value)),
  },
}))

const v$ = useVuelidate(rules, {
  emailField,
  passwordField,
  confirmPasswordField,
})

const isValid = computed(
  () =>
    emailField.value &&
    passwordField.value &&
    confirmPasswordField.value === passwordField.value &&
    !v$.$errors,
)

const submitProfileEditForm = () => {
  console.log('submitProfileEditForm')
  router.push(PATH_PROFILE)
  emit('closeProfileModal')
}
</script>

<style scoped></style>
