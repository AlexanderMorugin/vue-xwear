// import { ref } from 'vue'
// import axios from 'axios'

// export const getSameShoesFromServer = async () => {
//   const isSameShoesLoading = ref(false)
//   const sameCrossovky = ref([])

//   try {
//     isSameShoesLoading.value = true

//     const { data } = await axios.get('https://vue-xwear-default-rtdb.firebaseio.com/shoes.json')

//     if (data) {
//       // Создаем массив КРОССОВКИ из 8 позиций
//       sameCrossovky.value = Object.keys(data)
//         .map((key) => {
//           return {
//             id: key,
//             ...data[key],
//           }
//         })
//         .filter((item) => item.category === 'crossovky')
//         .slice(0, 8)
//     }

//     isSameShoesLoading.value = false
//   } catch (error) {
//     console.log(error)
//   }

//   return { isSameShoesLoading, sameCrossovky }
// }
