import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCountries} from '../../actions/actions'

function Countries({countries, getCountries}){
    function getCountriesFunction(){
        getCountries()
    }
    useEffect(() => {
        getCountriesFunction()
    }, [])

    return (
        <div>
            {countries.map((country) => {
                return (
                    <div>
                        <p>{country.Name}</p>
                        <p>{country.Region}</p>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: (country) => {
            dispatch(getCountries(country))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries)
