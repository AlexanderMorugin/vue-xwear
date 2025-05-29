<template>
  <AppProfileHeading title="Смена пароля" />
  <form class="password-edit-form" @submit.prevent="submitProfileEditForm">
    <div class="form-field">
      <label for="currentPasswordField" class="form-label">Текущий пароль:</label>
      <input
        type="password"
        id="currentPasswordField"
        name="currentPasswordField"
        placeholder="123456"
        v-model="currentPasswordField"
        class="form-input"
      />
    </div>
    <div class="form-field">
      <label for="newPasswordField" class="form-label">Новый пароль:</label>
      <input
        type="password"
        id="newPasswordField"
        name="newPasswordField"
        placeholder="123456"
        v-model="v$.newPasswordField.$model"
        :class="['form-input', { 'form-input-warning': v$.newPasswordField.$errors.length }]"
      />
      <span v-for="item in v$.newPasswordField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>
    <div class="form-field">
      <label for="confirmPasswordField" class="form-label">Новый пароль еще раз:</label>
      <input
        type="password"
        id="confirmPasswordField"
        name="confirmPasswordField"
        placeholder="123456"
        v-model="v$.confirmPasswordField.$model"
        :class="['form-input', { 'form-input-warning': v$.confirmPasswordField.$errors.length }]"
      />
      <span
        v-for="item in v$.confirmPasswordField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>
    <button :class="['form-button', { 'form-button-active': isValid }]">Сохранить</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength, sameAs } from '@vuelidate/validators'
import AppProfileHeading from '@/components/profile/AppProfileHeading.vue'

const currentPasswordField = ref(null)
const newPasswordField = ref(null)
const confirmPasswordField = ref(null)

const rules = computed(() => ({
  newPasswordField: {
    required: helpers.withMessage('Укажите новый пароль', required),
    minLength: helpers.withMessage('Пароль должен быть не менее 6 символов', minLength(6)),
  },
  confirmPasswordField: {
    required: helpers.withMessage('Подтвердите новый пароль', required),
    sameAsPassword: helpers.withMessage('Пароли не совпадают', sameAs(newPasswordField.value)),
  },
}))

const v$ = useVuelidate(rules, {
  newPasswordField,
  confirmPasswordField,
})

const isValid = computed(
  () =>
    newPasswordField.value && confirmPasswordField.value === newPasswordField.value && !v$.$errors,
)

const submitProfileEditForm = () => {
  console.log('submitProfileEditForm')
}
</script>

<style scoped>
.password-edit-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 433px;
  padding-top: 30px;
}
@media (max-width: 767px) {
  .password-edit-form {
    grid-template-columns: 1fr;
    padding-top: 20px;
  }
}
</style>
