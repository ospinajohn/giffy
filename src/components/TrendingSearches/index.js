import React, { useEffect, useRef, useState } from 'react';
import getTrendingTerms from '../../services/getTrendingTermsService';
import Category from '../Category';

function TrendingSearches() {
	const [trends, setTrends] = useState([]);
	useEffect(() => {
		getTrendingTerms().then(setTrends); // getTrendingTerms lo usamos para obtener los datos y asi poderlos mostrar, esto retorna una promesa, por lo que usamos el then para obtener los datos y asi poderlos mostrar
	}, []);

	return <Category name='Tendencias' options={trends} />;
}

export default function LazyTrending() {
	const [show, setShow] = useState(false);
	const elementRef = useRef();

	useEffect(() => {
		const onIntersection = entries => {
			const el = entries[0]; // el es el elemento que esta siendo observado
			if (el.isIntersecting) {
				// isIntersecting es una propiedad que nos dice si el elemento esta siendo observado
				setShow(true); // si el elemento esta siendo observado, entonces mostramos el componente
				observer.disconnect(); // y desconectamos el observer
			}
		};

		const observer = new IntersectionObserver(onIntersection, {
			rootMargin: '100px', // el rootMargin es la distancia que hay entre el elemento y el viewport para que se dispare el evento. el viewport es la parte visible de la pagina
		});

		observer.observe(elementRef.current); // el observer observa el elemento con el id lazyTrending

		return () => observer.disconnect(); // cuando el componente se desmonte, desconectamos el observer
	});

	return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
}
