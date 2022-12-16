import React from 'react';

export default function Detail({params}) {
	console.log(params);
	return (
		<div>
			<h1>GIF con id {params.id}</h1>
		</div>
	);
}
