import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext.jsx';
import Item from '../item/Item.jsx';

import muneco from '../../assets/Muñeco.svg';
import '../../styles/original.css';

const Result = () => {
	const {
		state: { words },
	} = useContext(AppContext);
	return (
		<>
			{words.length <= 0 ? (
				<section className="container_result" id="container_result2">
					<img className="muñeco" id="muñeco2" src={muneco} alt="muñeco" />
					<h1 className="mensaje_vacio" id="mensaje_vacio2">
						Ningún mensaje fue encontrado
					</h1>
					<h2 className="mensaje_respuesta" id="mensaje_respuesta2">
						Ingresa el texto que desees encriptar o desencriptar.
					</h2>
				</section>
			) : (
				<section className="container_result1" id="container_result2">
					{words.map((item) => (
						<Item key={item.id} {...item} />
					))}
				</section>
			)}
		</>
	);
};

export { Result };
