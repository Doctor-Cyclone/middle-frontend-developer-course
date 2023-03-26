import { FunctionComponent, useState } from 'react';
// @ts-ignore
import style from './style.module.scss';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';

export interface UserData {
  name?: string;
  nickname?: string;
  email: string;
  gender?: string;
  password: string;
}

const ReactForm: FunctionComponent = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isEnter, setIsEnter] = useState(false);

  const onSigninSubmit = (data: UserData, isCorrectEnterData: boolean) => {
    console.log('Enter data: ', data);
    setIsEnter(isCorrectEnterData);
  };

  const onSignupSubmit = (data: UserData) => {
    console.log('Registration data: ', data);
    setIsRegistered(true);
  };

  return (
    <section className={style.reactForm}>
      {isEnter ? (
        <h3>You are logged in to your account</h3>
      ) : !isRegistered ? (
        <Signin onSubmit={onSigninSubmit} />
      ) : (
        <Signup onSubmit={onSignupSubmit} />
      )}
    </section>
  );
};

export default ReactForm;
