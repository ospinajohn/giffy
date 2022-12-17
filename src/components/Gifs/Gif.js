import React from 'react';
import './Gifs.css';
import { Link } from 'wouter';

function Gif({ title, url, id }) {
	return (
		<Link href={`/gif/${id}`} className='Gif'>
			<h4>{title}</h4>
			<img src={url} alt='gif' />
		</Link>
	);
}

export default Gif;
