import React from "react"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Sidenav } from "rsuite";

function Nav() {

    const navItems = [
        <a href="#Header">/home</a>,
        <a href="#about">/about</a>,
        <a href="#projects">/projects</a>
    ]



  return (
    <div className="sidebar-logos" href="/">
    <a href="mailto:jessicajinsong@gmail.com">
      <EmailIcon style={{ fontSize: 30 }}></EmailIcon>
    </a>
    <a href="https://github.com/jsong73">
      <GitHubIcon style={{ fontSize: 30 }}></GitHubIcon>
    </a>
    <a href="https://www.linkedin.com/in/jessica-jin-song/">
      <LinkedInIcon style={{ fontSize: 30 }}></LinkedInIcon>
    </a>
  </div>
  )
}

export default Nav;
