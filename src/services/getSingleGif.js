import { API_KEY,API_URL } from "./setting";

const getSingleGif = async ({ id }) => {
  const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;
  const response = await fetch(apiURL);
  const { data } = await response.json();
  const { images, title, id: idGif } = data;
  const { url } = images.downsized_medium;
  return { title, id: idGif, url };
}

export default getSingleGif;