import React, { useState } from 'react';
import { connect } from 'react-redux';
import Country from '../country/country.js';
import { getCountryById, getCountryByName } from '../../actions/actions'

import style from"./searchbar.module.css"

export function Search(props) {
	const [input, setInput] = useState({
		country: "",
	})

	function handleChange(e){
		// if(typeof e.target.value  === "number"){
		// 	alert("Please enter a valid name")
		// }
    setInput({
    	country: e.target.value
		
    })};
	console.log(input)

    function handleSubmit(e){
    	e.preventDefault()

    if (input.country) {
      props.getCountryByName(input.country)
    } else {
      alert("You must enter a valid country name!")
	}
  }

	return(
	<div className={style.wrapper}>
		<form className={style.input} onSubmit={(e) => handleSubmit(e)}>
		<input
		className={style.search}
		type="text"
		placeholder="Search Country..."
		name="pais"
		value={input.country}
		onChange={(e) => handleChange(e)}
		/>
		  
		</form>
	</div>
	)
}

function mapStateToProps(state) {
  return {
    	countries: state.countries
	}
}

function mapDispatchToProps(dispatch) {
  return {
    getCountryByName: Name => dispatch(getCountryByName(Name))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)