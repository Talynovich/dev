import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseurl } from '../../constant/constant.js'

export const patientsApi = createApi({
  reducerPath: 'patientsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseurl}`,
  }),
  tagTypes: ['Patients'],
  endpoints: (build) => ({
    getPatients: build.query({
      query: () => '/',
      providesTags: ['Patients'],
    }),
    deletePatient: build.mutation({
      query: (id) => ({ url: `/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Patients'],
    }),
    savePatient: build.mutation({
      query: (data) => ({
        url: data.id ? `/${data.id}` : '/',
        method: data.id ? 'PUT' : 'POST',
        body: data,
      }),
      invalidatesTags: ['Patients'],
    }),
  }),
})

export const {
  useGetPatientsQuery,
  useDeletePatientMutation,
  useSavePatientMutation,
} = patientsApi
