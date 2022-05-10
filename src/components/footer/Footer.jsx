import React from 'react';
import information from '../../assets/informacion.svg';
import '../../styles/original.css';

const Footer = () => {
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
				<button id="button_encriptar">Encriptar</button>
				<button id="button_desencriptar">Desencriptar</button>
			</section>
		</>
	);
};

export { Footer };
