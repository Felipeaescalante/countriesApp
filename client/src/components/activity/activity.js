import {connect} from 'react-redux';
import React, {useState, useEffect} from 'react'
import {getCountries, getCountryById} from "../../actions"


export function CreateActivity (props) {

    const [input, setInput] = useState({
        ID: [],
        name: "",
        challenge: "",
        duration: "",
        season: ""

    })

    const [idcountry, setIdCountry] = useState({
        country: []
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.Name]: e.target.value
        })
    };

    function handleCountry (e) {
        props.getCountryById(e.target.value)
         
    }

    setInput({
        ...input,
        [e.target.NAme]:[...input.ID. e.target.value]
    })

    setInputCountry({
        country:[...inputCountry.country, props.countryNAme]
    })
    
        
    }

    useEffect(() => {
        props.getCountries()
    },[]);

    async function handleSubmit(e){
        e.preventDefault();

    }

    return (
            a
    )

    function mapStateToProps(state){
         return {
           countries: state.countries,
        countryByID: state.countrybyID
         }
    };

    function mapDispatchToProps(dispatch){
        return{
          getCountries: () => dispatch(getCountries()),
          getCountryById: () => dispatch(getCountryById(ID)),
        }
    };

    export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity)
