import React from "react";
import {Link} from "react-router-dom";

import './country.css'

export function Country (props){
	return (
		<div>
		<div className="continer">
			{/* <img className="flag" src={props.Flag} alt={props.Name} /> */}
			<Link to={`/home/detail${props.ID}`}>
			<button className="buttonCountry"><img className="flag" src={props.Flag} alt={props.Name} /></button>
		    </Link>
		</div>
		<div className="textcountry">
			<h2 className="region">{props.Region}</h2>
			<div className="namecountry">
			<h1 >{props.Name}</h1>
			</div>
		</div>
		 
		</div>
	)
}

export default Country;


