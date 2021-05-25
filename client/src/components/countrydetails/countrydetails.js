import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getCountryById } from '../../actions/actions';
import {useParams} from 'react-router-dom'

import  "./countrydetails.css"



function Detail (){

    let {idCountry} = useParams()
	let dispatch = useDispatch()
    
    useEffect(() => {
		dispatch(getCountryById(idCountry))
		document.title =`Country: ${country.Name}`

  }, [])
 let country = useSelector(state => state.idcountry)
	return(

		<div >
			
          <div className="card1">
			<img src={country.Flag} alt={country.Name}  className="flagdetail"/>
		    <div className="blockdetails">
				<p className="namedetail">{country.Name}</p>
				<div className="restdetails">
				<p font-size="40px">{country.Region}</p>
				<p className="">{country.ID}</p> 
				<p>{country.Capital}</p>
				<p>{country.Subregion}</p>
				<p>{country.Area} km2</p>
				<p>{country.Population} inhabitants</p>
				</div>
		    </div>
		  </div>
			
		  

		 <div className="boxactivities">
			<div className="activities">
				<p className="titleact">Activities</p>
			
			<p className="ddactiv">{country.activities && country.activities.map(c => 
				<div className="racts">
				<div>
				<p>Activity</p>
				{c.Name} <br/>
				</div>
				<div>
				<p>Challenge</p>
				{c.Challenge} <br/>
				</div>
				<div>
				<p>Duration</p>
				{c.Duration} <br/>
				</div>
				<div>
			    <p>Season</p>
				{c.Season}	</div>
				</div>
				)}</p>
			</div>
		</div>

		
		</div>
		)

}


export default Detail