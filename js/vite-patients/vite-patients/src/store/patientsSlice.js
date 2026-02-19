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
  'patients/addPatient',
  async (data, { rejectWithValue, getState }) => {
    try {
      const { currentPatient } = getState().patients

      let response

      if (currentPatient) {
        response = await axios.put(`${baseurl}/${currentPatient.id}`, data)
      } else {
        response = await axios.post(baseurl, data)
      }

      return response.data
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message)
    }
  }
)

const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    patient: [],
    currentPatient: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    setCurrentPatient(state, action) {
      state.currentPatient = action.payload
    },
  },
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
        const index = state.patient.findIndex((p) => p.id === action.payload.id)
        if (index !== -1) {
          state.patient[index] = action.payload
        } else {
          state.patient.push(action.payload)
        }
        state.currentPatient = null
      })
  },
})

export const { setCurrentPatient } = patientsSlice.actions
export default patientsSlice.reducer
