import React from "react"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Sidenav } from "rsuite";

function Nav() {

    const navItems = [
        <a href="#header"> + home </a>,
        <a href="#about">  + about </a>,
        <a href="#projects"> + projects </a>
    ]



  return (

    <div className="navbar">
        <Sidenav>

   
        <Sidenav.Body>
        <div className="navbar-items">
            {navItems.map((navItem, i) => (
                <div> {navItem} </div>
            ))}
        </div>
        </Sidenav.Body>
        </Sidenav>





    <div className="nav-icons">
        <a href="mailto:jessicajinsong@gmail.com">
         <EmailIcon style={{ fontSize: 25, color: "rgba(245, 241, 237, 0.6)" }}></EmailIcon>
        </a>
        <a href="https://github.com/jsong73">
        <GitHubIcon style={{ fontSize: 25, color: "rgba(245, 241, 237, 0.6)"}}></GitHubIcon>
        </a>
        <a href="https://www.linkedin.com/in/jessica-jin-song/">
        <LinkedInIcon style={{ fontSize: 25, color: "rgba(245, 241, 237, 0.6)" }}></LinkedInIcon>
        </a>
    </div>

  </div>
  )
}

export default Nav;
