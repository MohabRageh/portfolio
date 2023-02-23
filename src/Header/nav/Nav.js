import React from 'react'

export default function Nav({Person}) {
  return (
    <nav>
        <ul>
            <li>
                <a href='#FrontEndCourses'>FrontEndCourses</a>
            </li>
            <li>
                <a href='#OtherCourses'>OtherCourses</a>
            </li>
            <li>
                <a href='#Projects'>Projects</a>
            </li>
            <li>
                <a href='#Skills'>Skills</a>
            </li>
            
        </ul>
        <h1>Mohab Yasser Rageh ~FrontEnd-Developer~</h1>
        <h4>{Person.graduation.degree} , {Person.graduation.faculty} ,{Person.graduation.universty},{Person.graduation.grade}</h4>
        
    </nav>
  )
}
