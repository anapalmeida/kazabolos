import MenuBar from '../../Components/MenuBar'
import Menu from '../Menu'

import MainLogo from '../../Assets/Images/MainLogo.svg'
// import Video from '../../Assets/Images/video.mp4'

import './styles.css'

function Home() {
  return (
  <div className="container" id="home">
      <MenuBar /> 

      {/* <div className="video-wrapper">
        <video autoPlay muted loop className="video">
          <source src={Video} type="video/mp4" />
        </video> */}

        <div className="logoPrincipal">
          <img src={MainLogo} alt="Kaza Bolos" />
        </div> 
  </div>
  )
}

export default Home
