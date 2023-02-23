import React from 'react'

export default function CourseCard({course}) {
  return (
    <div className='courseCard'>
        <img src={course.img} alt={course.title}/>
        <h2>Course title :{course.title}</h2>
        <h3>Instructor :{course.instructor}</h3>
    </div>
  )
}
