import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useQuery, gql, useMutation } from '@apollo/client'
import Courses from '../components/Courses'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import CourseModal from '../components/Modals/CourseModal'
import {FaPlus, FaTrash, FaEdit } from 'react-icons/fa'
import { AddCourseBtn, CourseInfoContainer, CourseBtns, IconBtn, TextAreaInput, Title, InputTitle, Input, modalStyles, Select, Option, EditCourseContainer, CourseInputs, Btn, BtnDel, BtnDisable, CourseContainer } from '../components/styled'
Modal.setAppElement('#root')

const COURSES = gql`
  query {
    courses {
        course_id
        course_code
        instruction_type
        course_description
        required
  }
}
`;
const CREATE_COURSE = gql`
    mutation CreateCourse($course_code: String, $course_description: String, $instruction_type: String){
        createCourse(course_code: $course_code, course_description: $course_description, instruction_type: $instruction_type) {
            course_id
            course_code
            instruction_type
        }
    }
`
const DELETE_COURSE = gql`
    mutation DeleteCourse($course_id: Int!) {
        deleteCourse(course_id: $course_id) {
            course_id
            course_code
            instruction_type
        }
    }
`

function AdviseCoursePage() {

    const [isOpen, setIsOpen] = useState(false)
    const [courseCode, setCourseCode] = useState('')
    const [courseName, setCourseName] = useState('')
    const [courseDesc, setCourseDesc] = useState('')
    const [credits, setCredits] = useState(0)
    const [required, setRequired] = useState(true)
    const [program, setProgram] = useState('')
    const [instructionType, setInstructionType] = useState('')

    const [createCourse] = useMutation(CREATE_COURSE, {
        refetchQueries: mutationResult => [{query: COURSES}]
    });
    const [deleteCourse] = useMutation(DELETE_COURSE, {
        refetchQueries: mutationResult => [{query: COURSES}]
    });
    const { loading, error, data } = useQuery(COURSES)
    const [selCourse, setSelCourse] = useState({
        course_description: 'select a course'
    })

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const handleCreateCourse = () => {
        createCourse({variables: {course_code: courseCode, course_description: courseDesc, instruction_type: instructionType }})
        closeModal()
        setCourseCode('')
        setCourseName('')
    }
    const handleDeleteCourse = () => {
        deleteCourse({variables: {course_id: selCourse.course_id}})
        setSelCourse({course_description: 'select a course'})
    }
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <>
        <Header/>
            
            <Container>
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
                    { selCourse.course_description === 'select a course' ? '' : <CourseBtns><IconBtn trash><FaEdit/></IconBtn><IconBtn trash onClick={handleDeleteCourse}><FaTrash/></IconBtn></CourseBtns> }
                </CourseInfoContainer>
            </Container>
            <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel='create course' style={modalStyles} >
                
                    <Title>add course</Title>
                    <CourseInputs>
                    <div>
                    <InputTitle>course code</InputTitle>
                    <Input onChange={ (evt) => { setCourseCode(evt.target.value)} } type="text" placeholder='course code...' />
                    </div>
                    <div>
                    <InputTitle >course name</InputTitle>
                    <Input disabled onChange={ (evt) => { setCourseName(evt.target.value)} } type="text" placeholder='course name...' />
                    </div>
                    <div>
                    <InputTitle>course description</InputTitle>
                    <TextAreaInput onChange={ (evt) => { setCourseDesc(evt.target.value)} } placeholder='course description...' />
                    </div>
                    <div>
                    <InputTitle>program</InputTitle>
                        <Select disabled name='program' onChange={(evt) => setProgram(evt.target.value)}>
                            <Option value='' selected disabled hidden>choose</Option>
                            <Option value='SENG'>SENG</Option>
                            <Option value='CWEB'>CWEB</Option>
                            <Option value='n/a'>n/a</Option>
                        </Select>
                    </div>
                    <div>
                    <InputTitle>instruction type</InputTitle>
                        <Select name='instruction type' onChange={(evt) => setInstructionType(evt.target.value)}>
                            <Option value='' selected disabled hidden>choose</Option>
                            <Option value='lecture'>lecture</Option>
                            <Option value='lecture/lab'>lecture/lab</Option>
                            <Option value='lab'>lab</Option>
                        </Select>
                    </div>
                    <div>
                        <InputTitle>credits</InputTitle>
                        <Input disabled onChange={ (evt) => { setCredits(evt.target.value)} } min='0' max='5' type="number" />
                    </div>
                    <div>
                        <InputTitle>required</InputTitle>
                        <Input disabled onChange={ (evt) => { setRequired(evt.target.value)} } type="checkBox" />
                    </div>
                    </CourseInputs>
                        { courseCode && courseDesc && instructionType ? <Btn primary onClick={handleCreateCourse}>add</Btn> : <BtnDisable disabled>add</BtnDisable> }
            </Modal>
        <Footer/>
        </>
    )
}

export default AdviseCoursePage

const Container = styled.div`
    background: white;
    padding: 1rem;
    margin: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

`
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