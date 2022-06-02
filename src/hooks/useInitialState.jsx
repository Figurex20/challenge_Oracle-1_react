import { useState, useEffect } from 'react';

const initialState = {
	wordSave: '',
	word: [],
	wordEncrypted: '',
	validation: false,
};

function useInitialState() {
	const [state, setState] = useState(initialState);

	const addToWord = (payload) => {
		setState({
			...state,
			word: [...state.word, payload],
			validation: true,
			wordSave: '',
		});
	};

	const saveWord = (payload) => {
		setState({
			...state,
			wordSave: payload,
			validation: false,
		});
	};
	const encryptedWord = (payload) => {
		setState({
			...state,
			wordEncrypted: payload,
		});
	};

	const removeFromWord = (indexValue) => {
		setState({
			...state,
			word: state.word.filter((_, index) => index !== indexValue),
		});
	};

	return {
		state,
		addToWord,
		saveWord,
		removeFromWord,
		encryptedWord,
	};
}

export { useInitialState };
