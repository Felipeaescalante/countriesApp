// Reducer: vamos a levantar las acciones que creamos
import {GET_COUNTRIES, GET_COUNTRY_ID, GET_COUNTRY_NAME, SORT_COUNTRIES, REGION_FILTER} from '../const'


const initialState ={
    countries: [], 
    country: [],
    idcountry: {},
}

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case GET_COUNTRIES:
//             return {
//                 ...state,
//                 countries: action.payload
//             };
//         default:
//             return {
//                 ...state
//             }
//     }
// }
// export default reducer

function rootReducer(state = initialState, action) {
    if(action.type === "GET_COUNTRIES"){
        return {
            ...state,
            countries: action.payload
        }
    }
    if(action.type === "GET_COUNTRY_NAME"){
        return {
            ...state,
            country: action.payload.name
        }
    }
    if(action.type === GET_COUNTRY_ID){
        return {
            ...state,
			idcountry: action.payload,
			country: action.payload.nombre
        }
    }
    if(action.type === SORT_COUNTRIES ){
        return {
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
    
    return state
 
}

export default rootReducer;