// import React, {useState, useEffect} from 'react'
// import {connect} from 'react-redux'
// import {getCountries, getCountryByName} from '../../actions/actions'
// import {Country} from '../country/country.js' 
// import axios from 'axios'
// import { post } from '../../../../api/src/app'
// import Countries from './components/home/home.js'

// // function Home ({getCountries, state}){
// //     const [countries, setCountries] = useState([])
// //     useEffect (() => {
// //         getCountries();
// //         setCountries(state)
// //     }, [state])
// // }

// const Home = () => {
   
//        const  [countries, setCountries] = useState([]);
//        const [loading, setLoading] = useState(false);
//        const [currentPage, setCurrentPage] = useState(1);
//        const [postsPerPage, setPostsPerPage] = useState(10);

//        useEffect (() =>{
//            const fetchPosts = async () => {
//                setLoading (true);
//                const res = await axios.get('https://localhost:5001/countries')
//                setCountries(res.data);
//                setLoading (false);
//            }
//          fetchPosts();
//        }, []);

//        const indexOfLastPost = currentPAge * postsPerPage;
//        const indexOfFirstPost = indexOfLastPost - postsPerPage;
//        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
        
    

//     // const block = 10;
//     // const totEnd = page * block;
//     // const initial = page - block;

//     // const countries = props.countries.slice(initial, totEnd);

//     // useEffect(() => {
//     //         props.getCountries()},[]);
// // function getCountriesPlease() {
// //     return axios.get('http://localhost:5001/countries')
// //     .then(countries => setCountries(countries.data))
// // }

//     // useEffect(()=> {
//     //     getCountriesPlease()
        
//     // }, [])
    

//     return (
//         <div className= "countries">
//             <h1 className="text-primary mb-3">Cities</h1>
//             <Countries posts ={posts} loading={loading}/>
//                 {/* {countries && countries.map(country =>
//                    <div className="divisorCountry">
//                    <h1>{country.Name}</h1>
//                    <img src={country.Flag}/>
//                   </div> )} */}


//             {/* <div className="pagBtn">
//             <button onClick={() => setPage(page - 1)}>backward</button>
//             <button>{page}</button>
// 			<button onClick={() => setPage(page + 1)}>forward</button> */}
//              {/* </div> */}
//         </div>
//     )
//  }
    
// export default Home;

// // function mapStateToProps(state){
// //     return {
// //         countries: state.countries
// //     }
// // }

// // function mapDispatchToProps(dispatch){
// //     return {
// //         getCountries: (country) => dispatch(getCountries(country)),
// //         getCountryByName: name => dispatch(getCountryByName(name))
// //     }
// // }

// // export default connect (mapStateToProps, mapDispatchToProps)(Home)
