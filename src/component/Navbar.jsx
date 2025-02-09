import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import pho from '../assets/pho.png';
import phone from '../assets/phone.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`cont ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/"><h1>Portfolio</h1></Link>
        <ul className='nav-menu'>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/project" activeClassName="active">Project</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
        <img src={show ? pho : phone} alt="" onClick={() => setShow(!show)} className='hamburger'/>
        <ul className={show ? "nav-menu-mobile" : "no-menu"}>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/project" activeClassName="active">Project</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
