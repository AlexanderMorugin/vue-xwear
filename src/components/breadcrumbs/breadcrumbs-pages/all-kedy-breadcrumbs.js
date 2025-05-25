import { ref } from 'vue'
import { PATH_SHOES, PATH_KEDY } from '@/mock/routes'

export const allKedyBreadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Обувь',
    path: PATH_SHOES,
    content: '2',
  },
  {
    name: 'Кеды',
    path: PATH_KEDY,
    content: 'last',
  },
])
