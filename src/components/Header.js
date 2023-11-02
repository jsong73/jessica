import React from "react"
import Typewriter from "typewriter-effect"
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../"

const theme = createTheme({
    typography: {
      headerBio:{
        fontSize: 20,
        color: "##2A2B2A",
      },
      typeWriter:{
        fontSize: 50,
        color: "#2A2B2A",
      },

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
          <Typography variant="headerBio">I'm a self-taught full stack developer interested in all things computer interactions and web development.</Typography>
        </div>
  
    </ThemeProvider>
  );
}


export default Header;
