import { createSlice } from '@reduxjs/toolkit'
import { fetchPatients, deletePatient, addPatient } from './patientsThunks.js'

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
