import { useState } from 'react';
import { AuthContext } from './AuthContext';

const getUserFromLocalStorage = () => {
  const isAuthStringify = localStorage.getItem('isAuth');

  if (isAuthStringify) {
    return JSON.parse(isAuthStringify);
  }

  return false;
};

// @ts-ignore
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuth: getUserFromLocalStorage() });

  const signIn = () => {
    setUser({ isAuth: true });
    localStorage.setItem('isAuth', JSON.stringify(true));
  };
  const signOut = () => {
    setUser({ isAuth: false });
    localStorage.removeItem('isAuth');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
