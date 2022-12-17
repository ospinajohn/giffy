import React, { useContext } from 'react';
import Gif from '../../components/Gifs/Gif';
import GifsContext from '../../context/GifsContext';

export default function Detail({ params }) {
	const { gifs } = useContext(GifsContext);
	const gif = gifs.find(singleGif => singleGif.id === params.id); // obtengo el gif que coincida con el id que viene en los params
	return <Gif {...gif} />;
}
