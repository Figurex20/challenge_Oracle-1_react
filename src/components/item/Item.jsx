import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext.jsx';

function Item(props) {
	const { id, result } = props;

	const { removeFromWord } = useContext(AppContext);

	const copyDiv = (e) => {
		let id = e.target.parentNode.id;
		let div = document.getElementById(id);
		let text = div.querySelector('.div_p');
		let result = text.textContent;
		// copyText.setSelectionRange(0, 99999); /*For mobile devices*/
		navigator.clipboard.writeText(result);
	};

	const deleteDiv = () => {
		removeFromWord(id);
	};
	return (
		<div id={id}>
			<p className="div_p">{result}</p>
			<button className="div-button_delete" onClick={(e) => deleteDiv(e)}>
				X
			</button>
			<button className="div-button_copy" onClick={(e) => copyDiv(e)}>
				copy
			</button>
			<p />
		</div>
	);
}

export default Item;
