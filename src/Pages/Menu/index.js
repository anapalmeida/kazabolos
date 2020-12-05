import Bolo from '../../Assets/Images/boolo.png'
import Cupcake from  '../../Assets/Images/cupcake.png'
import Docinhos from '../../Assets/Images/docinhos.png'

import './styles.css'

function Menu() {
  return (
  <div className="container-fixed-bg" id="menu">
    <div className="menu">
      <div className="card">
      <img src={Bolo} alt="Bolos" className="image" id="bolo"/>
        <h1 className="title">bolos</h1>
        <p className="description"><strong>R$50/kg</strong> (chocolate ao leite, chocolate branco, chocolate com morango, doce de leite, doce de leite com ameixa, doce de leite com abacaxi, ninho, ninho com morango e creme com pêssego)
        <br /><br /><strong>R$60/kg </strong> (doce de leite com nozes e nutella)</p>
      </div>
      <div className="card">
      <img src={Cupcake} alt="cupackes" className="image" id="cupcake"/>
      <h1 className="title">cupcakes</h1>
        <p className="description">
          Em andamento.</p>
      </div>
      <div className="card">
      <img src={Docinhos} alt="Docinhos" className="image" id="docinho" />
      <h1 className="title">docinhos</h1>
        <p className="description">
          <strong>Brigadeiro, beijinho e cajuzinho sem recheio</strong> por R$60/cento<br/><br/>
          <strong>Brigadeiro de ninho com recheio de nutella </strong> por R$70/cento<br/><br/>
         <strong>Festa na caixa:</strong> <br/>
          Pequena = R$150<br/>
          Média = R$200<br/>
          Grande = R$300
          </p>
      </div>
    </div>
  </div>
  )
}

export default Menu
