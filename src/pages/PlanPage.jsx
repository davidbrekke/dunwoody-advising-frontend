import React from 'react'
import styled from 'styled-components';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    background: var(--white);
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, .3);
    margin: 1rem;
    padding-top: 4em;
    padding-bottom: 4em;
`;
const PlanContainer = styled.div`
background: var(--grey);
    padding: 1rem;
    border-radius: .5rem;
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: 1rem;
    padding-top: 4em;
    padding-bottom: 4em;
`
const CoursesContainer = styled.div`
    background: var(--grey);
    max-width: 800px;
    max-height: 100em;
    padding: 1rem;
    border-radius: .5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: 1rem;
    padding-top: 4em;
    padding-bottom: 4em;
`
const TermContainer = styled.div`
    background: var(--dun-red);
    padding: 1rem;
    border-radius: .25rem;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1em;
    padding-bottom: 1em;
`
const CourseinTermContainer = styled.div`
    background: white;
    color: var(--dark-text);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1em;
    padding-bottom: 1em;
    border-radius: .25rem;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: 1rem;
    cursor: pointer;

`
const CourseContainer = styled.div`
    background: white;
    color: var(--dark-text);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1em;
    padding-bottom: 1em;
    border-radius: .25rem;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: 1rem;
    cursor: pointer;
`

function PlanPage() {
    return (
        <>
        <Header/>
        <DragDropContext>
            <Container>
                <PlanContainer>
                    <TermContainer>
                        <CourseinTermContainer>
                            course
                        </CourseinTermContainer>
                        <CourseinTermContainer>
                            course
                        </CourseinTermContainer>
                        <CourseinTermContainer>
                            course
                        </CourseinTermContainer>
                    </TermContainer>
                    <TermContainer>
                        <CourseinTermContainer>
                            course
                        </CourseinTermContainer>
                        <CourseinTermContainer>
                            course
                        </CourseinTermContainer>
                        <CourseinTermContainer>
                            course
                        </CourseinTermContainer>
                        <CourseinTermContainer>
                            course
                        </CourseinTermContainer>
                    </TermContainer>
                    <TermContainer>
                        <CourseinTermContainer>
                            course
                        </CourseinTermContainer>
                        <CourseinTermContainer>
                            course
                        </CourseinTermContainer>
                        <CourseinTermContainer>
                            course
                        </CourseinTermContainer>
                        <CourseinTermContainer>
                            course
                        </CourseinTermContainer>
                    </TermContainer>
                </PlanContainer>
                <CoursesContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                        <CourseContainer >course</CourseContainer>
                </CoursesContainer>
            </Container>
            </DragDropContext>
        <Footer/>
        </>
    )
}

export default PlanPage
