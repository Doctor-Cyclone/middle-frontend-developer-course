import { FormEvent, FunctionComponent, useRef, useState } from 'react';
// @ts-ignore
import style from '../../style.module.scss';
import TextInput from '../../../../../shared/components/Inputs/TextInput/TextInput';
import cn from 'classnames';
import { UserData } from '../../reactForm';
import useLocalStorage from '../../../../custom-hooks/useLocalStorage';

const initialUserData: UserData = {
  email: '',
  password: ''
};

interface SigninProps {
  onSubmit: (data: UserData, isCorrectEnterData: boolean) => void;
}

const Signin: FunctionComponent<SigninProps> = ({ onSubmit }) => {
  const [userData, { getItem }] = useLocalStorage<UserData>(
    initialUserData,
    'userDataKey'
  );
  const userDataRef = useRef(initialUserData);
  const [error, setError] = useState('');

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;

    userDataRef.current = {
      ...userDataRef.current,
      [target.name]: target.value
    };
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const { password, email } = getItem(initialUserData, 'userDataKey');

    if (
      password === userDataRef.current.password &&
      email === userDataRef.current.email
    ) {
      onSubmit(userDataRef.current, true);
    } else {
      onSubmit(userDataRef.current, false);
      setError('Incorrect email or password');
    }
  };

  return (
    <div className={style.signin}>
      <h3 className={style.signin__title}>Signin</h3>
      <form
        className={style.signin__form}
        onChange={handleChange}
        // onSubmit={handleSubmit}
      >
        <TextInput
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          error={error && error}
        />
        <TextInput
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          error={error && error}
        />
        <div className={style['signin__button-wrapper']}>
          <button
            className={cn([style.signin__button])}
            type="submit"
            onClick={(event) => handleSubmit(event)}
            disabled={
              !userDataRef.current.password && !userDataRef.current.email
            }
          >
            SignIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
