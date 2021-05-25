import {GET_API, GET_COUNTRIES, GET_COUNTRY_ID, GET_COUNTRY_NAME, CREATE_ACTIVITY, SORT_COUNTRIES, REGION_FILTER, GET_ACTIVITIES, ASCENDING, DESCENDING, SORT_POPULATION, POP_ASCENDING, POP_DESCENDING} from '../const'
import axios from 'axios';

export function getCountries() {
    return  function (dispatch)  {
       return  fetch(GET_API)
       .then(response => response.json())
       .then(json => {
           dispatch({ type: GET_COUNTRIES, payload: json})
       })
    }
}



export function getCountryByName(Name){
	return function(dispatch){
		return fetch(`http://localhost:5000/countries?Name=${Name}`)
		.then(response=> response.json())
		.then(json => {
			dispatch({ 
                type: GET_COUNTRY_NAME, 
                payload: json})
		})
	}
}
 


export function getCountryById(ID){
	return function(dispatch){
		return fetch(`http://localhost:5000/countries/${ID}`)
        .then(response => response.json())
		.then(json => {
			dispatch({ 
                type: GET_COUNTRY_ID, 
                payload: json[0]
            })
		})
	}
}

export function getCountryCreate(ID){
    return function (dispatch){
		return fetch(`http://localhost:5000/countries/${ID}`)
        .then(response => response.json())
    }
}


export function getActivities(){
	return function(dispatch){
		return fetch('http://localhost:5000/activities')
			.then(response => response.json())
			.then(json => {
				dispatch({type: GET_ACTIVITIES, payload: json})
		})
	}}


export const CountryActivities = (activity) => {
    return {
        type: "FILTER_BY_ACTIVITIES",
        payload: activity
    }
}

export function Sort(order, orderCountries) {
    let countries = [...orderCountries]

    countries.sort((a, b) => {

        let nameA = a.Name.toUpperCase();
        let nameB = b.Name.toUpperCase();

        if(order === ASCENDING){
            if (nameA < nameB){
                return -1;
            }
            if (nameA > nameB){
                return 1
            } 
            return 0;
        };

        if(order === DESCENDING){
            if(nameA < nameB){
                return 1;
            }
            if (nameA > nameB){
                return -1
            }
            return 0;
        };
    })
    return function(dispatch){
        dispatch({
            type: SORT_COUNTRIES, 
            payload: countries})
    }
}

export function SortPopulation (sort, sortPopulation) {
    let population = [...sortPopulation]

    population.sort(function(a,b){
        var populationA = parseFloat(a.Population)
        var populationB = parseFloat(b.Population)

        if(sort === POP_ASCENDING){
            if(populationA < populationB){
                return -1;
            }
            if (populationA > populationB){
                return 1;
            } return 0
        }
        if(sort === POP_DESCENDING){
            if(populationA < populationB){
                return 1;
            }
            if (populationA > populationB){
                return -1;
            }
            return 0
        }
    })
    return function (dispatch){
        dispatch({
             type: SORT_POPULATION, 
             payload: population
            })
    }
}



export function RegionFilter(data){
    return async (dispatch) => {
        const getByRegion = await axios.get(`http://localhost:5000/countries?Region=${data}`)
        dispatch({
            type: REGION_FILTER,
            payload: getByRegion.data
        })

    }
}

export function GetRegions(){
    return  (dispatch) => 
    fetch(`http://localhost:5000/countries`)
        .then((response) =>response.json())
        .then((json) =>{
            dispatch({ 
                type: REGION_FILTER,
                payload: json
            })
        })
    }

    export const OrderByRegion = (Region) => (dispatch, getState) => {
        let filteredRegions = [];
      
        if (Region === "All") {
          filteredRegions = getState().countries.slice();
        } else {
          filteredRegions = getState()
            .countries.slice()
            .filter((country) =>
              (country.Region || []).includes(Region)
            )
        };
        dispatch({
          type: "FILTER_BY_REGION",
          payload: {
            Region,
            regionCountries: filteredRegions,
          },
        });
      };


