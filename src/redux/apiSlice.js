import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    fetchItems: builder.query({
      query: () => 'items',
    }),
  }),
});

export const { useFetchItemsQuery } = apiSlice;
