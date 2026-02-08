import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const loadFavoritesFromStorage = () => {
  const data = localStorage.getItem(`favorites`)
  return data ? JSON.parse(data) : []
}

const saveFavoritesToStorage = (favorites) => {
  localStorage.setItem(`favorites`, JSON.stringify(favorites))
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', // название, которое будет присвоено этому запросу
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(
        'https://69883d88780e8375a687d746.mockapi.io/products'
      )
      return response.data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    favourites: loadFavoritesFromStorage(),
    isLoading: true,
    error: null,
  },
  reducers: {
    toggleFavorites: (state, { payload }) => {
      const index = state.favourites.findIndex((item) => item.id === payload.id)
      if (index !== -1) {
        state.favourites.splice(index, 1)
      } else {
        state.favourites.push(payload)
      }
      saveFavoritesToStorage(state.favourites)
    },
    clearFavorites: (state) => {
      state.favourites = []
      saveFavoritesToStorage(state.favourites)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload // в action.payload попадет то, что возращает thunk
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { clearFavorites, toggleFavorites } = productsSlice.actions
export default productsSlice.reducer
