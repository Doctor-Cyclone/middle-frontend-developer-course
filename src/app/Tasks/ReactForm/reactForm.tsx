import { FunctionComponent, useState } from 'react';
// @ts-ignore
import style from './style.module.scss';
import Signup from './components/Signup/Signup';
import Signin from '../../pages/SignIn/Signin';
import { useIsAuth } from '../../context/Auth/AuthContext';

export interface UserData {
  name?: string;
  nickname?: string;
  email: string;
  gender?: string;
  password: string;
}

const ReactForm: FunctionComponent = () => {
  const { user, signOut } = useIsAuth();
  const [isRegistered, setIsRegistered] = useState(false);

  const onSignupSubmit = (data: UserData) => {
    console.log('Registration data: ', data);
    setIsRegistered(true);
  };

  return (
    <section className={style.reactForm}>
      {user.isAuth ? (
        <div>
          <h3>You are logged in to your account</h3>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : isRegistered ? (
        <Signin />
      ) : (
        <Signup onSubmit={onSignupSubmit} />
      )}
    </section>
  );
};

export default ReactForm;
