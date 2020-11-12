import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa'
import { HeaderNav, IconBtn, HeaderContainer, Logo } from './styled'
import NavModal from './Modals/NavModal'

function Header() {

    const [navIsOpen, setNavIsOpen] = useState(false) // nav bar state

    const openNav = () => setNavIsOpen(true)
    const closeNav = () => setNavIsOpen(false)

    return (
        <>
        <HeaderContainer>  
            <HeaderNav >
                <IconBtn onClick={openNav}>
                    <FaBars/>
                </IconBtn>
                <NavModal navIsOpen={navIsOpen} closeNav={closeNav} />
            </HeaderNav>
            <Link to='/'>
                <Logo src={logo} alt='Dunwoody'/>
            </Link>
        </HeaderContainer>
        </>
    )
}

export default Header