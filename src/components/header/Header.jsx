import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
               <img className='header-logo' src={logo} alt="Dunwoody"/>
            </Link>
        </div>
    )
}

export default Header
