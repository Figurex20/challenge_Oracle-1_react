import '../styles/original.css';

import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import { useInitialState } from '../hooks/useInitialState.jsx';

import { Header } from '../components/header/Header';
import { Search } from '../components/search/Search';
import { Result } from '../components/result/Result';
import { Footer } from '../components/footer/Footer';

function App() {
	const initialState = useInitialState();

	return (
		<AppContext.Provider value={initialState}>
			<div className="container">
				<Header></Header>
				<Search></Search>
				<Result></Result>
				<Footer></Footer>
			</div>
		</AppContext.Provider>
	);
}

export { App };
