import React, { useCallback, useEffect, useRef } from 'react';
import ListOfGifs from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';
import SearchForm from 'components/SearchForm';

export default function SearchResults({ params }) {
	const { keyword, rating = 'g' } = params;
	const { gifs, setPage } = useGifs({ keyword, rating });
	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({ externalRef, once: false });

	const title = gifs ? `${gifs.length} resultados de ${keyword}` : '';

	const debounceHandleNextPage = useCallback(
		debounce(() => setPage(prevPage => prevPage + 1), 200),
		[setPage]
	);

	useEffect(() => {
		if (isNearScreen) debounceHandleNextPage();
	}, [debounceHandleNextPage, isNearScreen]);

	/*
	const [gifs, setGifs] = useState([]);
	// que es un estado en react, es un valor que puede cambiar en el tiempo, es decir, que puede cambiar de valor, por ejemplo, un contador, un input, un checkbox, etc. en pocas palabras, es un valor es un valor que puede cambiar en el tiempo. USESTATE es una funcion que nos permite crear un estado, y que nos devuelve un array con dos elementos, el primer elemento es el valor del estado, y el segundo elemento es una funcion que nos permite cambiar el valor del estado. lo que va dentro de los parentesis de useState es el valor inicial del estado. useEffect es

	// useEffect es  una funcion que nos permite ejecutar codigo cuando se renderiza el componente, o cuando cambia un estado. useEffect recibe dos parametros, el primero es una funcion que se ejecuta cuando se renderiza el componente, y el segundo es un array de dependencias, que es un array de estados, si el array de dependencias esta vacio, la funcion se ejecuta solo cuando se renderiza el componente, si el array de dependencias tiene estados, la funcion se ejecuta cuando se renderiza el componente y cuando cambia alguno de los estados del array de dependencias.

	useEffect(() => {
		getGifs({keyword}).then((gifs) => setGifs(gifs)); // getGifs es una funcion que retorna una promesa, por lo tanto, podemos usar el metodo then para obtener el resultado de la promesa, y luego, con la funcion setGifs, podemos cambiar el valor del estado gifs, y asi, renderizar los gifs en el componente. En la promesa del .then ponemos como parametro lo que recibimos que son los gifs, y luego, con la funcion setGifs, cambiamos el valor del estado gifs, y asi, renderizamos los gifs en el componente.
	}, [keyword]);
  */
	// const handleNextPage = () => setPage(prevPage => prevPage + 1);

	return (
		<>
			<Helmet>
				<title>{title} | Giffy</title>
				<meta name='description' content={title} />
			</Helmet>
			<SearchForm initialKeyword={keyword} initialRating={rating} />
			<h3 className='App-title'>{decodeURI(keyword)}</h3>
			<ListOfGifs gifs={gifs} />
			<div id='visor' ref={externalRef}></div>
			{/* <button onClick={handleNextPage}>Get next page</button> */}
		</>
	);
}
