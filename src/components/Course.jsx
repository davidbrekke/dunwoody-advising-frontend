import React from 'react'
import styled from 'styled-components'


const CourseContainer = styled.div`
    background: var(--grey);
    padding: 1rem;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: .25rem;
    transition: transform 100ms;
    &:hover {
        cursor: pointer;
        background: var(--white);
        transform: scale(1.05);
    }
`
const CourseTitle = styled.p`
    font-size: 12px;
`
const CourseCode = styled.p`
    font-size: 10px;
`
const CourseType = styled.p`
    font-size: 8px;
`

function Course({course}) {
    return (
        <CourseContainer>
            <CourseTitle>{course.course_description}</CourseTitle>
            <CourseCode>{course.course_code}</CourseCode>
            <CourseType>{course.instruction_type}</CourseType>
        </CourseContainer>    
    )
}

export default Course
