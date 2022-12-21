import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import Category from 'components/Category';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';

const POPULAR_GIFS = ['Matrix', 'Rick and Morty', 'Programacion'];

export default function Home() {
	const [keyword, setKeyword] = useState('');
	const [path, pushLocation] = useLocation();

	const {gifs} = useGifs();

	const handleSubmit = evt => {
		evt.preventDefault();
		pushLocation(`/search/${keyword}`); // Navega a otra ruta utilizando lo que hay en el estado keyword
	};

	const handleChange = evt => {
		setKeyword(evt.target.value); // Guarda el valor del input en el estado keyword
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type='text'
					placeholder='Busca tu gif aqui'
					value={keyword}
				/>
			</form>
			<div className='App-main'>
				<div className='App-results'>
					<h3 className='App-title'>Ultima busqueda</h3>
					<ListOfGifs gifs={gifs} />
				</div>
				<div className='App-category'>
					<TrendingSearches />
				</div>
			</div>
		</>
	);
}
