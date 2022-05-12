import { useHistory } from 'react-router-dom'
import './style.css'

import logo from '../assets/logo.png'
import { Button } from 'antd'

export default function Inicio() {
  const history = useHistory()

  async function listarProdutos(event) {
    history.push('/Produtos')
  }

  return (
    <div className="inicio_container">
      <section>
        <img src={logo} alt="logo" className="center" />
        <br />
        <Button onClick={listarProdutos} className="center">
          Ver Produtos
        </Button>
      </section>
    </div>
  )
}
