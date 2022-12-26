import { API_KEY, API_URL } from 'services/setting';
const getGifs = async ({ limit = 5, page = 0, keyword = 'morty', rating } = {}) => {
	const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=${limit}&offset=${
		page * limit
	}&rating=${rating}&lang=en`;
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
