import {GET_API, GET_COUNTRIES, GET_COUNTRY_ID, GET_COUNTRY_NAME, SORT_COUNTRIES, REGION_FILTER, GET_ACTIVITIES, ASCENDING, DESCENDING} from '../const'
import axios from 'axios';
import {COUNTRIES} from "../const"

export function getCountries () {
    return  function (dispatch)  {
       return  fetch(GET_API)
       .then(response => response.json())
       .then(json => {
           dispatch({ type: "GET_MOVIES", payload: json})
       })
    }
}


 
// export const getCountryByName = (name) => {
//     return  async (dispatch) => {
//         const reqApiName = await axios.get(`https://localhost:5001/countries?name=${name}`)
//             dispatch({
//                 type: GET_COUNTRY_NAME,
//                 payload: reqApiName.data
//             })
//     }
// }

// export const getCountryByName = (name) => {
//     return  function (dispatch)  {
//         axios
//         .get(`http://localhost:5001/countries?name=${name}`)
//         .then((response) => {
//         dispatch({
//                 type: GET_COUNTRY_NAME,
//                 payload: response.data
//             })
//         })
//     }
// }

export function getCountryByName(Name){
	return function(dispatch){
		return fetch(`http://localhost:5001/countries?name=${Name}`)
		.then(response=> response.json())
		.then(json => {
			dispatch({ type: "GET_COUNTRY_NAME", payload: json})
		})
	}
}
 

// export const getCountryById = (ID) =>{
//     return  async (dispatch) => {
//         const reqApiId = await axios.get(`https://localhost:3001/countries/${ID}`)
//             dispatch({
//                 type: GET_COUNTRY_ID,
//                 payload: reqApiId.data
//             })
//     }
// }
export function getCountryById(ID){
	return function(dispatch){
		return fetch(`http://localhost:5001/countries/${ID}`)
		.then(response => {
			dispatch({ type: GET_COUNTRY_ID, payload: response.data})
		})
	}
}

export const postActivities = (form, countries) => {
        return async () => { 
           await axios.post('https://localhost:5001/activities', 
           Object.assign(form,
            {Countries: countries}))
        }
}

export const getActivities = () => {
    return async (dispatch) => {
        const getActivites = await axios.get('https://localhost:5001/countries')
        dispatch({
            type: GET_ACTIVITIES,
            payload: getActivites.data
        })
    }
}

export function Sort(order, orderCountries) {
    let countries = [...orderCountries]

    countries.sort((a, b) => {

        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();

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



export function regionFilter(data){
    return async (dispatch) => {
        const getByRegion = await axios.get(`http://localhost:5001/countries?region=${data}`)
        dispatch({
            type: REGION_FILTER,
            payload: getByRegion.data
        })

    }
}
