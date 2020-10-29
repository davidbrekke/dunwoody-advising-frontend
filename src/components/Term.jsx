import React from 'react'
import styled from 'styled-components'
import Courses from './Courses'

const Container = styled.div`
    background: var(--dun-red);
    padding: 1rem;
    border-radius: .25rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: .5rem;
    max-width: 40%;
`

function Term() {

    return (
        <Container>
            <Courses/>
        </Container>
    )
}

export default Term
