import React from 'react'
import {connect} from 'react-redux';
import {Sort} from '../../actions/actions'
import {ASCENDING, DESCENDING} from '../../const'

export function Sorting(props) {

    function handleChaneSort(e) {
        if(e.target.value === ASCENDING || e.target.value === DESCENDING){
            props.Sort(e.target.value, props.countries)
        }
    }

    return (
        <div className= "container">

            <select className="alphabetical" onChange={handleChaneSort}>
                <option>Alphabetical</option>
                <option value={ASCENDING}></option>
                <option value={DESCENDING}></option>              
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
        Sort: (a, b) => dispatch(Sort(a, b))
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting)


