import { API_KEY, API_URL } from 'services/setting';
const getGifs = async ({ keyword } = {}) => {
	const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=25&offset=0&rating=g&lang=en`;
	const response = await fetch(apiURL);
	const { data } = await response.json();
	const gifs = data.map(datos => {
		const { images, title, id } = datos; // destructuring de objetos en javascript para obtener los valores de las propiedades de un objeto.
		const { url } = images.downsized_medium;
		return { title, id, url };
	});
	return gifs;
};

export default getGifs;
