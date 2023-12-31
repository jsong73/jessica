import React from "react"
import "../styles/Footer.css"

function Footer() {
    return(
        <div id="footer">
            <div className="footer-text"> 
                <div> Created by Jessica Song. </div>  
                <div>Built with React and Material UI. Hosted on GitHub Pages. </div>
                <div>{(new Date().getFullYear())}</div>
                </div>
        </div>
    )
}

export default Footer;