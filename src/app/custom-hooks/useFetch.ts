import { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ReturnedData {
  data: Post[];
  isLoading: boolean;
  error: string;
  reFetch: (option: Option) => Post[];
}

type Option = {
  params: {
    _limit: number;
  };
};

const fetchData = async (url: string, option?: Option): Promise<Post[]> => {
  const data = await axios.get<Post[]>(
    option ? `${url}?_limit=${option.params._limit}` : url
  );
  return data.data;
};

const useFetch = (url: string): ReturnedData => {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const updateData = (fetchUrl: string = url, option?: Option) => {
    setIsLoading(true);
    fetchData(fetchUrl, option)
      .then((res) => setData(res))
      .catch((error) => setError(error as string))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    updateData();
  }, [url]);

  const reFetch = (option: Option) => {
    updateData(url, option);

    return data;
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
