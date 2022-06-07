import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.scss'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="left-side">
            <div className="logo">
                <Link to="/">eCOMMERCE</Link>
            </div>

            <ul className='menu'>
                <li>
                    <Link to="/">Products</Link>
                </li>
            </ul>
        </div>

        <div className="right-side">
            <Link to="/signin">
                <Button className="login">
                    LOGIN
                </Button>  
            </Link>
            <Link to="/signup">
                <Button className="register">
                    REGISTER
                </Button> 
            </Link>
            
        </div>
    </nav>
  )
}

export default Navbar