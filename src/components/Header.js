import React from "react"
import Typewriter from "typewriter-effect"
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const theme = createTheme({
    typography: {
      headerBio:{
        fontSize: 18,
        color: "rgba(245, 241, 237, 0.6)",
        wordSpacing: "0.3em",
      },
      typeWriter:{
        fontWeight: "bold",
        fontSize: 65,
        color: "#F5F1ED",
      },
    },
    
});
function Header() {
  return (
    <ThemeProvider theme={theme}>
      <div id="header">

        
        <Typography variant="typeWriter">
        <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("{ hi, i'm jessica } ").start();
            }}
          />
        </Typography>

        <div className="header-bio" >
          <Typography variant="headerBio">I'm a self-taught full stack developer interested in all things computer interactions and web development. I thrive on crafting optimal technical solutions that are both functional and user-centric. </Typography>
        </div>

        <button
          className="header-button"
        >
       <a 
       href="https://drive.google.com/file/d/1l1Kyr2mM1-7HqaS34Kwf7xlVKCHLiG3w/view" 
       target="_blank" rel="noreferrer" > view my resume </a><KeyboardArrowRightOutlinedIcon style={{color:"rgba(245, 241, 237, 0.6)"}} />  
      </button>

      </div>
    </ThemeProvider>
  );
}


export default Header;
