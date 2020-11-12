import React from 'react'
import { FooterLink, HeaderContainer } from './styled'
import { FaGithub } from 'react-icons/fa'


function Footer() {
    return (
        <HeaderContainer>
            <FooterLink target="_blank" href="https://github.com/davidbrekke/dunwoody-advising-frontend"><FaGithub/></FooterLink>
        </HeaderContainer>
    )
}

export default Footer
