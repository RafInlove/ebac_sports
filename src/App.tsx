import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './produtoApi'
import { adicionarAoCarrinho, favoritar } from './carrinhoSlice'
import { RootState } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}


function App() {
  const dispatch = useDispatch()
  const { data: produtos = [] } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.carrinho.carrinho)
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)

  function adicionarAoCarrinhoHandler(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function favoritarHandler(produto: Produto) {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritarHandler}
          adicionarAoCarrinho={adicionarAoCarrinhoHandler}
        />
      </div>
    </>
  )
}

export default App
