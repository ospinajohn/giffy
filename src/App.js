import './App.css';
import ListOfGifs from './components/Gifs/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {
	return (
		<div className="App">
			<section className="App-content">
				<h1>Buscador de Gifs</h1>
        <Link to="/gif/programacion">Programacion</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
			</section>
		</div>
	);
}

export default App;
