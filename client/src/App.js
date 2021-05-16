import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/landing/landing.js';
import SearchBar from './components/searchbar/searchbar.js'
import Countries from "./components/home/homeok"
import Country from './components/country/country.js'

function App() {
  return (
    <div className="App">
       <React.Fragment>
        <Route  exact path="/"  component={Landing} />
        <Route exact path="/home" component={Countries} />
        {/* <Route path="/home" component={SearchBar} /> */}
        {/* <Route exact path="/home" component={Country} /> */}
      </React.Fragment>
    </div>
  );
}

export default App;
