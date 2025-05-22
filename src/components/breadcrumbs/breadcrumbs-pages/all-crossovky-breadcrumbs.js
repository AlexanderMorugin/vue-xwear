import { ref } from 'vue'
import { PATH_SHOES, PATH_CROSSOVKY } from '@/mock/routes'

export const allCrossovkyBreadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Обувь',
    path: PATH_SHOES,
    content: '2',
  },
  {
    name: 'Кроссовки',
    path: PATH_CROSSOVKY,
    content: 'last',
  },
])
