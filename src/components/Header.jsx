import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const HeaderContainer = styled.div`
    width: 100vw;
`
const Logo = styled.img`
    height: 3.5rem;
    cursor: pointer;
    margin: 3rem;
    margin-left: 5rem;
`

function Header() {
    return (
        <HeaderContainer>         
            <Link to='/'>
                <Logo src={logo} alt='Dunwoody'/>
            </Link>
        </HeaderContainer>   
    )
}

export default Header
