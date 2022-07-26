type HomeTabNavigation = {
	Pokemons: undefined;
	Bookmarks: undefined;
	Search: undefined;
};

type PokemonStackList = {
	Pokemons: undefined;
	Bookmarks: undefined;
	Pokemon: any;
};

type UseNavigation = NativeStackNavigationProp<HomeTabNavigation>;
type PokemonProps = NativeStackScreenProps<PokemonStackList, 'Pokemon'>;

interface IPokemon {
	name: string;
	image: string;
	url: string;
}

interface IPokemonContext {
	pokemons: Array<IPokemon>;
	totalFetched: number;
	totalCount: number;
	loading: boolean;
	error: string | null;
	fetchNextPage: () => void;
}

interface IBookmarkContext {
	bookmarks: Array<IPokemon>;
	bookmark: (pokemon: IPokemon) => void;
	bookunmark: (pokemon: IPokemon) => void;
}

type PokemonCardProps = {
	pokemon: IPokemon;
};
