import { gql } from '@apollo/client'

export const CREATE_COURSE = gql`
mutation CreateCourse($course_code: String, $course_description: String, $instruction_type: String){
    createCourse(course_code: $course_code, course_description: $course_description, instruction_type: $instruction_type) {
        course_id
        course_code
        instruction_type
    }
}
`

export const COURSES = gql`
query {
  courses {
      course_id
      course_code
      instruction_type
      course_description
      required
}
}
`

export const DELETE_COURSE = gql`
mutation DeleteCourse($course_id: Int!) {
    deleteCourse(course_id: $course_id) {
        course_id
        course_code
        instruction_type
    }
}
`