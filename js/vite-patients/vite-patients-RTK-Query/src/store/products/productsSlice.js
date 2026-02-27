import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from './productsThunks.js'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: {
      products: [],
      limit: 30,
      total: 194,
      skip: 0,
    },
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.data.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { setCurrentProducts } = productsSlice.actions
export default productsSlice.reducer
