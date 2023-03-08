import React from 'react';
import './App.css';
import useFetch from './custom-hooks/useFetch';

const App = () => {
  const { data, isLoading, error, reFetch } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const options = {
    params: {
      _limit: 3
    }
  }

  return (
    <>
      <div className="button">
        <button onClick={() => reFetch(options)}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      <div className="items">
        {data && !isLoading && data.map(item => <div className="item" key={item.id}>{item.title}</div>) }
      </div>
    </>
  );
}

export default App;
