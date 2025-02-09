import './Pricecard.css'
import { Link } from 'react-router-dom'

const Pricecard = () => {
  return (
    <div className='price'>
      <div className='card-container'>
        <div className='card'>
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='btc'>$100</p>
            <p className='btc'>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>

        <div className='card'>
            <h3>- Premium -</h3>
            <span className='bar'></span>
            <p className='btc'>$200</p>
            <p className='btc'>- 2 Days -</p>
            <p>- 5 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>

        <div className='card'>
            <h3>- Business -</h3>
            <span className='bar'></span>
            <p className='btc'>$300</p>
            <p className='btc'>- 6 Days -</p>
            <p>- 10 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default Pricecard
