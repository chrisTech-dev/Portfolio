import './Hero.css'
import pic from '../assets/pic.png'
import {Link} from "react-router-dom"


const Hero = () => {

    

  return (
    <div className='hero'>
      
        <div className='mask'>
            <img src={pic} alt=""  className='into-img'/>
        </div>

        <div className='content'>
            <p>HI, I'M A FREELANCE</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn-light'>Contact</Link>
            </div>
        </div>

    </div>
  )
}

export default Hero
