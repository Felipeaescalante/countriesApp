import React from 'react';
import {Link} from 'react-router-dom'
import style from './landing.module.css'


export default function Landing(){

    return(

    <div className= {style.div}>
           <div className= {style.landing}>     
        <h1>The World in your hands</h1>
        <div> 
          <p>Enjoy every country in different ways</p>
        </div>
        <Link to= '/home'>
            <button className= {style.btnp}type= 'submit'>To Freedom</button>
        </Link>
        </div> 
        

    </div>
    )
}