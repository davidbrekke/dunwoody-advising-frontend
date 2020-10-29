import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProfileContainer = styled.div`
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

const PlanBtn = styled.button`
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

function Profile() {
    return (
        <ProfileContainer>
            profile!!!
            <Link to='/plan'><PlanBtn type='submit'>plan</PlanBtn></Link>
        </ProfileContainer>
    )
}

export default Profile
