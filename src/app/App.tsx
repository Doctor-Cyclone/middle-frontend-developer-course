import React from 'react';
import './App.scss';
import ReactHooks from './Tasks/ReactHooks/reactHooks';
import ReactForm from './Tasks/ReactForm/reactForm';

const App = () => {
  return (
    <div className="container">
      <header className="container__header">
        <h1 className="container__title">React</h1>
      </header>
      <main className="container__content">
        <h2 className="container__subtitle">React Form</h2>
        <ReactForm />
        <h2 className="container__subtitle">React Hooks</h2>
        <ReactHooks />
      </main>
    </div>
  );
};

export default App;
