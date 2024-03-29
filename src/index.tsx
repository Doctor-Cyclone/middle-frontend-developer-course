import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './styles/normalize.css';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
