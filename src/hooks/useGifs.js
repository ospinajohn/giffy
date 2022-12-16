import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export function useGifs({keyword}) {
	const [gifs, setGifs] = useState([]);
	useEffect(() => {
		getGifs({keyword}).then((gifs) => setGifs(gifs));
	}, [keyword]);

  return gifs;
}
