import React, {useState, useEffect} from "react"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Sidenav } from "rsuite";
import LightMode from "./LightMode";
import "../styles/Nav.css"

const isMobileView = window.innerWidth < 600;

function Nav() {

    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
    console.log('Dark mode:', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    }, [isDarkMode]);
  
    const handleModeChange = () => {
        console.log('Mode changed');
      setIsDarkMode((prevMode) => !prevMode);
    };
  
    const navItems = [
        <a href="#header"> + home </a>,
        <a href="#about">  + about </a>,
        <a href="#projects"> + projects </a>
    ]
 
  return (

    <div className="navbar">
        {!isMobileView && (
        <Sidenav>

        <Sidenav.Body>
        <div className="navbar-items">
            {navItems.map((navItem, i) => (
                <div key={i}> {navItem} </div>
            ))}
        </div>
        </Sidenav.Body>
        </Sidenav>

)}
    <div className="nav-icons">
        <a href="mailto:jessicajinsong@gmail.com">
         <EmailIcon style={{ fontSize: 25, color: "rgba(245, 241, 237, 0.6)" }}></EmailIcon>
        </a>
        <a href="https://github.com/jsong73" target="_blank" rel="noopener noreferrer" >
        <GitHubIcon  style={{ fontSize: 25, color: "rgba(245, 241, 237, 0.6)"}}></GitHubIcon>
        </a>
        <a href="https://www.linkedin.com/in/jessica-jin-song/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon style={{ fontSize: 25, color: "rgba(245, 241, 237, 0.6)" }}></LinkedInIcon>
        </a>
    </div>

      
    <LightMode isDarkMode={isDarkMode} onChange={handleModeChange} />
  
  </div>
  
  )
}

export default Nav;
