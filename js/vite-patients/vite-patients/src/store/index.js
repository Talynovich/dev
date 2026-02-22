import { configureStore } from '@reduxjs/toolkit' // импорт configureStore из @reduxjs/toolkit
import patientsReducer from './patients/patientsSlice.js'
import productsReducer from './products/productsSlice.js'

export const store = configureStore({
  reducer: { patients: patientsReducer, products: productsReducer },
})
