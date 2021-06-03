import React from "react";
import {Link} from "react-router-dom"

import style from  './footer.module.css'

export function Footer() {
    return(
     <div className={style.footer}>
    <a  href="https://www.linkedin.com/in/felipefernandezescalante"><img className="footerlinkedin" src="https://adinamarca.github.io/IMG/linkedin.png" alt="logo" width="70" height="70" margin-righ="auto" cursor="pointer"/></a>
    </div>  
       
    )
}

export default Footer