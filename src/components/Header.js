import React from "react"
import Typewriter from "typewriter-effect"
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Button from "@mui/material/Button"

const theme = createTheme({
    typography: {
      headerBio:{
        fontSize: 18,
        color: "rgba(245, 241, 237, 0.6)",
        wordSpacing: "0.3em",
      },
      typeWriter:{
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
          <Typography variant="headerBio">I'm a self-taught full stack developer interested in all things computer interactions and web development. I thrive on crafting optimal technical solutions that are both functional and user-centric.  </Typography>
        </div>

        <Button
          href="https://drive.google.com/file/d/1l1Kyr2mM1-7HqaS34Kwf7xlVKCHLiG3w/view"
          target="_blank" 
          variant="outlined"
          size="large"
          sx={{
            color: "rgba(245, 241, 237, 0.6)",
            "&:hover": {
              borderColor: "#F5F1ED" ,
              color:"#F5F1ED"
          },
          fontSize: 16,
          textTransform: "none",
          padding: 1.5,
          fontFamily: "NTR, sans-serif" ,
          borderColor: "#F5F1ED",
          fontWeight: "bold"
        }}
        > view my resume <KeyboardArrowRightOutlinedIcon />  
      </Button>

      </div>
    </ThemeProvider>
  );
}


export default Header;
