import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useQuery, useMutation } from '@apollo/client'
import Modal from 'react-modal';
import CourseModal from '../components/Modals/CourseModal'
import {FaPlus, FaTrash, FaEdit } from 'react-icons/fa'
import {AdviseCoursesContainer,  AddCourseBtn, CourseInfoContainer, CourseBtns, IconBtn, CourseContainer } from '../components/styled'
import { COURSES, DELETE_COURSE } from '../gql'
Modal.setAppElement('#root')

function AdviseCoursePage() {

    // state
    const [isOpen, setIsOpen] = useState(false)
    const [selCourse, setSelCourse] = useState({
        course_description: 'select a course'
    })

    // querys and mutations
    const [deleteCourse] = useMutation(DELETE_COURSE, {
        refetchQueries: mutationResult => [{query: COURSES}]
    });
    const { loading, error, data } = useQuery(COURSES)
    
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    const handleDeleteCourse = () => {
        // delete course
        deleteCourse({variables: {course_id: selCourse.course_id}})
        // reset selected course
        setSelCourse({course_description: 'select a course'})
    }
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <>
        <Header/>
            <AdviseCoursesContainer>
                <CoursesContainer>
                    <CourseBtns>
                        <h2>courses</h2>
                        <AddCourseBtn onClick={openModal}><FaPlus/></AddCourseBtn>
                    </CourseBtns>
                    <CourseList>
                        {data.courses.map((course) => (
                            <CourseContainer onClick={() => setSelCourse(course)}>
                                {course.course_description}
                            </CourseContainer>
                        ))}
                    </CourseList>
                </CoursesContainer>
                <CourseInfoContainer>
                    <h2>{selCourse.course_description}</h2>
                    <h3>{selCourse.course_code}</h3>
                    <h4>{selCourse.instruction_type}</h4>
                    { selCourse.course_description === 'select a course' ? '' : <CourseBtns><IconBtn onClick={openModal} trash><FaEdit/></IconBtn><IconBtn trash onClick={handleDeleteCourse}><FaTrash/></IconBtn></CourseBtns> }
                </CourseInfoContainer>
            </AdviseCoursesContainer>
            <CourseModal isOpen={isOpen} closeModal={closeModal} course={selCourse} />
        <Footer/>
        </>
    )
}

export default AdviseCoursePage

const CourseList = styled.div`
    background: var(--grey);
    padding: .25rem;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, .3);
    width: min-content;
`
const CoursesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`