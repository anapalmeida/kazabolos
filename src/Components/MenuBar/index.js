import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

import  Logo from '../../Assets/Images/MainLogo.svg'
import  Toggle from '../../Assets/Images/toggle.png'

import './styles.css'

function MenuBar() {
  return (
  <div className='menu-wrapper'>
    
    <img className='logo' src={Logo} alt="Kaza Bolos" />
    <img className='toggle' src={Toggle} alt="Menu" />

    <div className='options'>
      <a href='#menu'>cardápio</a>
      <a href='#about'>sobre nós</a>
      <a href='#'>nossa localização</a>
      <a href='https://api.whatsapp.com/send?phone=5511950598772&text=Olá, Andreia! Tudo bem? Eu gostaria de fazer uma encomenda.' target='_blank' >faça seu pedido</a>
  

    <div className='icons-wrapper'>

      <a href='https://api.whatsapp.com/send?phone=5511950598772&text=Olá, Andreia! Tudo bem?Eu gostaria de fazer uma encomenda.'>
        <FontAwesomeIcon className='icons' icon={faWhatsapp} color='#D59594' size='2x'/>
      </a>

      <a href='https://www.instagram.com/kaza_bolos/'>
        <FontAwesomeIcon className='icons' icon={faInstagram} color='#D59594' size='2x'/>
      </a>

      <a href='https://www.facebook.com/kazabolos/'>
        <FontAwesomeIcon className='icons' icon={faFacebook} color='#D59594' size='2x'/>
      </a>
    </div>
    </div>
  </div>
  )
}

export default MenuBar