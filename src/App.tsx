import React from 'react';
import './App.css';
import useToggle from './custom-hooks/useToggle';

function App() {
  const [value, toggleValue] = useToggle(['blue', 'orange', 'cyan', 'teal']);
  const [theme, toggleTheme] = useToggle(['dark', 'light']);
  const [booleanValue, toggleBooleanValue] = useToggle();
  
  return (
    <div className="App">
      <header className={`App-header App-header_${theme}`}>
        <p>
          Current value: {value.toString()}
          <br/>
          Current theme: {theme.toString()}
          <br/>
          Current theme: {booleanValue.toString()}
        </p>
        <button onClick={() => toggleValue()}>Toggle array</button>
        <br/>
        <button onClick={() => toggleTheme()}>Toggle theme</button>
        <br/>
        <button onClick={() => toggleTheme('light')}>On light theme</button>
        <br/>
        <button onClick={() => toggleBooleanValue()}>Toggle boolean value</button>
      </header>
    </div>
  );
}

export default App;
