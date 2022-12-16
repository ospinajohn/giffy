import React from 'react';
import './Gifs.css';

function Gif({title, url, id}) {
	return (
		<a href={`#${id}`} className="Gif">
			<h4>{title}</h4>
			<img src={url} alt="gif" />
		</a>
	);
}

export default Gif;
