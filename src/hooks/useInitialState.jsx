import { useState } from 'react';

const initialState = {
	words: [],
	wordSave: '',
};

function useInitialState() {
	const [state, setState] = useState(initialState);

	const addToWord = (payload) => {
		setState({
			...state,
			words: [...state.words, payload],
			wordSave: '',
		});
	};

	const saveWord = (payload) => {
		setState({
			...state,
			wordSave: payload,
		});
	};

	const removeFromWord = (id) => {
		setState({
			...state,
			words: state.words.filter((item) => item.id !== id),
			wordSave: '',
		});
	};

	return {
		state,
		addToWord,
		saveWord,
		removeFromWord,
	};
}

export { useInitialState };
