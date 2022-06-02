import { clear } from '@testing-library/user-event/dist/clear';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import '../../styles/original.css';

const Search = () => {
	const {
		state: { wordSave },
		saveWord,
	} = useContext(AppContext);

	const handleSearch = (e) => {
		saveWord(e.target.value);
	};

	return (
		<section className="container-input">
			<textarea
				id="search"
				name="frase"
				placeholder="Ingrese el texto aqui"
				onChange={(e) => handleSearch(e)}
				value={wordSave}
			/>
		</section>
	);
};

export { Search };
