import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Course from '../course/Course'

const COURSES = gql`
  query {
    courses {
        course_id
        course_code
        instruction_type
  }
}
`;

function Courses() {

    const { loading, error, data } = useQuery(COURSES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    
    return data.courses.map((course) => (
          <Course key={course.course_code} course={course}/>
        ))
}

export default Courses
