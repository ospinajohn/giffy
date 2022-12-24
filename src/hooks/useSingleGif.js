import { useEffect, useState } from 'react';
import getSingleGif from 'services/getSingleGif';
import { useGifs } from './useGifs';

export function useSingleGif({ id }) {
	const { gifs } = useGifs(); // Aqui obtengo todos los gifs

	const gifFromCache = gifs.find(
		singleGif =>
			// Aqui busco el gif que coincida con el id que viene en los params  y luego lo retorno para que pueda ser usado en el componente Detail
			singleGif.id === id
	);
	
	const [gif, setGif] = useState(gifFromCache);
	const [isloading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	
	useEffect(() => {
		if (!gif) {
			setIsLoading(true);
			// llamar al servicio si no tenemos gif en cache
			getSingleGif({ id })
				.then(gif => {
					setGif(gif);
					setIsLoading(false);
					setIsError(false);
				}).catch(err => {
					setIsLoading(false);
					setIsError(true);
				});
		}
	}, [gif, id]);

	return { gif, isloading, isError };
}
