import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import getLocalKey from '../utils/getLocalKey';

export const BookmarkContext = createContext<IBookmarkContext | null>(null);

export const useBookmarks = () => {
	return useContext(BookmarkContext) as IBookmarkContext;
};

export const BookmarkProvider = React.memo(({children}) => {
	const {getItem, setItem} = useAsyncStorage(getLocalKey('bookmarks'));
	const [bookmarks, setBookmarks] = useState<Array<IPokemon>>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const result = await getItem();
				if (!result) return;
				setBookmarks(JSON.parse(result) as Array<IPokemon>);
			} catch (err) {
				console.log(err);
				setError((err as Error).message);
			}
			setLoading(false);
		})();
	}, []);

	useEffect(() => {
		setItem(JSON.stringify(bookmarks), (err) => {
			if (err) setError(err.message);
		});
	}, [bookmarks]);

	const bookmark = useCallback((pokemon: IPokemon) => {
		setBookmarks((prev) => {
			if (prev.find((p) => p.name === pokemon.name)) return prev;
			return [...prev, pokemon];
		});
	}, []);

	const bookunmark = useCallback((pokemon: IPokemon) => {
		setBookmarks((prev) => prev.filter((p) => p.name !== pokemon.name));
	}, []);

	return (
		<BookmarkContext.Provider
			value={
				{
					bookmarks,
					bookmark,
					bookunmark,
					status: {loading, error},
				} as IBookmarkContext
			}
		>
			{children}
		</BookmarkContext.Provider>
	);
});
