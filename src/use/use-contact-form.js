// import { computed, watch } from 'vue';
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
// import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';
// import { store } from '../store';

export const useContactForm = () => {
  // const store = useStore();
  // const router = useRouter();

  const { handleSubmit, isSubmitting } = useForm()

  const {
    value: name,
    errorMessage: nError,
    handleBlur: nBlur,
  } = useField(
    'name',
    yup.string().trim().required('Введите имя').min(2, 'Имя не должно быть менее 2 символов'),
  )

  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur,
  } = useField(
    'email',
    yup.string().trim().required('Введите почту').email('Проверьте корректность почты'),
  )

  const {
    value: phone,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField(
    'phone',
    yup.number().trim().required('Введите телефон').phone('Добавьте корректный телефон'),
  )

  const {
    value: message,
    errorMessage: mError,
    handleBlur: mBlur,
  } = useField('message', yup.number().trim().min(6, 'Напишите чуть побольше'))

  const onSubmit = handleSubmit((values) => {
    console.log(values)
  })

  return {
    name,
    nError,
    nBlur,
    email,
    eError,
    eBlur,
    phone,
    pError,
    pBlur,
    message,
    mError,
    mBlur,
    onSubmit,
    isSubmitting,
  }
}
