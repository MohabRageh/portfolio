import React from 'react'
import CourseCard from '../Courses/CourseCard/CourseCard'
export default function Projects({Person}) {
    
  return (
    <>
      <section className='Projects'>
        <h1 id='Projects'>Projects</h1>
        <div className='coursesContainer' >
          {Person.Projects.map(
            (course)=>{
              return<CourseCard course={course} key={course.id}/>
            }
          )}
        </div>
        
      </section>
    </>
  )
}