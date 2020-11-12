import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Course from './Course'

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

function Courses() {

    const { loading, error, data } = useQuery(COURSES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    
    console.log(data.courses);
    return (
      
      data.courses.map((course) => (
            <Course course={course}/>
        ))
      
    )
}

export default Courses
