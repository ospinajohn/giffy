import Spinner from 'components/Spinner';
import { useSingleGif } from 'hooks/useSingleGif';
import useTitle from 'hooks/useSEO';
import React, { useContext } from 'react';
import { Redirect } from 'wouter';
import Gif from '../../components/Gifs/Gif';
import GifsContext from '../../context/GifsContext';
import useGlobalGifs from '../../hooks/useGlobalGifs';
import useSEO from '../../hooks/useSEO';
import { Helmet } from 'react-helmet';

export default function Detail({ params }) {
	const { gif, isloading, isError } = useSingleGif({ id: params.id });
	const title = gif ? gif.title : '';

	if (isloading) return <Spinner />;
	if (isError) return <Redirect to='/404' />;
	if (!gif) return null;

	return (
		<>
			<Helmet>
				<title>{title} | Giffy</title>
			</Helmet>
			<h3 className='App-title'>{gif.title}</h3>
			<Gif {...gif} />
		</>
	);
}
