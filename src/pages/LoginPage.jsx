import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Input, InputTitle, Title, Btn, BtnDisable, landingLinkStyles } from '../components/styled'

function LoginPage() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ domain, setDomian ] = useState('')
    const history = useHistory()

    useEffect(() => {
        console.log(email)
        const emailSplit = email.split('@')
        setDomian(emailSplit[1])
        console.log(emailSplit[1])
    }, [email])

    const handleClick = () => history.push('/user')

    return (
        <>
        <Header/>
            <Container>
                <Title>login</Title>
                {/* email input */}
                <InputTitle>Dunwoody email</InputTitle>
                <Input onChange={(evt) => {setEmail(evt.target.value)}} type="text" placeholder='email...' />
                {/* password input */}
                <InputTitle>password</InputTitle>
                <Input onChange={(evt) => {setPassword(evt.target.value)}} type="password" placeholder='password...' />
                    { domain === 'dunwoody.edu' && password.length > 3 ? <Btn primary onClick={handleClick}>login</Btn> :  <BtnDisable disabled>login</BtnDisable> }
                    <Link style={landingLinkStyles} to='/'>signup...</Link>
            </Container>
        <Footer/>
        </>
        )
}

export default LoginPage
