import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.product.id === action.payload.id
      )
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ product: action.payload, quantity: 1 })
      }
    },
    updateQuantity: (state, action) => {
      const existing = state.items.find(
        (item) => item.product.id === action.payload.productId
      )
      if (!existing) return
      if (action.payload.newQuantity < 1) {
        state.items = state.items.filter(
          (item) => item.product.id !== action.payload.productId
        )
      } else {
        existing.quantity = action.payload.newQuantity
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      )
    },
  },
})
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
