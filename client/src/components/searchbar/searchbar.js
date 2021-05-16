import React, { Component, useState } from 'react';
import {connect} from "react-redux";
import './searchbar.css';
import {getCountryByName, getCountries} from '../../actions/actions'


export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: ""
        };
    }
    
    handleChange(e){
      this.setState({country: e.target.value});

};

    handleSubmit(e) {
    e.preventDefault();
    this.props.getCountries();
    
    }
 
    
render(){
    const {country} = this.state;
    return (
        <div>
          <h2>Buscador</h2>
          <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label className="label" htmlFor="title">Country: </label>
              <input
                type="text"
                id="title"
                autoComplete="off"
                value={country}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button  type="submit">BUSCAR</button>
          </form>
          <ul>
           {
           this.props.countries && this.props.countries.map(country => (
            <div>
            {country.Name}
            </div>
           ))
}
          </ul>
          </div>
    );
}
}

function mapStateToProps(state){   // traigo el estado
    return {
        pais: state.country
    }
}

function mapDispatchToProps(dispatch){  // traigo los parámtros
    return {
        getCountries: name => dispatch(getCountries(name))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(SearchBar)