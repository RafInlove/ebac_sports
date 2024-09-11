// services/produtoApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

export const produtoApi = createApi({
  reducerPath: 'produtoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/' }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports',
    }),
  }),
})

export const { useGetProdutosQuery } = produtoApi
