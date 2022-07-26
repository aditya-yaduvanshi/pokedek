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
	status: {
		loading: boolean;
		error: string;
	}
}

type PokemonCardProps = {
	pokemon: IPokemon;
};
ail;

interface IPokemonDetail {
	abilities: {
		ability: {
			name: string;
			url: string;
		};
		is_hidden: boolean;
		slot: number;
	}[];
	forms: {
		name: string;
		url: string;
	}[];
	base_experience: number;
	height: number;
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	name: string;
	order: number;
	weight: number;
	game_indices: {
		game_index: number;
		version: {
			name: string;
			url: string;
		};
	}[];
	held_items: {
		item: {
			name: string;
			url: string;
		};
		version_details: {
			rarity: number;
			version: {
				name: string;
				url: string;
			};
		}[];
	}[];
	moves: {
		move: {
			name: string;
			url: string;
		};
		version_group_details: {
			level_learned_at: number;
			move_learn_method: {
				name: string;
				url: string;
			};
			version_group: {
				name: string;
				url: string;
			};
		};
	}[];
	species: {
		name: string;
		url: string;
	};
	sprites: {
		back_default: string | null;
		back_female: string | null;
		back_shiny: string | null;
		back_shiny_female: string | null;
		front_default: string | null;
		front_female: string | null;
		front_shiny: string | null;
		front_shiny_female: string | null;
		other: {
			dream_world: {
				front_default: string | null;
				front_female: string | null;
			};
			home: {
				front_default: string | null;
				front_female: string | null;
				front_shiny: string | null;
				front_shiny_female: string | null;
			};
			official_artwork: {
				front_default: string | null;
			};
		};
		versions: any;
	};
	stats: {
		base_stat: number;
		effort: number;
		stat: {
			name: string;
			url: string;
		};
	}[];
	types: {
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}[];
}
