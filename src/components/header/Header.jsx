import React from 'react';
import vector from '../../assets/Vector.svg';
import '../../styles/original.css';

const Header = () => {
	return (
		<section className="container-logo">
			<img className="logo" src={vector} alt="Vector" />
		</section>
	);
};

export { Header };
