import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Btn, BtnDisable, Option, Container, Input, InputTitle, Title, Select } from '../components/styled'

const PROGRAMS = gql`
query {
  programs {
    program_id
    program_code
    program_name
  }
}
`

function RegisterPage() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { loading, error, data } = useQuery(PROGRAMS)

    useEffect(() => {
        const emailSplit = email.split('@')
        setUsername(emailSplit[0])
    }, [email])

    const handleClick = () => {
        history.push('/user')
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <>
        <Header/>
        <Container>
            <Title>signup!</Title>
            <InputTitle>email</InputTitle>
            <Input onChange={ (evt) => { setEmail(evt.target.value)} } type="text" placeholder='email...' />
            <InputTitle>username</InputTitle>
            <Input onChange={ (evt) => { setUsername(evt.target.value)} } type="text" value={username} placeholder='username...' />
            <InputTitle>password</InputTitle>
            <Input onChange={ (evt) => { setPassword(evt.target.value)} } type="password" placeholder='password...' />
            <InputTitle>select your program</InputTitle>
            <Select name='programs'>
                {data.programs.map((program) => (
                    <Option>{program.program_code}</Option>
                ))}
            </Select>
            { email.split('@')[1] === 'dunwoody.edu' && username.length > 0 && password.length > 0 ? <Btn primary onClick={handleClick}>begin</Btn> :  <BtnDisable disabled>begin</BtnDisable> }
        </Container>
        <Footer/>
        </>
    )
}

export default RegisterPage