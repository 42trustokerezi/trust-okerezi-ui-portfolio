import React, { useState, useEffect } from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu'

const NavMenu = () => {
    // 
    const [menu, setMenu] = useState(false)
    function toggleMenu(){
        setMenu(!menu)
    }

    useEffect(() =>{
        setMenu()
    },[])
  return (
    <div className="nav">
        <div className="logo">TRUST OKEREZI <p className="subtitle">UI UX DESIGN PORTFOLIO</p></div>
        <button onClick={toggleMenu}><FontAwesomeIcon className= {`${menu && ("off")} hamburger `}icon={faBars} /></button>
        { menu &&
            <Menu toggleMenu={toggleMenu}/>
        }
    </div>
  )
}

export default NavMenu