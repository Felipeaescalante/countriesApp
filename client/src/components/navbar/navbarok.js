import React from 'react';

import {NavLink} from 'react-router-dom';
import Search from '../searchbar/searchbar';

import estilo from './navbar.module.css'


export function Navbar(){
	return (
		<div className={estilo.tool}>

			<div className="bodyNav">
			<div className={estilo.headerNav}>
				<img className={estilo.logoNav} src="https://www.nicepng.com/png/full/34-347733_world-white-icon-png.png" alt="logo" width="60" height="60" margin-righ="auto" cursor="pointer"/>
				<nav> 
                <ul className={estilo.nav_link}>
					<li className={estilo.liNav}><NavLink to="/home">HOME</NavLink></li>				
					<li className={estilo.liNav}><NavLink to="/home/create" className="listItem">Create Activity</NavLink></li>				
				</ul> 
				</nav>
				<a className={estilo.btnNav} href="mailto:felipea.escalante@gmail.com?Subject=Contacto%20por%20full%20stack">Contact</a>
			</div>
			<li className={estilo.search}><Search/></li>

			</div>

		</div>
						

				

			
	)
}

export default Navbar