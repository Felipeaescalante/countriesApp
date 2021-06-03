import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';

import Country from '../country/country';
import {getCountries, getCountryByName} from '../../actions/actions'

import style from './countries.module.css';


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
                        <div className={style.countries}>
                        
                        {paises && paises.map(c => 
                        <div className={style.countries}>
                            <Country 
                            Name={c.Name}
                            Flag={c.Flag}
                            Region={c.Region}
                            ID={c.ID}/>
                        </div>)}
                            </div>
                            
                        <div className={style.pagination}>
                            {paises.length >=group ?
                            <button  className={style.back}  onClick={() => setPageNumber(pageNumber - 1)}>←</button>
                            :null}
                            <button className={style.back}>{pageNumber}</button>
                            {paises.length>= group?
                            <button className={style.back} onClick={() => setPageNumber(pageNumber + 1)}>	→</button>
                            : null}
                            
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



