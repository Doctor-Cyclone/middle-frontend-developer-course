import {useEffect, useState} from "react";

const getItem = <T>(initialData: T, key: string) => {
	const stringifyItem = localStorage.getItem(key);

	if (stringifyItem) {
		return JSON.parse(stringifyItem);
	}

	if(initialData instanceof Function) {
		return initialData();
	}

	return initialData;
}

const useLocalStorage = <T>(initialData: T, key: string) => {
	const [token, setToken] = useState(() => getItem(initialData, key));

	useEffect(() => {
		setToken(getItem(initialData, key));
	}, [])

	const setItem = <T>(newItem: T) => {
		localStorage.setItem(key, JSON.stringify(newItem))
		setToken(newItem);
	}

	const removeItem = () => {
		localStorage.removeItem(key);
		setToken('');
	}

	return [token, {setItem, removeItem}];
}

export default useLocalStorage;