import { ref } from 'vue'
import { PATH_ORDER } from '@/mock/routes'

export const orderBreadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Оформление заказа',
    path: PATH_ORDER,
    content: 'last',
  },
])
