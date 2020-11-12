import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: var(--dun-red);
    padding: .5rem;
    border-radius: .25rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: .5rem;
    width: 45%;
`

function Term({term}) {

    return (
        <Container>
            <h1>{term.season}</h1>
            <h2>{term.class_level}</h2>
        </Container>
    )
}

export default Term
