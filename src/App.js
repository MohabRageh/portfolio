import Header from "./Header/Header";
import { useEffect, useState } from "react";
import OtherCourses from "./Courses/OtherCourses/OtherCourses";
import FrontEndCourses from "./Courses/FrontEndCourses";
import Projects from "./Projectss/Projects.js"
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
function App() {
  const Person={
    name:"Mohab Yasser Rageh",
    age:23,
    img:'imgs/2.jpg',
    graduation:{
      degree:"bachelor's degree in computer science ",
      faculty:"faculty of science",
      grade:"VeryGood",
      universty:"Ain-Shams"
    },
    courses:[
      {
        id:1,
        title:"HTML",
        instructor:"OsamaElzero",
        link:""
      },{
        id:2,
        title:"HTML",
        instructor:"Scrimba 'Bob Ziroll' ",
        link:""
      },{
        id:3,
        title:"CSS",
        instructor:"OsamaElzero",
        link:""
      },{
        id:12,
        title:"CSS",
        instructor:"Dave-Gray",
        link:""
      },{
        id:4,
        title:"CSS",
        instructor:"Scrimba 'piear' ",
        link:""
      },{
        id:5,
        title:"JavaScript",
        instructor:"OsamaElzero",
        link:""
      },{
        id:6,
        title:"JavaScript",
        instructor:"Dave-Gray",
        link:""
      },{
        id:7,
        title:"JavaScript",
        instructor:"Scrimba 'Bob Ziroll' ",
        link:""
      },{
        id:8,
        title:"React",
        instructor:"Dave-Gray",
        link:""
      },{
        id:9,
        title:"React",
        instructor:"Scrimba 'Bob Ziroll'",
        link:""
      }
    ],
    otherCourses:[
      {
        id:1,
        title:"HTML",
        instructor:"OsamaElzero",
        link:""
      },{
        id:2,
        title:"HTML",
        instructor:"Scrimba 'Bob Ziroll' ",
        link:""
      },{
        id:3,
        title:"CSS",
        instructor:"OsamaElzero",
        link:""
      },{
        id:12,
        title:"CSS",
        instructor:"Dave-Gray",
        link:""
      },{
        id:4,
        title:"CSS",
        instructor:"Scrimba 'piear' ",
        link:""
      },{
        id:5,
        title:"JavaScript",
        instructor:"OsamaElzero",
        link:""
      },{
        id:6,
        title:"JavaScript",
        instructor:"Dave-Gray",
        link:""
      },{
        id:7,
        title:"JavaScript",
        instructor:"Scrimba 'Bob Ziroll' ",
        link:""
      },{
        id:8,
        title:"React",
        instructor:"Dave-Gray",
        link:""
      },{
        id:9,
        title:"React",
        instructor:"Scrimba 'Bob Ziroll'",
        link:""
      }
    ],
    Projects:[
      {
        id:1,
        title:"HTML",
        instructor:"OsamaElzero",
        link:""
      },{
        id:2,
        title:"HTML",
        instructor:"Scrimba 'Bob Ziroll' ",
        link:""
      },{
        id:3,
        title:"CSS",
        instructor:"OsamaElzero",
        link:""
      },{
        id:12,
        title:"CSS",
        instructor:"Dave-Gray",
        link:""
      },{
        id:4,
        title:"CSS",
        instructor:"Scrimba 'piear' ",
        link:""
      },{
        id:5,
        title:"JavaScript",
        instructor:"OsamaElzero",
        link:""
      },{
        id:6,
        title:"JavaScript",
        instructor:"Dave-Gray",
        link:""
      },{
        id:7,
        title:"JavaScript",
        instructor:"Scrimba 'Bob Ziroll' ",
        link:""
      },{
        id:8,
        title:"React",
        instructor:"Dave-Gray",
        link:""
      },{
        id:9,
        title:"React",
        instructor:"Scrimba 'Bob Ziroll'",
        link:""
      }
    ],
    skills:["smart","fastLearner","communication skills","attention on details","problem solver",
    "analytical thinking","team player"]
  }
  return (
      <div>
        <Header Person={Person}/>
        <FrontEndCourses Person={Person} />
        <OtherCourses Person={Person} />
        <Projects Person={Person}/>
        <Contact />
        <Skills Person={Person}/>
      </div>
  );
}

export default App;
