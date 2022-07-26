import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function getLocalKey(key: string) {
	return `@pokedek/${key}`;
}

const useAsyncStorage = <V>(key: string, initialValue: V) => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		(async () => {
			try {
				const storedValue = await AsyncStorage.getItem(getLocalKey(key));
				if (storedValue != null) {
					setValue(JSON.parse(storedValue));
					return;
				}
				if (initialValue instanceof Function) {
					setValue(initialValue());
					return;
				}
				setValue(initialValue);
				return;
			} catch (err) {
				console.log(err);
			}
		})();
	}, [key, initialValue]);

	useEffect(() => {
		(async () => {
			try {
				await AsyncStorage.setItem(getLocalKey(key), JSON.stringify(value));
			} catch (err) {
				console.log(err);
			}
		})();
	}, [value]);

	return {value, setValue};
};

export default useAsyncStorage;
