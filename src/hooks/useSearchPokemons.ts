import {useEffect, useState} from 'react';

const useSearchPokemons = (name: string) => {
	const [pokemon, setPokemon] = useState<any>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!pokemon) return;
		setLoading(true);
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPokemon(data);
			})
			.catch((err) => {
				console.log('err catch', err)
				setError((err as Error).message)
			});
		setLoading(false);
	}, [pokemon]);

	return {pokemon, loading, error};
};

export default useSearchPokemons;
