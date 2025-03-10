import { Link } from 'react-router-dom'
import './Aboutcontent.css'
import java from '../assets/java.webp'
import reactjs from '../assets/reactjs.png'



const Aboutcontent = () => {
  return (
    <div className='about'>
       <div className="left">
        <h1>Who Am I ?</h1>
        <p>I'm a react font-end developer. I create responsive secure websites for my clients.</p>
        <Link to="/contact">
            <button className='btn'> Contact</button>
        </Link>
       </div>

       <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={reactjs} alt="true" className='img'/>
            </div>
            <div className="img-stack bottom">
                <img src={java} alt="true" className='img'/>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Aboutcontent
