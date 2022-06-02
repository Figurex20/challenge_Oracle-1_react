import React, { useContext } from 'react';
import information from '../../assets/informacion.svg';
import { AppContext } from '../../context/AppContext.jsx';

import '../../styles/original.css';

const Footer = () => {
	const {
		state: { wordSave },
		addToWord,
	} = useContext(AppContext);

	const handleClickEncrition = (item) => {
		if (wordSave.length > 0) {
			const vocales_cambiar = ['e', 'i', 'a', 'o', 'u'];
			const cambio = ['enter', 'imes', 'ai', 'ober', 'ufat'];
			let accents = ['é', 'í', 'á', 'ó', 'ú'];
			let encrypted = Array.from(item);

			let uppercase = encrypted.some((element) => {
				if (
					element === element.toUpperCase() &&
					element !== ' ' &&
					element !== '\n'
				) {
					console.log(element === element.toUpperCase());
					return true;
				}
			});
			let number = encrypted.some((element) => {
				isNaN(element);
			});

			let accent = encrypted.some((element) => {
				for (let index = 0; index < accents.length; index++) {
					if (element.toLowerCase() === accents[index]) {
						console.log(element);

						return true;
					}
				}
			});

			if (uppercase === false && number === false && accent === false) {
				encrypted = Array.from(item);
				for (let i = 0; i < encrypted.length; i++) {
					for (let j = 0; j < vocales_cambiar.length; j++) {
						if (encrypted[i] === vocales_cambiar[j]) {
							encrypted[i] = cambio[j];
						}
					}

					let result = encrypted.join('');
					addToWord(result);
				}
			}
		}
	};

	const handleClickDescription = (item) => {
		let encrypted = Array.from(item);
		let accents = ['é', 'í', 'á', 'ó', 'ú'];
		let newStr = '';

		let uppercase = encrypted.some((element) => {
			if (
				element === element.toUpperCase() &&
				element !== ' ' &&
				element !== '\n'
			) {
				console.log(element === element.toUpperCase());
				return true;
			}
		});

		let number = encrypted.some((element) => {
			isNaN(element);
		});

		let accent = encrypted.some((element) => {
			for (let index = 0; index < accents.length; index++) {
				if (element.toLowerCase() == accents[index]) {
					console.log(element);

					return true;
				}
			}
		});

		if (
			item !== '' &&
			uppercase === false &&
			number === false &&
			accent === false
		) {
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
			addToWord(newStr);
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
