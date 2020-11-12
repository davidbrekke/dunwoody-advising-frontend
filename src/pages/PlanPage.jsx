import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'

//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Courses from '../components/Courses'
import Term from '../components/Term'
import { useQuery, gql } from '@apollo/client'


const TERMS = gql`
query {
  terms {
    term_id
    season
    class_level
  }
}
`

function PlanPage() {

    const { loading, error, data } = useQuery(TERMS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <>
        <Header/>
        <Container>
                <PlanContainer>
                    <Title>main plan</Title>
                        <TermsContainer>
                            {data.terms.map((term) => (
                                <Term term={term}/>
                            ))}
                        </TermsContainer>
                </PlanContainer>
                <CoursesOptionsContainer>
                    <Title>course selection</Title>
                    
                    <CoursesContainer>
                        <Courses/>
                    </CoursesContainer>
                </CoursesOptionsContainer>
         </Container>    
        <Footer/>
        </>
    )
}

export default PlanPage

const Container = styled.div`
    background: var(--white);
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    max-width: 100vw;
    align-items: top;
    justify-content: space-evenly;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, .3);
    margin: 1em;
`;

const PlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`
const TermsContainer = styled.div`
    background: var(--grey);
    padding: .5rem;
    border-radius: .5em;
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: .5rem;
`

const CoursesOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`
const CoursesContainer = styled.div`
    background: var(--grey);
    padding: 1rem;
    border-radius: .5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: .5rem;
`
const Title = styled.p`
    font-size: 16px;
    padding-left: 5em;
`