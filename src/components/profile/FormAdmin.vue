<template>
  <AppProfileHeading title="Вход для сотрудников" />
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

    <button :class="['form-button', { 'form-button-active': isValid }]">Войти</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, email, minLength } from '@vuelidate/validators'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'
import { PATH_ADMIN } from '@/mock/routes'

const emit = defineEmits(['closeProfileModal', 'toggleLoginForm'])

const router = useRouter()

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

const submitProfileEditForm = () => {
  console.log('submitProfileEditForm')
  router.push(PATH_ADMIN)
  emit('closeProfileModal')
}
</script>

<style scoped></style>
