import React, {useState} from 'react';
import {Link, useLocation} from 'wouter';
import ListOfGifs from '../../components/ListOfGifs';
import {useGifs} from '../../hooks/useGifs';

const POPULAR_GIFS = ['Matrix', 'Rick and Morty', 'Programacion'];

export default function Home() {
	const [keyword, setKeyword] = useState('');
	const [path, pushLocation] = useLocation();

	const gifs = useGifs();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		pushLocation(`/search/${keyword}`); // Navega a otra ruta utilizando lo que hay en el estado keyword
	};

	const handleChange = (evt) => {
		setKeyword(evt.target.value); // Guarda el valor del input en el estado keyword
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type="text"
					placeholder="Busca tu gif aqui"
					value={keyword}
				/>
			</form>
			<h3>Ultima busqueda</h3>
			<ListOfGifs gifs={gifs} />
			<h3 className="App-title">Los gifs más populares</h3>
			<ul>
				{POPULAR_GIFS.map((popularGif) => (
					<li key={popularGif}>
						<Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
