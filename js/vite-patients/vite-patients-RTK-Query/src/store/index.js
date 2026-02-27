import { configureStore } from '@reduxjs/toolkit' // импорт configureStore из @reduxjs/toolkit
import { patientsApi } from './patients/patientsApi.js'
import authReducer from './auth/authSlice'

export const store = configureStore({
  reducer: {
    [patientsApi.reducerPath]: patientsApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(patientsApi.middleware),
})
