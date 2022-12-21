import { useState, useEffect, useRef } from 'react';


export default function useNearScreen({ distance = '100px' } = {}) {
	const [isNearScreen, setShow] = useState(false);
	const elementRef = useRef();

	useEffect(() => {
		const onIntersection = entries => {
			const el = entries[0]; // el es el elemento que esta siendo observado
			if (el.isIntersecting) {
				// isIntersecting es una propiedad que nos dice si el elemento esta siendo observado
				setShow(true); // si el elemento esta siendo observado, entonces mostramos el componente
				observer.disconnect(); // y desconectamos el observer
			}
		};

		const observer = new IntersectionObserver(onIntersection, {
			rootMargin: distance, // el rootMargin es la distancia que hay entre el elemento y el viewport para que se dispare el evento. el viewport es la parte visible de la pagina
		});

		observer.observe(elementRef.current); // el observer observa el elemento con el id lazyTrending

		return () => observer.disconnect(); // cuando el componente se desmonte, desconectamos el observer
	});

	return { isNearScreen, fronRef: elementRef };
}