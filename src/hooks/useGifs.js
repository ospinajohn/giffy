import { useContext, useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

export function useGifs({ keyword } = { keyword: null }) {
	const { gifs, setGifs } = useContext(GifsContext);
	useEffect(() => {
		const keywordToUse = keyword || localStorage.getItem('lastKeyword');

		getGifs({ keyword: keywordToUse }).then(gifs => {
			setGifs(gifs);
			localStorage.setItem('lastKeyword', keyword);
		});
	}, [keyword, setGifs]);

	return gifs;
}
