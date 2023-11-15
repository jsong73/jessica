import React from "react"
import profilepic from "../assets/profilepic.jpg"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function About() {

  return (
    <div id="about">
        <div className="container">
            <span className="container-header"> + about me </span>
        </div>


        <div className="about-bio-container">
            <div className="about-bio">
            I'm a software enthusiast who is currently an Instructional Specialist at EdX. I collaborate with instructors at universities such as the Georgia Institute of Technology, assisting in teaching the MERN stack to students in full stack and front-end cohorts who are aspiring to transition into the tech sector. In my free time, I like learning new technologies and expanding my skill sets. 
       

        <div className="list"> Here's a list of technologies i've been loving //</div>

        <div className="skills-container">
            <ul className="skills">
                <li> <ChevronRightIcon style={{color:"#F5F1ED"}}/> React </li>
                <li> <ChevronRightIcon style={{color:"#F5F1ED"}}/> Javascript ES6+</li>
                <li> <ChevronRightIcon style={{color:"#F5F1ED"}}/> GraphQL </li>
                <li> <ChevronRightIcon style={{color:"#F5F1ED"}}/> Typescript </li>
                <li> <ChevronRightIcon style={{color:"#F5F1ED"}}/> Node.js </li>
                <li> <ChevronRightIcon style={{color:"#F5F1ED"}}/> MongoDB </li>
            </ul>
        </div>
        </div> 

        <div className="profile-img">
            <img draggable="false" src={profilepic} alt="profile pic"/>
        </div>
        
        
        </div>
        

  </div>
  )
}

export default About;
