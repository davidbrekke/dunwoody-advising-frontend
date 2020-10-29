import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    padding: .5rem;
    width: 100vw;
`

function Footer() {
    return (
        <FooterContainer>
            <h6>footer</h6>
        </FooterContainer>
    )
}

export default Footer
