import { useContext, useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
	const [page, setPage] = useState(INITIAL_PAGE); // se crea un estado local para la pagina actual
	const { gifs, setGifs } = useContext(GifsContext); // se obtiene el estado de gifs y su setter setGifs desde el contexto de GifsContext, esto ya seria el estado global de gifs
	const keywordToUse = keyword || localStorage.getItem('lastKeyword');

	useEffect(() => {
		getGifs({ keyword: keywordToUse }).then(gifs => {
			setGifs(gifs);
			localStorage.setItem('lastKeyword', keyword);
		});
	}, [keyword, setGifs]);

	useEffect(() => {
		if (page === INITIAL_PAGE) return;

		getGifs({ keyword, page }).then(nextGifs => {
			setGifs(prevGifs => prevGifs.concat(nextGifs));
		});
	}, [keyword, page, setGifs]);

	return { gifs, setPage };
}
