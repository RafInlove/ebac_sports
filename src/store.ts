// app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinhoSlice'
import { produtoApi } from './produtoApi'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [produtoApi.reducerPath]: produtoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtoApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
