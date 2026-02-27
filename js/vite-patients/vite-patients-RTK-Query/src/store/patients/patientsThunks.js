import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseurl } from '../../constant/constant.js'

export const fetchPatients = createAsyncThunk(
  'patients/fetchPatients',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(`${baseurl}`)
      return data
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
