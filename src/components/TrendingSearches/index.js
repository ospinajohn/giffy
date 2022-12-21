import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen';

const TrendingSearches = React.lazy(() => import('./TrendingSearches')); // importamos el componente de manera dinamica

export default function LazyTrending() {
	const { isNearScreen, fronRef } = useNearScreen({ distance: '200px' });

	return (
		<div ref={fronRef}>
			<Suspense fallback={null}> 
			 {/* fallback es lo que se muestra mientras se carga el componente */}
				{isNearScreen ? <TrendingSearches /> : null}
			</Suspense>
		</div>
	);
}
