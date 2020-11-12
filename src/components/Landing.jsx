import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { BtnDisable, Btn, Container, Title, InputTitle, Input, landingLinkStyles } from './styled'

function Landing() {

    const [ email, setEmail ] = useState('')
    const [ domain, setDomian ] = useState('')
    const history = useHistory()

    useEffect(() => {
        console.log(email)
        const emailSplit = email.split('@')
        setDomian(emailSplit[1])
        console.log(emailSplit[1])
    }, [email])

    const handleClick = () => history.push('/register')
    
    return (
        <Container>
            <Title>Dunwoody Academic Planner</Title>
            <InputTitle>enter your Dunwoody email</InputTitle>
            <Input onChange={ (evt) => { setEmail(evt.target.value)} } type="text" placeholder='email...' />
            {/* checking if email is dunwoody.edu */}
            { domain === 'dunwoody.edu' ? <Btn primary onClick={handleClick}>go</Btn> :  <BtnDisable disabled>go</BtnDisable> }
            <Link style={landingLinkStyles} to='/login'>login...</Link>
        </Container>
    )
}

export default Landing