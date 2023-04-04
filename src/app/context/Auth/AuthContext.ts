import { createContext, useContext } from 'react';

export interface User {
  isAuth: boolean;
}

export interface IAuthContext {
  user: User;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useIsAuth = () => {
  return useContext(AuthContext);
};
