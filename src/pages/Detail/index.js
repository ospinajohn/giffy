import Spinner from 'components/Spinner';
import { useSingleGif } from 'hooks/useSingleGif';
import React, { useContext } from 'react';
import { Redirect } from 'wouter';
import Gif from '../../components/Gifs/Gif';
import GifsContext from '../../context/GifsContext';
import useGlobalGifs from '../../hooks/useGlobalGifs';

export default function Detail({ params }) {
	const { gif, isloading, isError } = useSingleGif({ id: params.id });

	if (isloading) return <Spinner />;
	if (isError) return <Redirect to='/404' />;
	if (!gif) return null;

	return (
		<>
			<h3 className='App-title'>{gif.title}</h3>
			<Gif {...gif} />
		</>
	);
}
