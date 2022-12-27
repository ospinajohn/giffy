import { useReducer } from 'react';

const ACTION = {
	UPDATE_KEYWORD: 'update_keyword',
	UPDATE_RATING: 'update_rating',
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTION.UPDATE_KEYWORD:
			return { ...state, keyword: action.payload };
		case ACTION.UPDATE_RATING:
			return { ...state, rating: action.payload };
		default:
			return state;
	}
};

export default function useForm({ initialKeyword, initialRating }) {
	const [state, dispatch] = useReducer(reducer, {
		keyword: decodeURIComponent(initialKeyword),
		rating: initialRating,
	});

	const { keyword, rating } = state;

	return {
		keyword,
		rating,
		updateKeyword: keyword =>
			dispatch({ type: ACTION.UPDATE_KEYWORD, payload: keyword }),

		updateRating: rating =>
			dispatch({ type: ACTION.UPDATE_RATING, payload: rating }),
	};
}
