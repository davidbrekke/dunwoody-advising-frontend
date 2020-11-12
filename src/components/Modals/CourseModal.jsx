import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import { Logo, navLinkStyles, navStyles } from '../styled'
Modal.setAppElement('#root')

function CourseModal({isOpen, closeModal}) {
    return (
        <>
            <Modal 
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel='nav'
                style={navStyles}
            >
                <Link to='/'>
                    <Logo src={Logo} alt='Dunwoody'/>
                </Link>
                <Link style={navLinkStyles} to='/plan'>plan</Link>
                <Link style={navLinkStyles} to='/advise/terms'>terms</Link>
                <Link style={navLinkStyles} to='/advise/courses'>courses</Link>
                <Link style={navLinkStyles} to='/advise/students'>students</Link>
            </Modal>
        </>
    )
}

export default CourseModal
