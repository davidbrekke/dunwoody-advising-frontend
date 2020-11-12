import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import logoRed from '../../assets/logo-red.png'
import { Logo, navLinkStyles, navStyles } from '../styled'
Modal.setAppElement('#root')

function NavModal({navIsOpen, closeNav}) {
    return (
        <Modal isOpen={navIsOpen} onRequestClose={closeNav} style={navStyles} >
                    <Link to='/'><Logo src={logoRed} alt='Dunwoody'/></Link>
                    <Link style={navLinkStyles} to='/plan'>plan</Link>
                    <Link style={navLinkStyles} to='/advise/terms'>terms</Link>
                    <Link style={navLinkStyles} to='/advise/courses'>courses</Link>
                    <Link style={navLinkStyles} to='/advise/students'>students</Link>
                </Modal>
    )
}

export default NavModal
