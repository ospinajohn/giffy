import { useState, useEffect, useRef } from 'react';

export default function useNearScreen({
	distance = '100px',
	externalRef,
	once = true,
} = {}) {
	const [isNearScreen, setShow] = useState(false);
	const elementRef = useRef();

	useEffect(() => {
		const element = externalRef ? externalRef.current : elementRef.current;

		const onIntersection = entries => {
			const el = entries[0]; // el es el elemento que esta siendo observado
			if (el.isIntersecting) {
				// isIntersecting es una propiedad que nos dice si el elemento esta siendo observado
				setShow(true); // si el elemento esta siendo observado, entonces mostramos el componente
				once && observer.disconnect(); // y desconectamos el observer
			}else {
				!once && setShow(false); // si el elemento no esta siendo observado, entonces ocultamos el componente
			}
		};

		const observer = new IntersectionObserver(onIntersection, {
			rootMargin: distance, // el rootMargin es la distancia que hay entre el elemento y el viewport para que se dispare el evento. el viewport es la parte visible de la pagina
		});

		if (element) observer.observe(element);

		return () => observer.disconnect(); // cuando el componente se desmonte, desconectamos el observer
	});

	return { isNearScreen, fronRef: elementRef };
}
