import { useIsAuth } from '../../context/Auth/AuthContext';
import { Navigate } from 'react-router-dom';

// @ts-ignore
const PrivateRout = ({ children }) => {
  const { user } = useIsAuth();

  if (!user.isAuth) {
    return <Navigate to="/signIn" />;
  }

  return children;
};

export default PrivateRout;
