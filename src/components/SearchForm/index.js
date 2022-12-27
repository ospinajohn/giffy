import css from './SearchForm.module.css';
import React from 'react';
import { useLocation } from 'wouter';
import useForm from './hook';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];


export default function SearchForm({
	initialKeyword = '',
	initialRating = 'g',
}) {
	const [_, pushLocation] = useLocation();

	const { keyword, rating, updateKeyword, updateRating } = useForm({
		initialKeyword,
		initialRating,
	});

	const handleChange = evt => {
		updateKeyword(evt.target.value);
	};

	const handleSubmit = evt => {
		evt.preventDefault();
		pushLocation(`/search/${keyword}/${rating}`);
	};

	const handleChangeRating = evt => {
		updateRating(evt.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className={css['c-search']}>
			<button>Buscar</button>
			<input
				className={css['c-search-input']}
				placeholder='Search a gif here...'
				onChange={handleChange}
				type='text'
				value={keyword}
			/>
			<select onChange={handleChangeRating} value={rating}>
				<option disabled>Rating type</option>
				{RATINGS.map(rating => (
					<option key={rating} value={rating}>
						{rating}
					</option>
				))}
			</select>
		</form>
	);
}
