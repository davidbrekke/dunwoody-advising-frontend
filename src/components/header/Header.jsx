import React from 'react'
import logo from '../../assets/logo.png'
import './header.css'

function Header() {
    return (
        <div className='header'>
                <img className='header-logo' src={logo} alt="Dunwoody"/>
        </div>
    )
}

export default Header
