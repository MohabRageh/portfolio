import React from 'react'

export default function Skills({Person}) {
  return (
    <section>
        <h1 id='Skills'>Skills</h1>
        <h4>There is animation here reaload to see it </h4>
        <div className='coursesContainer' >
          {Person.skills.map(
            (skill)=>(<div className='skill' key={Math.floor(Math.random()*1000)}>{skill}</div>)
          )
          }
        </div>
    </section>
  )
}
