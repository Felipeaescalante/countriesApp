import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/landing/landing.js';
import Search from './components/searchbar/searchbar.js'
import Home from "./components/home/home"
import Country from './components/country/country.js'
import Detail from './components/countrydetails/countrydetails.js'
import Navbar from "./components/navbar/navbarok"
import CreateActivity from "./components/activity/activity"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
       <React.Fragment>
        <Route  exact path="/"  component={Landing} />
        <Route path="/home" component={Navbar}/>
        <Route exact path="/home/detail:idCountry" component={Detail} />
        <Route exact path="/home/create"component={CreateActivity}/>
        <Route exact path="/home" component={Home} />
        <Route patch="/home" component={Footer}/>
        {/* <Route path="/home" component={Search} /> */}
        {/* <Route exact path="/home" component={Country} /> */}
      </React.Fragment>
    </div>
  );
}

export default App;
