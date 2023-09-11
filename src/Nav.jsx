import {} from 'react'
import {Link} from 'react-router-dom'
import './App.css'

function Nav(){
  return (
    <>
    <nav className="menu">
      <Link to="/" id="tLink">Home</Link>
      <Link to="Produtos" id="tLink">Produtos</Link>
      <Link to="Sobre" id="tLink">Sobre</Link>
    </nav>
    </>
  )
}

export default Nav