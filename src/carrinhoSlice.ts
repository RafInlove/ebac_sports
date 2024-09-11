// features/carrinhoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from './App'

interface CarrinhoState {
  carrinho: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  carrinho: [],
  favoritos: [],
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produtoExiste = state.carrinho.find(p => p.id === action.payload.id)
      if (!produtoExiste) {
        state.carrinho.push(action.payload)
      }
    },
    favoritar(state, action: PayloadAction<Produto>) {
      const produtoExiste = state.favoritos.find(p => p.id === action.payload.id)
      if (produtoExiste) {
        state.favoritos = state.favoritos.filter(p => p.id !== action.payload.id)
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
