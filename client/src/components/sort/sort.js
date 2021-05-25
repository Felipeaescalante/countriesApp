import React from 'react'
import {connect} from 'react-redux';
import {Sort, SortPopulation } from '../../actions/actions'
import {ASCENDING, DESCENDING, POP_ASCENDING, POP_DESCENDING} from '../../const'

import style from "./sort.css"
export function Sorting(props) {

    function handleChaneSort(e) {
        if(e.target.value === ASCENDING || e.target.value === DESCENDING){
            props.Sort(e.target.value, props.countries)
        }
    }

    function handleDispatchPopulations(e) {
        if(e.target.value === POP_ASCENDING || e.target.value === POP_DESCENDING){
            props.SortPopulation(e.target.value, props.countries)
        }
    }

    return (
        <div className= "boxsort">

            <select className="alphabetical" onChange={handleChaneSort}>
                <option>Alphabetical</option>
                <option value={ASCENDING}>Up</option>
                <option value={DESCENDING}>Down</option>              
            </select>
            <select className="population" onChange={handleDispatchPopulations}>
                <option >Population </option>
                <option value={POP_DESCENDING}>Up</option>
                <option value={POP_ASCENDING}>Down</option>  
            </select>
        </div>
    )
}

function mapStateToProps(state){
    return {
        countries: state.countries,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        Sort: (a, b) => dispatch(Sort(a, b)),
        SortPopulation: (a, b) => dispatch(SortPopulation (a, b)),

        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting)


