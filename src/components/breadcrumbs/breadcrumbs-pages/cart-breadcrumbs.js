import { ref } from 'vue'
import { PATH_CART } from '@/mock/routes'

export const cartBreadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Корзина',
    path: PATH_CART,
    content: 'last',
  },
])
