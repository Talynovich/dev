import { configureStore } from '@reduxjs/toolkit' // импорт configureStore из @reduxjs/toolkit
import productsReducer from './productsSlice' // импортируем наш reducer из файла productsSlice
import cartReducer from './cartSlice' // импортируем slice для нового хранилища

// здесь создаётся то самое хранилище
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer, // новое храналище
  },
})
