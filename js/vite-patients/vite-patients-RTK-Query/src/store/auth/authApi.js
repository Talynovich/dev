import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { authurl } from '../../constant/constant.js'

export const authApi = createApi({
  reducerPath: 'patientsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${authurl}`,
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (credential) => ({
        url: 'login',
        method: 'POST',
        body: credential,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
