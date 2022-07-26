import React, {createContext, useCallback, useContext} from 'react';
import useAsyncStorage from '../hooks/useAsyncStorage';

export const BookmarkContext = createContext<IBookmarkContext | null>(null);

export const useBookmarks = () => {
	return useContext(BookmarkContext) as IBookmarkContext;
};

export const BookmarkProvider = React.memo(({children}) => {
	const {value, setValue} = useAsyncStorage<Array<IPokemon>>('bookmarks', []);

	const bookmark = useCallback((pokemon: IPokemon) => {
		setValue((prev) => {
			if (prev.find((p) => p.name === pokemon.name)) return prev;
			prev.push(pokemon);
			return prev;
		});
	}, []);

	const bookunmark = useCallback((pokemon: IPokemon) => {
		setValue((prev) => prev.filter((p) => p.name !== pokemon.name));
	}, []);

	return (
		<BookmarkContext.Provider
			value={{bookmarks: value, bookmark, bookunmark} as IBookmarkContext}
		>
			{children}
		</BookmarkContext.Provider>
	);
});
