import { configureStore } from '@reduxjs/toolkit' // импорт configureStore из @reduxjs/toolkit
import productsReducer from './productsSlice' // импортируем наш reducer из файла productsSlice

// здесь создаётся то самое хранилище
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})
