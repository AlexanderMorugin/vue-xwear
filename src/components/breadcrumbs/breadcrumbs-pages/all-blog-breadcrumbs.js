import { ref } from 'vue'
import { PATH_BLOG } from '@/mock/routes'

export const allBlogBreadcrumbs = ref([
  { name: 'Главная', path: '/', content: '1' },
  {
    name: 'Блог',
    path: PATH_BLOG,
    content: 'last',
  },
])
