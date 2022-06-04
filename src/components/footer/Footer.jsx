import React, { useContext } from 'react';
import information from '../../assets/informacion.svg';
import { AppContext } from '../../context/AppContext.jsx';
import { v4 as uuidv4 } from 'uuid';

import '../../styles/original.css';

const Footer = () => {
	const {
		state: { wordSave },
		addToWord,
	} = useContext(AppContext);

	const addWordToWords = (result) => {
		let id = uuidv4();
		addToWord({ id, result });
	};

	const handleClickEncrition = (item) => {
		if (item.length > 0) {
			const vocales_cambiar = ['e', 'i', 'a', 'o', 'u'];
			const cambio = ['enter', 'imes', 'ai', 'ober', 'ufat'];

			let encrypted = Array.from(item);
			let validated = /^[a-z\s]+$/u;

			if (validated.test(item)) {
				encrypted = Array.from(item);
				for (let i = 0; i < encrypted.length; i++) {
					for (let j = 0; j < vocales_cambiar.length; j++) {
						if (encrypted[i] === vocales_cambiar[j]) {
							encrypted[i] = cambio[j];
						}
					}

					let result = encrypted.join('');
					addWordToWords(result);
				}
			}
		}
	};

	const handleClickDescription = (item) => {
		let encrypted = Array.from(item);
		let newStr = '';

		let validated = /^[a-z\s]+$/u;

		if (validated.test(item)) {
			encrypted = item;

			for (let i = 0; i < encrypted.length; i++) {
				if (encrypted[i] === 'e' && encrypted[i + 4] === 'r') {
					// si el caracter es 'e' y 4 caracteres despues encontramos 'r'
					newStr += 'e'; // agregamos 'e' a newStr
					i += 4; // siguente
				} else if (encrypted[i] === 'i' && encrypted[i + 3] === 's') {
					// si el caracter es 'i' y 3 caracteres despues encontramos 's'
					newStr += 'i'; // agregamos 'i' a newStr
					i += 3;
				} else if (encrypted[i] === 'a' && encrypted[i + 1] === 'i') {
					newStr += 'a';
					i += 1;
				} else if (encrypted[i] === 'o' && encrypted[i + 3] === 'r') {
					newStr += 'o';
					i += 3;
				} else if (encrypted[i] === 'u' && encrypted[i + 3] === 't') {
					newStr += 'u';
					i += 3;
				} else {
					// si no se cumple ninguna de las condiciones anteriores
					newStr += encrypted[i]; // volvemos a agregar el caracter a newStr
				}
			}
			addWordToWords(newStr);
		}
	};

	return (
		<>
			<section className="container-span_parrafo">
				<p className="precaucion">
					<span className="span">
						<img src={information} alt="i" />
					</span>
					Solo letras minúsculas y sin acentos
				</p>
			</section>

			<section className="container-buttons">
				<button
					id="button_encriptar"
					onClick={() => {
						handleClickEncrition(wordSave);
					}}
				>
					Encriptar
				</button>
				<button
					id="button_desencriptar"
					onClick={() => {
						handleClickDescription(wordSave);
					}}
				>
					Desencriptar
				</button>
			</section>
		</>
	);
};

export { Footer };
