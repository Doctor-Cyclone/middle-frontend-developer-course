import React from 'react';
import './App.scss';
import ReactHooks from './Tasks/ReactHooks/reactHooks';

const App = () => {
  return (
    <div className="container">
      <header className="container__header">
        <h1 className="container__title">React Hooks</h1>
      </header>
      <main className="container__content">
        <ReactHooks />
      </main>
    </div>
  );
};

export default App;
