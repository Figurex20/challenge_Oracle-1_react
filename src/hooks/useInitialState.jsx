import { useState } from 'react';

const initialState = {
	wordSave: '',
	word: [],
};

function useInitialState() {
	const [state, setState] = useState(initialState);

	const addToWord = (payload) => {
		setState({
			...state,
			word: [...state.word, payload],
			wordSave: '',
		});
	};

	const saveWord = (payload) => {
		setState({
			...state,
			wordSave: payload,
		});
	};

	const removeFromWord = (id, e) => {
		console.log(state.word);
		const toRemove = state.word.filter((item) => item.id !== id);
		console.log({ toRemove });

		/* setState({
			...state,
			word: state.word.filter((item) => item.id !== id),
			wordSave: '',
		}); */
	};

	return {
		state,
		addToWord,
		saveWord,
		removeFromWord,
		setState,
	};
}

export { useInitialState };
