import React from 'react';
import './App.css';
import useLocalStorage from './custom-hooks/useLocalStorage';

function App() {
  const [data, { setItem, removeItem }] = useLocalStorage('token', 'token');

  return (
    <>
      <p>
        Твой токен: { data }
      </p>
      <div>
        <button onClick={() => setItem('token 2')}>
          Задать токен
        </button>
        <button onClick={() => removeItem()}>
          Удалить токен
        </button>
      </div>
    </>
  );
}

export default App;
