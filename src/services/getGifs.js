const apiKey = 'mZfVOgmyHUVjX00sYtPSoVxaiBbBBSZT&q';
const getGifs = async ({keyword} = {}) => {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=g&lang=en`;
	const response = await fetch(apiURL);
	const {data} = await response.json();
	const gifs = data.map((datos) => {
		const {images, title, id} = datos; // destructuring de objetos en javascript para obtener los valores de las propiedades de un objeto.
		const {url} = images.downsized_medium;
		return {title, id, url};
	});
	return gifs;
};

export default getGifs;
