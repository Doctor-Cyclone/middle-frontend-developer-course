import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './core/components/Header/Header';
import Characters from './pages/Characters/Characters';
import Locations from './pages/Locations/Locations';
import Episodes from './pages/Episodes/Episodes';
import Main from './pages/Main/Main';
import Character from './pages/Characters/components/Character';
import Location from './pages/Locations/components/Location';
import Episode from './pages/Episodes/components/Episode';
import AuthProvider from './context/Auth/AuthProvider';
import Signin from './pages/SignIn/Signin';
import PrivateRout from './core/hoc/PrivateRout';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/signIn" element={<Signin />} />

          <Route path="/characters">
            <Route
              index
              element={
                <PrivateRout>
                  <Characters />
                </PrivateRout>
              }
            />
            <Route
              path=":character"
              element={
                <PrivateRout>
                  <Character />
                </PrivateRout>
              }
            />
          </Route>
          <Route path="/locations">
            <Route
              index
              element={
                <PrivateRout>
                  <Locations />
                </PrivateRout>
              }
            />
            <Route
              path=":location"
              element={
                <PrivateRout>
                  <Location />
                </PrivateRout>
              }
            />
          </Route>
          <Route path="/episodes">
            <Route
              index
              element={
                <PrivateRout>
                  <Episodes />
                </PrivateRout>
              }
            />
            <Route
              path=":episode"
              element={
                <PrivateRout>
                  <Episode />
                </PrivateRout>
              }
            />
          </Route>

          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
