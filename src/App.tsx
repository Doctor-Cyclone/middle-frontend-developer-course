import React from 'react';
import './App.css';
import useViewportSize from './custom-hooks/useViewportSize';

const App = () => {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}

export default App;
