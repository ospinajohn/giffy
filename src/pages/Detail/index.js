import React, { useContext } from 'react';
import Gif from '../../components/Gifs/Gif';
import GifsContext from '../../context/GifsContext';
import useGlobalGifs from '../../hooks/useGlobalGifs';

export default function Detail({ params }) {
	const gifs = useGlobalGifs(); // custom hooks

	const gif = gifs.find(singleGif => singleGif.id === params.id); // obtengo el gif que coincida con el id que viene en los params
	return <Gif {...gif} />;
}
