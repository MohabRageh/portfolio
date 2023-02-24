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
        img:'imgs/html.png',
        link:"https://www.youtube.com/watch?v=qfPUMV9J5yw&ab_channel=ElzeroWebSchool"
      },{
        id:2,
        title:"HTML",
        instructor:"Scrimba 'Bob Ziroll' ",
        img:"imgs/html.png",
        link:"https://www.youtube.com/watch?v=a_iQb1lnAEQ&t=7636s&ab_channel=freeCodeCamp.org"
      },{
        id:3,
        title:"CSS",
        instructor:"OsamaElzero",
        img:"imgs/css.png",
        link:"https://www.youtube.com/watch?v=qyVkLebgfzY&ab_channel=ElzeroWebSchool"
      },{
        id:12,
        title:"CSS",
        instructor:"Dave-Gray",
        img:"imgs/css.png",
        link:"https://www.youtube.com/watch?v=n4R2E7O-Ngo&t=24757s&ab_channel=DaveGray"
      },{
        id:4,
        title:"CSS",
        instructor:"Scrimba 'piear' ",
        img:"imgs/css.png",
        link:"https://www.youtube.com/watch?v=a_iQb1lnAEQ&t=7636s&ab_channel=freeCodeCamp.org"
      },{
        id:5,
        title:"JavaScript",
        instructor:"OsamaElzero",
        img:"imgs/js.png",
        link:"https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&ab_channel=ElzeroWebSchool"
      },{
        id:6,
        title:"JavaScript",
        instructor:"Dave-Gray",
        img:"imgs/js.png",
        link:"https://www.youtube.com/watch?v=EfAl9bwzVZk&ab_channel=DaveGray"
      },{
        id:7,
        title:"JavaScript",
        instructor:"Scrimba 'Bob Ziroll' ",
        img:"imgs/js.png",
        link:"https://www.youtube.com/watch?v=jS4aFq5-91M&t=2s&ab_channel=freeCodeCamp.org"
      },{
        id:8,
        title:"React",
        instructor:"Dave-Gray",
        img:"imgs/react.png",
        link:"https://www.youtube.com/watch?v=RVFAyFWO4go&ab_channel=DaveGray"
      },{
        id:9,
        title:"React",
        instructor:"Scrimba 'Bob Ziroll'",
        img:"imgs/react.png",
        link:"https://www.youtube.com/watch?v=bMknfKXIFA8&ab_channel=freeCodeCamp.org"
      }
    ],
    otherCourses:[
      {
        id:1,
        title:"OOP",
        img:"imgs/oop.jpg"
      },{
        id:2,
        title:"Data Structure",
        img:"imgs/data structure.jpg"
      },{
        id:3,
        title:"Algorithm",
        img:"imgs/algo.png"
      },{
        id:12,
        title:"Fire Store",
        img:"imgs/fire store.png"
      },{
        id:4,
        title:"Mysql database",
        img:"imgs/mysql.png"
      },{
        id:5,
        title:"C++",
        img:"imgs/c++.png"
      },{
        id:6,
        title:"Dart + Flutter",
        img:"imgs/DF.png"
      },{
        id:7,
        title:"Java",
        img:"imgs/java.png"
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
