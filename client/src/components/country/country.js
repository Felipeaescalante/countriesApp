import React from 'react';
import {Link} from 'react-router-dom';
import {getCountries} from '../../actions/actions'
import {connect} from "react-redux";

export function Country(props){
	console.log(props)
// 	return(
// 		<div className="card">
// 		<div className="imgn">
// 			<img src={data.flag} alt={data.name} className='imgcards'/>
// 		</div>
// 		<div className="datos">
// 			<div className="nombre">
// 			<h1>{data.name}</h1>
// 			</div>
// 			<h2>{data.region}</h2>
// 			<Link to={`/home/details/${data.ID}`}>
// 			   <button className="detail">Country Detail</button>
// 		    </Link>
// 		</div>
// 		</div>
// 		)

		// const [countries, setCountries] = React.useState([])

		function getCountriesFunction(){
			props.getCountries()
		}
		 
		React.useEffect(() =>{
			getCountriesFunction()
		},[])
		return (
			<div>
				{props.countries.map((c)=>{
					return (
					<div>
						<h1>{c.Name}</h1>
					</div>
						 )
				})}
			</div>
		)


}
function mapStateToProps(state){   // traigo el estado
    return {
        countries: state.countries
    }
}

function mapDispatchToProps(dispatch){  // traigo los parámtros
    return {
        getCountries: name => dispatch(getCountries(name))
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Country)


