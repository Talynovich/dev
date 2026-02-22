import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { productsURL } from '../../constant/constant.js'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (params, { rejectWithValue }) => {
    try {
      const endpoint = params.q ? '/search' : ''
      const { data } = await axios(`${productsURL}${endpoint}`, {
        params,
      })
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
