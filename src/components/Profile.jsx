import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Title, Btn } from './styled'

function Profile() {
    return (
        <Container>
            <Title>welcome user</Title>
            <Link to='/plan'><Btn primary>plan</Btn></Link>
        </Container>
    )
}

export default Profile