import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Menu = ({toggleMenu}) => {
  return (
    <div className="menu-bg">
        <div className="menu-container">
            <div className="cancel" onClick={toggleMenu}><button>X</button></div>
            <ul>
                <li><Link to="">Case Studies</Link></li>
                <li><Link to="">Components</Link></li>
                <li><Link to="">Illustrations</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Menu