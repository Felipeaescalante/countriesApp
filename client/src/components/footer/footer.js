import React from "react";
import {Link} from "react-router-dom"

import  './footer.css'

export function Footer() {
    return(
     <div className="footer">
    <a  href="https://www.linkedin.com/in/felipefernandezescalante"><img className="footerlinkedin" src="https://adinamarca.github.io/IMG/linkedin.png" alt="logo" width="70" height="70" margin-righ="auto" cursor="pointer"/></a>
    </div>  
       
    )
}

export default Footer