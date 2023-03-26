import { useEffect, useState } from 'react';

interface ReturnedFunction<T> {
  setItem: (newItem: T) => void;
  getItem: (initialData: T, key: string) => T;
  removeItem: () => void;
}

// TODO refactor useLocalStorage logic
const useLocalStorage = <T>(
  initialData: T,
  key: string
): [T, ReturnedFunction<T>] => {
  const getItem = <T>(initialData: T, key: string) => {
    const stringifyItem = localStorage.getItem(key);

    if (stringifyItem) {
      return JSON.parse(stringifyItem);
    }

    if (initialData instanceof Function) {
      return initialData();
    }

    return initialData;
  };

  const [data, setData] = useState<T>(() => getItem(initialData, key));

  useEffect(() => {
    setData(getItem(initialData, key));
  }, []);

  const setItem = (newItem: T) => {
    localStorage.setItem(key, JSON.stringify(newItem));
    setData(newItem);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setData(initialData);
  };

  return [data, { setItem, getItem, removeItem }];
};

export default useLocalStorage;
