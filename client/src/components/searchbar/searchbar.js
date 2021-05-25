import React, { useState } from 'react';
import { connect } from 'react-redux';
import Country from '../country/country.js';
import { getCountryById, getCountryByName } from '../../actions/actions'

import "./searchbar.css"

export function Search(props) {
	const [input, setInput] = useState({
		country: "",
	})

	function handleChange(e){
		if(typeof e.target.value  === "number"){
			alert("Please enter a valid name")
		}
    setInput({
    	country: e.target.value
    })};

    function handleSubmit(e){
    	e.preventDefault()

    if (input.country) {
      props.getCountryByName(input.country)
    } else {
      alert("You must enter a valid country name!")
	}
  }

	return(
	<div className="cnt">
		<form onSubmit={(e) => handleSubmit(e)}>
		<input
		className="input"
		type="text"
		placeholder="Search Country..."
		name="pais"
		value={input.country}
		onChange={(e) => handleChange(e)}

		/>
		<button type="submit" className="btns">Search</button>
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