import React from 'react'
import styled from 'styled-components'

function Course({course}) {
    return (
        <CourseContainer>
            <CourseTitle>{course.course_description}</CourseTitle>
            <CourseCode>{course.course_code}</CourseCode>
        </CourseContainer>    
    )
}

export default Course

const CourseContainer = styled.div`
    background: var(--grey);
    padding: .5rem;
    border-radius: .25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    margin: .25rem;
    transition: transform 100ms;
    &:hover {
        cursor: pointer;
        background: var(--white);
        transform: scale(1.06);
    }
`
const CourseTitle = styled.p`
    font-size: 12px;
    font-weight: bold;
`
const CourseCode = styled.p`
    font-size: 10px;
`