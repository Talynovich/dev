import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseurl } from '../constant/constant'

export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(`${baseurl}`)
      return response.data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const deletePatient = createAsyncThunk(
  `patients/deletePatient`,
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${baseurl}/${id}`, {})
      return id
    } catch (err) {
      return console.log(rejectWithValue(err.response.data))
    }
  }
)

export const addPatient = createAsyncThunk(
  `patients/addPatient`,
  async (data, { rejectWithValue }) => {
    try {
      await axios.post(`${baseurl}`, data)
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    patient: [],
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.isLoading = false
        state.patient = action.payload
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.patient = state.patient.filter(
          (patient) => patient.id !== action.payload
        )
      })
      .addCase(deletePatient.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.patient.push(action.payload)
      })
  },
})

export const {} = patientsSlice.actions
export default patientsSlice.reducer
