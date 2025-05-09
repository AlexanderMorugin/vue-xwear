import { ref, onMounted, onUnmounted } from 'vue'

const isScreenSmall = ref(null)
const windowWidth = ref(null)

export function useResizeSmall() {
  onMounted(() => {
    window.addEventListener('resize', resizeHandler)
    resizeHandler()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler)
  })

  const resizeHandler = () => {
    windowWidth.value = window.innerWidth

    if (windowWidth.value <= 359) {
      isScreenSmall.value = true
      return
    }

    isScreenSmall.value = false
  }

  return {
    isScreenSmall,
  }
}
