import { } from 'react'
import Brinco from './assets/brinco.jpg'
import Colar from './assets/colar.jpg'
import Pulseira from './assets/pulseira.jpeg'
import Anel from './assets/anel.jpeg'

function Produtos() {
  

  return (
    <>
      <div class="joias">

        <h2>Brinco</h2>
        <img src= {Brinco} alt="brinco" />

        <h2>Colar</h2>
        <img src={Colar} alt="colar" />

        <h2>Pulseira</h2>
        <img src={Pulseira} alt="Pulseira" />

        <h2>Anel</h2>
        <img src={Anel} alt="Anel" />
        
      </div>
    </>
  )
}

export default Produtos