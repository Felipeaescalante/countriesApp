import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getCountryById } from '../../actions/actions';
import {useParams} from 'react-router-dom'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faClock, faCalendarAlt, faRunning } from '@fortawesome/free-solid-svg-icons'

import style from  "./countrydetails.module.css"



function Detail (){

    let {idCountry} = useParams()
	let dispatch = useDispatch()
    
    useEffect(() => {
		dispatch(getCountryById(idCountry))

  }, [])
 let country = useSelector(state => state.idcountry)
	return(

	<div>

		<div className={style.movie_card} id="country">
  <div className={style.info_section}>
    <div className={style.movie_header}>
      <img className={style.locandina} src={country.Flag} />
      <h1>{country.Name}</h1>
      <h4>{country.Region}</h4>
      <span className={style.minutes}>{country.ID}</span>
      <p className={style.type}>{country.Capital}</p>
    </div>
    <div className={style.movie_desc}>
      <p className={style.text}>
	  <p>{country.Subregion}</p>
	  <p>{country.Area} km2</p>
	  <p>{country.Population} inhabitants</p> 
      </p>
    </div>
	
  <div className={style.blur_back.worldpic}></div>
</div>
</div>



<div className={style.activities_card}>

<p className={style.activity_name}>Activities</p>
		
		<p className={style.act_section}>{country.activities && country.activities.map(c => 
			
			<div className={style.act_section}>
			<p><FontAwesomeIcon icon={faRunning}/>  : {c.Name} </p>				
			<p><FontAwesomeIcon icon={faTrophy}/> :  {c.Challenge}</p>			
			<p><FontAwesomeIcon icon={faClock}/> :  {c.Duration} </p>
			<p><FontAwesomeIcon icon={faCalendarAlt}/> : {c.Season}</p>
			</div>
			
			)}</p>

</div>
</div>



/* 
		// <div >
			
        //   <div className="card1">
		// 	<img src={country.Flag} alt={country.Name}  className="flagdetail"/>
		//     <div className="blockdetails">
		// 		<p className="namedetail">{country.Name}</p>
		// 		<div className="restdetails">
		// 		<p font-size="40px">{country.Region}</p>
		// 		<p className="">{country.ID}</p> 
		// 		<p>{country.Capital}</p>
		// 		<p>{country.Subregion}</p>
		// 		<p>{country.Area} km2</p>
		// 		<p>{country.Population} inhabitants</p>
		// 		</div>
		//     </div>
		//   </div>
			
		  

		 /* <div className="boxactivities">
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
		</div> */

		
		// </div> */}
		)

}


export default Detail