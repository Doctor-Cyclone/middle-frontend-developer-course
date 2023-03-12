import {useEffect, useState} from "react";
import axios from "axios";

interface Posts {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface ReturnedData {
	data: Posts[],
	isLoading: boolean;
	error: unknown;
	reFetch: (option: Option) => Posts[];
}

type Option = {
	params: {
		_limit: number
	}
}

const fetchData = async (url: string, option?: Option) => {
	const data = await axios.get(url)

	return data.data
}

const useFetch = (url: string): ReturnedData => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const updateData = (fetchUrl: string = url) => {
		setIsLoading(true);
		fetchData(fetchUrl)
		.then(res => setData(res))
		.catch(error => setError(error))
		.finally(() => setIsLoading(false));
	}

	useEffect(() => {
		updateData()
	}, [url])

	const reFetch = (option: Option) => {
		updateData(`${url}?_limit=${option.params._limit}`);

		return data;
	};

	return { data, isLoading, error, reFetch }
}

export default useFetch;