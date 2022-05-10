import React from 'react';
import '../../styles/original.css';

const Search = () => {
	return (
		<section className="container-input">
			<textarea
				id="search"
				name="frase"
				placeholder="Ingrese el texto aqui"
				defaultValue={''}
			/>
		</section>
	);
};

export { Search };
