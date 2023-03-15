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
	const [data, setData] = useState(() => getItem(initialData, key));

	useEffect(() => {
		setData(getItem(initialData, key));
	}, [])

	const setItem = <T>(newItem: T) => {
		localStorage.setItem(key, JSON.stringify(newItem))
		setData(newItem);
	}

	const removeItem = () => {
		localStorage.removeItem(key);
		setData('');
	}

	return [data, {setItem, removeItem}];
}

export default useLocalStorage;