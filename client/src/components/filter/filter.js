import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { useSelector, useDispatch } from "react-redux";



import {CountryActivities, getActivities, getCountries, RegionFilter} from '../../actions/actions';

import style from "./filter.module.css"

export function Filters(props) {

    const dispatch = useDispatch();


     useEffect(() => {
        props.getActivities();
  }, []);

    const handleFilter = (e) => {
        dispatch(CountryActivities(e.target.value));
      };

    function handleDispatchRegion(e){
        props.RegionFilter(e.target.value)
    }
 


    return(
        <div className={style.box}>
            <div className={style.select}>
  
        <select className={style.region} name="Region" onChange={handleDispatchRegion}>
                <option value="countries">Region</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Africa">Africa</option>
                <option value="Polar">Polar</option>
        </select>
        <select className={style.activities} name= "activities" onChange={handleFilter}>
            
                <option value="">Tourist Activity</option>
                <option value="All">All</option>
                {props.activities && props.activities.map(a => (
                    <option value={a.Name}>{a.Name}</option>
                ))}
                
        </select>
        </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        countries: state.countries,
        activities: state.activities

    }
}

function mapDispatchToProps(dispatch){
    return {
        RegionFilter: (a,b) => dispatch(RegionFilter(a,b)),
        getCountries: () => dispatch(getCountries()),
        getActivities: () =>dispatch(getActivities()),
        CountryActivities: (Name) => dispatch(CountryActivities(Name))

        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)


