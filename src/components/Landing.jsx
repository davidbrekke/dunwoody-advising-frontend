import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LandingContainer = styled.div`
    background: white;
    padding: 6rem;
    padding-left: 8rem;
    padding-right: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
`
const LandingTitle = styled.h1`
    color: #141301;
    font-family: sans-serif;
`

const UserForm = styled.form`
    background: var(--grey);
    max-width: 800px;
    max-height: 100em;
    padding: 1rem;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: 1rem;
`
const Email = styled.input`
    border: none;
    background: white;
    padding: 1.5em;
    margin: 2.5rem;
    text-decoration: none;
    border-radius: 10px;
    font-size: 16px;
    color: var(--dark-text);
    &:focus {
        outline: none;
}
`
const EmailTitle = styled.p`
    color: var(--dark-text);
    margin-top: 3em;
`
const EmailBtn = styled.button`
    padding: .5rem 1rem;
    border: none;
    border-radius: .25rem;
    background: var(--dun-red);
    margin: 1rem;
    color: #fff;
    cursor: pointer;
    &:hover {
    background: var(--dun-red-hover);
}
`

function Landing() {

    const [ email, setEmail ] = useState('');

    useEffect(() => {
        console.log(email)
    }, [email])


    const handleSubmit = () => {
        setEmail('');
        console.log('submittttttt')
    }

    return (
        <LandingContainer>
            <LandingTitle>welcome!</LandingTitle>
                <UserForm onSubmit={handleSubmit}>
                    <EmailTitle>enter your Dunwoody email!</EmailTitle>
                    <Email onChange={ (evt) => setEmail(evt.target.value)} type="text" placeholder='email'/>
                    <Link to='/user'>
                        <EmailBtn type='submit'>login</EmailBtn>
                    </Link>
                </UserForm>
            <Link to='/courses'>courses</Link>
        </LandingContainer>
    )

}

export default Landing
