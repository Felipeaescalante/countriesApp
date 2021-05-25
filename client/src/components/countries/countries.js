import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';

import Country from '../country/country';
import {getCountries, getCountryByName} from '../../actions/actions'

import style from './countries.css';


export function Countries (props){
    const [pageNumber, setPageNumber] = useState(1);

    const group = 10;
    const finalCount = pageNumber * group;
    const initialCount = finalCount - group;
    

    const paises = props.countries.slice(initialCount, finalCount);

    useEffect(() => {
        props.getCountries()
    }, [])

    return (

           
                    <div className="">
                        <div className="countries">

                        {paises && paises.map(c => 
                        <div className="">
                            <Country
                            Name={c.Name}
                            Flag={c.Flag}
                            Region={c.Region}
                            ID={c.ID}/>
                        </div>)}
                            </div>
                
                        <div className="pagination">
                            <button  className="back"  onClick={() => setPageNumber(pageNumber - 1)}>←</button>
                            <button className="back">{pageNumber}</button>
                            <button className="back" onClick={() => setPageNumber(pageNumber + 1)}>	→</button>
                        </div>
                    </div>
                
            )
        }
        
        function mapStateToProps(state){
            return {
                countries: state.countries
            }
        }
        
        function mapDispatchToProps(dispatch){
            return {
                getCountries: () => dispatch(getCountries()),
                getCountryByName: Name => dispatch(getCountryByName(Name))
            }
        }
        
        export default connect(mapStateToProps,mapDispatchToProps)(Countries)



