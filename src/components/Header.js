import React from "react"
import Typewriter from "typewriter-effect"
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../"

const theme = createTheme({
    typography: {
      headerBio:{
        fontSize: 21,
        color: "rgba(245, 241, 237, 0.6)",
        wordSpacing: "0.3em",
      },
      typeWriter:{
        fontSize: 60,
        color: "#F5F1ED",
      },
      resumeButton:{
        fontSize: 30,
      }

    },
    
});
function Header() {
  return (
    <ThemeProvider theme={theme}>


        
        <Typography variant="typeWriter">
        <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("hi, i'm jessica. ").start();
            }}
          />
        </Typography>

        <div className="header-bio">
          <Typography variant="headerBio">I'm a self-taught full stack developer interested in all things computer interactions and web development.  </Typography>
        </div>

        <Typography variant="resumeButton">
        <a 
            href="https://docs.google.com/document/d/e/2PACX-1vT47jxle8HipsEax-PpypYSnQ_SjnVt6j8kN7Lo1dVXBppBMaD2ZKtrcSHcbSn8UQ/pub" 
            aria-label="resume" 
            target="_blank" 
            rel="noopener noreferrer"> my resume
        </a>  
        </Typography>

    </ThemeProvider>
  );
}


export default Header;
