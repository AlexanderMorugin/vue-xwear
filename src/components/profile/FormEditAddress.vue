<template>
  <form class="edit-address-form" @submit.prevent="submitAddAddressForm">
    <div class="form-field">
      <label for="countryField" class="form-label">Страна:</label>
      <input
        type="text"
        id="countryField"
        name="countryField"
        placeholder="Введите страну"
        v-model="v$.countryField.$model"
        :class="['form-input', { 'form-input-warning': v$.countryField.$errors.length }]"
      />
      <span v-for="item in v$.countryField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>
    <div class="form-field">
      <label for="regionField" class="form-label">Область / район:</label>
      <input
        type="text"
        id="regionField"
        name="regionField"
        placeholder="Введите область или район"
        v-model="v$.regionField.$model"
        :class="['form-input', { 'form-input-warning': v$.regionField.$errors.length }]"
      />
      <span v-for="item in v$.regionField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>
    <div class="form-field">
      <label for="indexField" class="form-label">Индекс:</label>
      <input
        type="number"
        id="indexField"
        name="indexField"
        placeholder="Введите индекс"
        v-model="v$.indexField.$model"
        :class="['form-input', { 'form-input-warning': v$.indexField.$errors.length }]"
      />
      <span v-for="item in v$.indexField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>
    <div class="form-field">
      <label for="cityField" class="form-label">Город:</label>
      <input
        type="text"
        id="cityField"
        name="cityField"
        placeholder="Введите ваш город"
        v-model="v$.cityField.$model"
        :class="['form-input', { 'form-input-warning': v$.cityField.$errors.length }]"
      />
      <span v-for="item in v$.cityField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>
    <div class="form-field">
      <label for="streetField" class="form-label">Улица:</label>
      <input
        type="text"
        id="streetField"
        name="streetField"
        placeholder="Введите название улицы"
        v-model="v$.streetField.$model"
        :class="['form-input', { 'form-input-warning': v$.streetField.$errors.length }]"
      />
      <span v-for="item in v$.streetField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>
    <div class="form-field">
      <label for="buildingField" class="form-label">Номер дома</label>
      <input
        type="text"
        id="buildingField"
        name="buildingField"
        placeholder="Введите номер дома и квартиры"
        v-model="v$.buildingField.$model"
        :class="['form-input', { 'form-input-warning': v$.buildingField.$errors.length }]"
      />
      <span v-for="item in v$.buildingField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>
    <div class="form-field">
      <label for="flatField" class="form-label">Номер квартиры</label>
      <input
        type="text"
        id="flatField"
        name="flatField"
        placeholder="Введите номер квартиры"
        v-model="v$.flatField.$model"
        :class="['form-input', { 'form-input-warning': v$.flatField.$errors.length }]"
      />
      <span v-for="item in v$.flatField.$errors" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </div>

    <button :class="['form-button', { 'form-button-active': isValid }]">
      <AppButtonLoader v-if="isLoading" />
      <span v-else>Сохранить</span>
    </button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getFirestore, updateDoc, doc } from 'firebase/firestore'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength, numeric } from '@vuelidate/validators'
import AppButtonLoader from '@/components/loader/AppButtonLoader.vue'
import { useUserStore } from '@/stores/user-store'

const emit = defineEmits(['closeEditAddressModal'])
const props = defineProps(['address'])

const userStore = useUserStore()
const db = getFirestore()

const countryField = ref(props.address.country)
const regionField = ref(props.address.region)
const indexField = ref(props.address.postIndex)
const cityField = ref(props.address.city)
const streetField = ref(props.address.street)
const buildingField = ref(props.address.building)
const flatField = ref(props.address.flat)
const isLoading = ref(false)

const rules = computed(() => ({
  countryField: {
    required: helpers.withMessage('Укажите страну', required),
    minLength: helpers.withMessage('Название должно быть не менее 3 символов', minLength(3)),
  },
  regionField: {
    required: helpers.withMessage('Укажите область или район', required),
    minLength: helpers.withMessage('Название должно быть не менее 3 символов', minLength(3)),
  },
  indexField: {
    required: helpers.withMessage('Укажите индекс', required),
    numeric: helpers.withMessage('Введите цифры', numeric),
  },
  cityField: {
    required: helpers.withMessage('Укажите город', required),
    minLength: helpers.withMessage('Название должно быть не менее 3 символов', minLength(3)),
  },
  streetField: {
    required: helpers.withMessage('Укажите улицу', required),
    minLength: helpers.withMessage('Название должно быть не менее 3 символов', minLength(3)),
  },
  buildingField: {
    required: helpers.withMessage('Укажите номер дома', required),
  },
  flatField: {
    required: helpers.withMessage('Укажите номер квартиры', required),
  },
}))

const v$ = useVuelidate(rules, {
  countryField,
  regionField,
  indexField,
  cityField,
  streetField,
  buildingField,
  flatField,
})

const isValid = computed(
  () =>
    countryField.value &&
    regionField.value &&
    indexField.value &&
    cityField.value &&
    streetField.value &&
    buildingField.value &&
    flatField.value &&
    !v$.$errors,
)

const submitAddAddressForm = async () => {
  isLoading.value = true
  const payload = {
    country: countryField.value,
    region: regionField.value,
    postIndex: indexField.value,
    city: cityField.value,
    street: streetField.value,
    building: buildingField.value,
    flat: flatField.value,
  }

  await updateDoc(doc(db, `users/${userStore.user.id}/address/${props.address.id}`), payload)

  await userStore.setListOfAddressFromServer()
  isLoading.value = false
  emit('closeEditAddressModal')

  countryField.value = ''
  regionField.value = ''
  indexField.value = ''
  cityField.value = ''
  streetField.value = ''
  buildingField.value = ''
  flatField.value = ''
}
</script>

<style scoped>
.edit-address-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 80px;
}
@media (max-width: 767px) {
  .edit-address-form {
    padding-top: 20px;
    padding-bottom: 40px;
  }
}
</style>
