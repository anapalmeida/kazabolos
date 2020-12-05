import Fatia from '../../Assets/Images/fatia.png'

import './styles.css'

function About() {
  return (
  <div className="container-fixed-bg" id="about">
      <div className="about" id="sobre-nos">
          <img className="fatia" src={Fatia} alt="Sobre nós" />
          <div className="content">
            <h1>sobre nos</h1>
           <p>
           A Kaza Bolos surgiu a partir da vontade e necessidade de levar bolos e doces com sabor caseiro e personalizados para a região de Santana de Parnaíba e Barueri. A princípio o foco foi o condomínio Vila Parque localizado no bairro Fazendinha, em Santana de Parnaíba, por ter uma localização mais afastada de padarias e supermercados.
           </p>
          </div>
      </div>
  </div>
  )
}

export default About
