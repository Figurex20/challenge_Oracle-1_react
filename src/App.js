import './styles/original.css';
import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { Result } from './components/result/Result';
import { Footer } from './components/footer/Footer';

function App() {
	return (
		<div className="container">
			<Header></Header>
			<Search></Search>
			<Result></Result>
			<Footer></Footer>
		</div>
	);
}

export { App };
