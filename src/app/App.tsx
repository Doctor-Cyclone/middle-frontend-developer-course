import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './core/components/Header/Header';
import Characters from './pages/Characters/Characters';
import Locations from './pages/Locations/Locations';
import Episodes from './pages/Episodes/Episodes';
import Main from './pages/Main/Main';
import PreviousHomeWork from './pages/PreviousHomeWork/PreviousHomeWork';
import Character from './pages/Characters/components/Character';
import Location from './pages/Locations/components/Location';
import Episode from './pages/Episodes/components/Episode';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/characters">
          <Route index element={<Characters />} />
          <Route path=":character" element={<Character />} />
        </Route>
        <Route path="/locations">
          <Route index element={<Locations />} />
          <Route path=":location" element={<Location />} />
        </Route>
        <Route path="/episodes">
          <Route index element={<Episodes />} />
          <Route path=":episode" element={<Episode />} />
        </Route>

        <Route path="/previousHomeWork" element={<PreviousHomeWork />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
