import React from "react"


function Footer() {
    return(
        <div id="footer">
            <div className="footer-text"> 
                <div> Created by Jessica Song. </div>
                <div>{(new Date().getFullYear())}</div>
                </div>
        </div>
    )
}

export default Footer;