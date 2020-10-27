import React from 'react'

function Course({course}) {
    return (
        <div>
            <h1>{course.course_code}</h1>
            <h3>{course.instruction_type}</h3>
        </div>
    )
}

export default Course
