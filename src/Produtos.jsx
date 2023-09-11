import { } from 'react'
import Brinco from './assets/brinco.jpg'
import Colar from './assets/colar.jpg'

function Produtos() {
  

  return (
    <>
      <div class="joias">

        <h2>Brinco</h2>
        <img src= {Brinco} alt="brinco" />

        <h2>Colar</h2>
        <img src={Colar} alt="colar" />
        
      </div>
    </>
  )
}

export default Produtos