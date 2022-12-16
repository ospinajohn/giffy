import {Route} from 'wouter';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';

function App() {
	return (
		<div className="App">
			<section className="App-content">
				<h1 className='App-title-one'>Buscador de Gifs</h1>
				<Route component={Home} path="/" />
				<Route component={SearchResults} path="/search/:keyword" />
			</section>
		</div>
	);
}

export default App;
