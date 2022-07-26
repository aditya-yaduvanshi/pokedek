import React, {
	useState,
	createContext,
	useCallback,
	useEffect,
	useContext,
} from 'react';
import {getImageUrl} from '../utils/getImageUrl';

export const PokemonContext = createContext<IPokemonContext | null>(null);

export const usePokemons = () => {
	return useContext(PokemonContext) as IPokemonContext;
};

export const PokemonProvider = React.memo(({children}) => {
	const [pokemons, setPokemons] = useState<Set<IPokemon>>(new Set([]));
	const [totalCount, setTotalCount] = useState(0);
	const [totalFetched, setTotalFetched] = useState(0);
	const [nextPage, setNextPage] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<string>(
		'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'
	);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		fetch(currentPage)
			.then((res) => res.json())
			.then((data) => {
				if (!totalCount) setTotalCount(data.count);
				const results = data.results.map(
					(item: {name: string; url: string}) => ({
						...item,
						image: getImageUrl(item.url),
					})
				);
				setPokemons((prev) => new Set([...prev, ...results]));
				if (data.next) setNextPage(data.next);
				setTotalFetched((prev) => prev + data.results.length);
			})
			.catch((err: Error) => {
				console.log(err);
				setError(err.message);
			});
		setLoading(false);
	}, [currentPage]);

	const fetchNextPage = useCallback(() => {
		setCurrentPage(nextPage);
	}, [nextPage]);

	return (
		<PokemonContext.Provider
			value={
				{
					pokemons: [...pokemons],
					totalCount,
					totalFetched,
					fetchNextPage,
					loading,
					error,
				} as IPokemonContext
			}
		>
			{children}
		</PokemonContext.Provider>
	);
});
