import { ref } from 'vue'
import { PATH_PROFILE } from '@/mock/routes'

export const profileBreadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Личный кабинет',
    path: PATH_PROFILE,
    content: 'last',
  },
])
