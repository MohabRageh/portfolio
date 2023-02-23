import React from 'react'
import Nav from './nav/Nav'
export default function Header({Person}) {
  return (
    <div className='Header'>
        <h1 className='header_title'>Protofolio</h1>
        <div className='img_container'>
            <img src={Person.img} alt={Person.name}/>
        </div>
        <Nav Person={Person}/>
    </div>
  )
}
