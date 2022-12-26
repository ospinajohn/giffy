import { useContext, useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating } = { keyword: null }) {
	const [page, setPage] = useState(INITIAL_PAGE); // se crea un estado local para la pagina actual
	const { gifs, setGifs } = useContext(GifsContext); // se obtiene el estado de gifs y su setter setGifs desde el contexto de GifsContext, esto ya seria el estado global de gifs
	const keywordToUse = keyword || localStorage.getItem('lastKeyword');

	useEffect(() => {
		getGifs({ keyword: keywordToUse, rating }).then(gifs => {
			setGifs(gifs);
			localStorage.setItem('lastKeyword', keyword);
		});
	}, [keyword, setGifs, rating]);

	useEffect(() => {
		if (page === INITIAL_PAGE) return;

		getGifs({ keyword, page, rating }).then(nextGifs => {
			setGifs(prevGifs => prevGifs.concat(nextGifs));
		});
	}, [keyword, page, setGifs, rating]);

	return { gifs, setPage };
}
