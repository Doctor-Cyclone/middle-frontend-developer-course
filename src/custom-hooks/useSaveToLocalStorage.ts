import {useEffect, useState} from "react";

const getDataFromLocalStorage = <T>(key: string, initialData: T): T => {
	const data = localStorage.getItem(key);

	if (data) {
		return JSON.parse(data);
	}

	if(initialData instanceof Function) {
		return initialData();
	}

	return initialData
}

const useSaveToLocalStorage = <T>(key: string, initialData: T) => {
	const [data, setData] = useState(() => getDataFromLocalStorage(key, initialData));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(data))
	}, [data])

	return [data, setData];
}

export default useSaveToLocalStorage;