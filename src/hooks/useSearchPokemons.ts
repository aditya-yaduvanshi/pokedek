import {useEffect, useState} from 'react';

const useSearchPokemons = (name: string) => {
	const [pokemon, setPokemon] = useState<IPokemonDetail>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		if (!name) return;
		setLoading(true);
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => res.json())
			.then((data) => {
				setPokemon(data);
			})
			.catch((err) => {
				console.log('err catch', err)
				setError((err as Error).message)
			});
		setLoading(false);
	}, [name]);

	return {pokemon, loading, error};
};

export default useSearchPokemons;
