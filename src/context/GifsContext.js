import React, { useState } from 'react';

const Context = React.createContext({});

export function GifsContextProvider({ children }) { // esta funcion 
	const [gifs, setGifs] = useState([]); // se crea el estado de gifs y su setter setGifs para que sea accesible desde cualquier componente

	return (
		// se crea el contexto y se le pasa el estado de gifs y su setter setGifs para que sea accesible desde cualquier componente que lo requiera 
		<Context.Provider value={{ gifs, setGifs }}> {children} </Context.Provider>
		// value es la propiedad que recibe el contexto, y se le pasa un objeto con las propiedades que se quieran que sean accesibles desde cualquier componente que lo requiera
		// para que es el children? es para que el componente que lo requiera pueda renderizar sus hijos (en este caso el componente App), su hijos hace referencia a los componentes que estan dentro de el componente que lo requiera. En este caso el componente App es el que lo requiere, y el componente App tiene como hijos a los componentes Home, SearchResults y Detail

		// Como funciona un contexto, provider y consumer? un context es un objeto que se crea con React.createContext({}), este objeto tiene dos propiedades, Provider y Consumer, el Provider es el que provee el contexto, y el Consumer es el que consume el contexto, en este caso el componente App es el que provee el contexto, y los componentes Home, SearchResults y Detail son los que consumen el contexto
	);
}
export default Context;
