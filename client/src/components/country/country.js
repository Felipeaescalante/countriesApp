import React from "react";
import {Link} from "react-router-dom";

import style from './country.module.css'

export function Country (props){
	return (
		<div>
		<div className={style.container}>
			{/* <img className="flag" src={props.Flag} alt={props.Name} /> */}
			<Link to={`/home/detail${props.ID}`}>
			<button className={style.buttonCountry}><img className={style.flag} src={props.Flag} alt={props.Name} /></button>
		    </Link>
		</div>
		<div className={style.textcountry}>
			<h2 className={style.region}>{props.Region}</h2>
			<div className={style.namecountry}>
			<h1 >{props.Name}</h1>
			</div>
		</div>
		 
		</div>
	)
}

export default Country;


