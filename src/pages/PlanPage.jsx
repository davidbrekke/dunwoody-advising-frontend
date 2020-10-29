import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Courses from '../components/Courses';
import Term from '../components/Term';

const Container = styled.div`
    background: var(--white);
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    max-width: 100vw;
    align-items: top;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, .3);
    margin: 1rem;
`;
const TermsContainer = styled.div`
    background: var(--grey);
    padding: 1rem;
    border-radius: .5rem;
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: 1rem;
    height: min-content;
`
const PlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    max-width: 60%;
`
const CoursesOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    max-width: 40%;
`
const CoursesContainer = styled.div`
    background: var(--grey);
    padding: 1rem;
    border-radius: .5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: 1rem;
    height: min-content;
`
const Title = styled.p`
    font-size: 16px;
    padding-left: 5em;
`

function PlanPage() {
    return (
        <>
        <Header/>
        <DragDropContext>
            <Container>
                <PlanContainer>
                    <Title>main plan</Title>
                    <TermsContainer>
                        <Term/>
                        <Term/>
                        <Term/>
                    </TermsContainer>
                </PlanContainer>
                <CoursesOptionsContainer>
                    <Title>course selection</Title>
                    <CoursesContainer>
                        <Courses/>
                    </CoursesContainer>
                </CoursesOptionsContainer>
            </Container>
            </DragDropContext>
        <Footer/>
        </>
    )
}

export default PlanPage
