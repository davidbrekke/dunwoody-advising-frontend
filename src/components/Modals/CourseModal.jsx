import { useMutation } from '@apollo/client'
import React, {useState} from 'react'
import Modal from 'react-modal'
import { COURSES, CREATE_COURSE } from '../../gql'
import {Select, Option, TextAreaInput, Input, InputTitle, CourseInputs, Title, modalStyles, Btn, BtnDisable } from '../styled'
Modal.setAppElement('#root')

function CourseModal({isOpen, closeModal, course}) {

    const [courseCode, setCourseCode] = useState('')
    const [courseName, setCourseName] = useState('')
    const [courseDesc, setCourseDesc] = useState('')
    const [credits, setCredits] = useState(0)
    const [required, setRequired] = useState(true)
    const [program, setProgram] = useState('')
    const [instructionType, setInstructionType] = useState('')

    const handleCreateCourse = () => {
        createCourse({variables: {course_code: courseCode, course_description: courseDesc, instruction_type: instructionType }})
        closeModal()
        setCourseCode('')
        setCourseName('')
    }

    const [createCourse] = useMutation(CREATE_COURSE, {
        refetchQueries: mutationResult => [{query: COURSES}]
    });

    return (
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
    )
}

export default CourseModal
