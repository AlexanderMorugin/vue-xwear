import { ref } from 'vue'
import {
  PATH_SHOES,
  // PATH_CROSSOVKY, PATH_KEDY
} from '@/mock/routes'

export const allShoesBreadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Обувь',
    path: PATH_SHOES,
    content: 'last',
  },
])
