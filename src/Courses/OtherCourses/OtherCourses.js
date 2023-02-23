import React from 'react'
import CourseCard from '../CourseCard/CourseCard'
export default function OtherCourses({Person}) {
    
  return (
    <>
      <section className='sectionOfCourses'>
        <h1 id='OtherCourses'>OtherCourses</h1>
        <div className='coursesContainer'>
          {Person.courses.map(
            (course)=>{
              return<CourseCard course={course} key={course.id}/>
            }
          )}
        </div>
      </section>
    </>
  )
}
