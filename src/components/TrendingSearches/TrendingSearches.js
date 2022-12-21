import React, { useState, useEffect } from 'react';
import getTrendingTerms from '../../services/getTrendingTermsService';
import Category from '../Category';

export default function TrendingSearches() {
	const [trends, setTrends] = useState([]);
	useEffect(() => {
		getTrendingTerms().then(setTrends); // getTrendingTerms lo usamos para obtener los datos y asi poderlos mostrar, esto retorna una promesa, por lo que usamos el then para obtener los datos y asi poderlos mostrar
	}, []);

	return <Category name='Tendencias' options={trends} />;
}
