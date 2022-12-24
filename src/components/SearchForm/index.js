import React, { useState } from 'react';

function SearchForm({ onSubmit }) {
	const [keyword, setKeyword] = useState('');

	const handleChange = evt => {
		setKeyword(evt.target.value);
	};

	const handleSubmit = evt => {
		evt.preventDefault();
		onSubmit({ keyword });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				placeholder='Search a gif here...'
				type='text'
				value={keyword}
			/>
		</form>
	);
}

export default React.memo(SearchForm);
