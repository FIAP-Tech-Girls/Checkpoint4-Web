import { } from 'react'
import Brinco from './assets/brinco.jpg'
import Colar from './assets/colar.jpg'
import Pulseira from './assets/pulseira.jpeg'
import Anel from './assets/anel.jpeg'

function Produtos() {
  

  return (
    <>
    <div className='joias'>
        <div classname="joias1">
          <h2>Brinco</h2>
          <img src= {Brinco} alt="brinco" width="400px"/>

          <h2>Colar</h2>
          <img src={Colar} alt="colar" width="400px"/>
        </div>

        <div className='joias2'>
          <h2>Pulseira</h2>
          <img src={Pulseira} alt="Pulseira" width="400px"/>

          <h2>Anel</h2>
          <img src={Anel} alt="Anel" width="400px"/>
          
        </div>
      </div>
    </>
  )
}

export default Produtos