import React from "react";
import {NavLink} from "react-router-dom"


export default function Navbar(){
    return (
        <header className="navbar">
            <div>
                <NavLink to="/"> 
                  //poner un logo de la página
                </NavLink>
            </div>

            <nav> 

              <ul className= "list">
                  <li className="items">
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/favs" >Favoritas</NavLink>
                 </li>

              </ul>
            </nav>
        </header>
    )
}
