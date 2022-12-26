import React, { useCallback } from 'react';
import { Link, useLocation } from 'wouter';
import Category from 'components/Category';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';
import SearchForm from 'components/SearchForm';
import { Helmet } from 'react-helmet';

const POPULAR_GIFS = ['Matrix', 'Rick and Morty', 'Programacion'];

export default function Home() {
	const { gifs } = useGifs();

	return (
		<>
			<Helmet>
				<title>Home | Giffy</title>
			</Helmet>
			<SearchForm />
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
