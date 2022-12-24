import { Link, Route } from 'wouter';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import { GifsContextProvider } from './context/GifsContext';

function App() {
	return (
		<div className='App'>
			<section className='App-content'>
				<h1 className='App-title-one'>Buscador de Gifs</h1>
				<GifsContextProvider>
					<Link to='/'>Home</Link>
					<Route component={Home} path='/' />
					<Route component={SearchResults} path='/search/:keyword' />
					<Route component={Detail} path='/gif/:id' />
					<Route component={() => <h1>404 Error</h1>} path='/404' />
				</GifsContextProvider>
			</section>
		</div>
	);
}

export default App;
