import { configureStore } from '@reduxjs/toolkit' // импорт configureStore из @reduxjs/toolkit
import patientsReducer from './patientsSlice'

export const store = configureStore({
  reducer: { patients: patientsReducer },
})
