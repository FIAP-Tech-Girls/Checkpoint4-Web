import { } from 'react'
import Logo from './assets/Logo jc.png'


function Sobre() {
  

  return (
    <>
    <div className='sobre'>
        <h2>Sobre a Joias Celestiais</h2>
        <p>Bem-vindo à Joias Celestiais, onde a beleza encontra a eternidade. Somos mais do que uma joalheria; somos artesãos apaixonados que transformam os elementos mais preciosos da Terra em obras-primas celestiais que contam histórias de amor, compromisso e estilo.
        </p>
        <h2>Nossa Missão</h2>
        <p>Nossa missão é simples, mas profunda: criar joias que encantam e perduram. Acreditamos que cada joia deve ser uma expressão única da individualidade de quem a usa. Trabalhamos incansavelmente para combinar design inovador com materiais de qualidade excepcional, resultando em peças que iluminam os momentos especiais da vida.</p>
        <h2>A Arte da Elegância</h2>
        <p>Na Joias Celestiais, não nos contentamos com menos do que a excelência. Nossos artesãos são dedicados a cada detalhe, desde a seleção cuidadosa das gemas até o polimento final. Cada peça que criamos reflete nossa paixão pela arte da joalheria e nosso compromisso com a qualidade duradoura.</p>
        <div id="imagem">
          <img src={Logo} alt="Logo" width="400px"/>
        </div>
      </div>
    </>
  )
}

export default Sobre