
import React from 'react';
import Countries from '../countries/countries'
import Sort from '../sort/sort.js';
import Filters from '../filter/filter';
import style from './home.module.css'



export function Home(){
	return(
		<div>
			<ul className="home">
				<div className="cnttitulo">
				</div>
				<div className="filts">
				<Sort/>
				</div>
				<div>
				<Filters/>
				</div>
			</ul>
				<div className={style.cards}>
				<Countries/>
				</div>
		</div>
		)
}

export default Home