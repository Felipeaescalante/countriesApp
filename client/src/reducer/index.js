// Reducer: vamos a levantar las acciones que creamos
import axios from 'axios'
import {GET_COUNTRIES, GET_COUNTRY_ID, GET_COUNTRY_NAME, SORT_POPULATION, REGION_FILTER, CREATE_ACTIVITY, GET_ACTIVITIES, SORT_COUNTRIES} from '../const'


const filterActivity = (paises, actividad) => {
    if(actividad === "All") return paises;
   else if (actividad) {

        paises = paises.filter(pais => pais.activities && pais.activities.length > 0)

        if (actividad) paises = paises.filter(pais => Object.values(pais.activities).map(act => act.Name).includes(actividad))
    }
    return paises
}

const initialState ={
    countries: [], 
    country: [],
    idcountry: {},
    activities: [],
    regions: [],
    

}



function rootReducer(state = initialState, action) {
    if(action.type === GET_COUNTRIES){
        return {
            ...state,
            countries: action.payload
        }
    }
    if(action.type === GET_COUNTRY_NAME){
        return {
            ...state,
            countries: action.payload
        }
    }
    if(action.type === GET_COUNTRY_ID){
        return {
            ...state,
			idcountry: action.payload,
            // country: action.payload.Name
        }
    }
    if(action.type === GET_ACTIVITIES ){
        return {
            ...state,
            activities: action.payload
        }
    }
    if(action.type === CREATE_ACTIVITY ){
        axios.post('http://localhost:5000/activities', action.payload)
        return {
            ...state,
            submit: 'Activity created'
        }
    }
    if(action.type === SORT_COUNTRIES){
        return{
			...state,
			countries: action.payload
        }
    }
    if (action.type === SORT_POPULATION){
        return{
			...state,
			countries: action.payload
        }
    }

    if(action.type === REGION_FILTER) {
        return {
            ...state,
            countries: action.payload
        }
    }
    if(action.type === "FILTER_BY_REGION") {
        return {
            ...state,
            regions: action.payload
        }
    }
    if(action.type === "FILTER_BY_ACTIVITIES") {

        return {
            ...state,
            countries: filterActivity(state.countries, action.payload)
       

        }
    }

       
    return state
 
}

export default rootReducer;