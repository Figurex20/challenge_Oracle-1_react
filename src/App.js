import './App.css';
import './styles/original.css';

function App() {
	return (
		<div className="container">
			<section className="container-logo">
				<img className="logo" src="./assets/Vector.svg" alt="Vector" />
			</section>
			<section className="container-input">
				<textarea
					id="search"
					name="frase"
					placeholder="Ingrese el texto aqui"
					defaultValue={''}
				/>
			</section>
			<section className="container-span_parrafo">
				<p className="precaucion">
					<span className="span">
						<img src="./assets/informacion.svg" alt="i" />
					</span>
					Solo letras minúsculas y sin acentos
				</p>
			</section>
			<section className="container-buttons">
				<button id="button_encriptar">Encriptar</button>
				<button id="button_desencriptar">Desencriptar</button>
			</section>
			<section className="container_result" id="container_result2">
				<img
					className="muñeco"
					id="muñeco2"
					src="./assets/Muñeco.svg"
					alt="muñeco"
				/>
				<h1 className="mensaje_vacio" id="mensaje_vacio2">
					Ningún mensaje fue encontrado
				</h1>
				<h2 className="mensaje_respuesta" id="mensaje_respuesta2">
					Ingresa el texto que desees encriptar o desencriptar.
				</h2>
			</section>
		</div>
	);
}

export { App };
