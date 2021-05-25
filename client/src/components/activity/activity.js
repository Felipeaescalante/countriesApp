import {connect} from 'react-redux';
import React, {useState, useEffect} from 'react'
import {getCountries, getCountryById, postActivities} from "../../actions/actions"
import fetch from 'node-fetch'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import "./activity.css"


 function CreateActivity (props) {
    const [input, setInput] = useState({
        Name: "",
        Challenge: "",
        Duration: "",
        Season: "",
        Countries: [],

    })
 
    const [inputCountry, setInputCountry] = useState({country:[]})

    function handleName (name){
        setInput({
            ...input,
            Name: name.target.value
        })
    }
    function handleChallenge (e){
        setInput({
            ...input,
            Challenge: e.target.value
        })
    }
    function handleDuration (e){
        setInput({
            ...input,
            Duration: e.target.value
        })
    }
    function handleSeason(e){
        setInput({
            ...input,
            Season: e.target.value
        })
    };

    let handleOnChangeCountry = (e) => {
        
            props.getCountryById(e.target.value)
            setInput({
                ...input,
                Countries:[...input.Countries, e.target.value]
                   
            })
            setInputCountry({
                country:[...inputCountry.country, props.countryName]
            })
        }
        console.log(input, inputCountry)
        
        useEffect(() => {
    getCountries()
    },[]);

        async function handleSubmit (e) {
            e.preventDefault();
            console.log(input + "esto es input")
            try {
				await axios.post('http://localhost:5000/activities', input
                // {
                //     Name: "playing",
                //     Challenge: "2",
                //     Duration : "2",
                //     Season : "summer",
                //     Countries:["URY"]
                    
                // } 
                )
               
				
			} catch (err) {
				console.log(err);
			}

        }
    

     return (

        <div className="totativity">
            <div className="title">
                <h1 >Create Activity</h1>
            </div>
            <div className="boxactivity">
                <form onSubmit={handleSubmit}>
                  <input
                    className="inputs"
                    placeholder="Name Activity"
                    type="text"
                    name="Name"
                    required="required"
                    onChange={handleName}
                    />
                

                    <select name="Challenge"  onChange={handleChallenge} required>
                        <option value="Challente">Select Challenge</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <select name="Duration"  onChange={handleDuration} required>
                        <option value="Duration">Select Duration (hrs)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>


                <select name="Season"  onChange={handleSeason} required>
                       <option value="Season">Select Season</option>
                       <option value="summer">Summer</option>
                       <option value="autum">Autum</option>
                       <option value="winter">Winter</option>
                       <option value="spring">Spring</option>
                </select>
            <div>

                        <select className="selects" name="ID" value={input.ID} onChange={handleOnChangeCountry}>
                        <option value="">Select Countries</option>
                            {props.countries && props.countries.map(c => (
                               <option value={c.ID} name="c.Name">{c.Name}</option>
          ))}
                        
                        </select>
                        <div>
                        <button type="submit" onClick={handleSubmit}>Create Activity</button>
                        </div>
             </div>
        
                    </form>
            </div>
         </div>
    )

}

    
    function mapStateToProps(state){
        return {
            countries: state.countries,
            countryName: state.countryName,
        }
    };
    
    function mapDispatchToProps(dispatch){
        return{
      
        getCountries: () => dispatch(getCountries()),
        getCountryById: (Countries) => dispatch(getCountryById(Countries)),
        }
    };

    export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity)
