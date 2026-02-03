import { createSlice } from '@reduxjs/toolkit'
import products from '../data.json'

const productsSlice = createSlice({
  name: 'products',
  initialState: { products: products, favourites: [] },
  reducers: {
    toggleFavorites: (state, { payload }) => {
      const index = state.favourites.findIndex((item) => item.id === payload.id)
      if (index !== -1) {
        state.favourites.splice(index, 1)
      } else {
        state.favourites.push(payload)
      }
    },
    clearFavorites: (state) => {
      state.favourites = []
    },
  },
})

export const { toggleFavorites } = productsSlice.actions
export const { clearFavorites } = productsSlice.actions
export default productsSlice.reducer
