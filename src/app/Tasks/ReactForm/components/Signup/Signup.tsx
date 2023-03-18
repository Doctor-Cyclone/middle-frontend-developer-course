import { FormEvent, FunctionComponent, useRef } from 'react';
// @ts-ignore
import style from '../../style.module.scss';
import TextInput from '../../../../../shared/components/Inputs/TextInput/TextInput';
import RadioInput from '../../../../../shared/components/Inputs/RadioInput/RadioInput';
import cn from 'classnames';
import { UserData } from '../../reactForm';
import useLocalStorage from '../../../../custom-hooks/useLocalStorage';

const initialUserData: UserData = {
  name: '',
  nickname: '',
  email: '',
  gender: '',
  password: ''
};

const Signup: FunctionComponent<{
  onSubmit: (data: UserData) => void;
}> = ({ onSubmit }) => {
  const [userData, { setItem }] = useLocalStorage<UserData>(
    initialUserData,
    'userDataKey'
  );
  const userDataRef = useRef(userData);

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;

    userDataRef.current = {
      ...userDataRef.current,
      [target.name]: target.value
    };
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setItem(userDataRef.current);
    onSubmit(userDataRef.current);
  };

  return (
    <div className={style.signup}>
      <h3 className={style.signup__title}>Signup</h3>
      <form
        className={style.signup__form}
        // onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <TextInput
          type="text"
          name="name"
          label="Name"
          placeholder="Enter your name"
        />
        <TextInput
          type="text"
          name="nickname"
          label="Nickname"
          placeholder="Enter your nickname"
        />
        <TextInput
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
        />
        <div>
          <span className={style['signup__form-gender-title']}>
            Choose your gender
          </span>
          <div className={style['signup__form-gender']}>
            <RadioInput name="gender" label="Male" />
            <RadioInput name="gender" label="Female" />
          </div>
        </div>
        <TextInput
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
        />
        <TextInput
          type="password"
          name="re-password"
          label="Password"
          placeholder="Repeat your password"
        />
        <div className={style['signup__button-wrapper']}>
          <button
            className={cn([style.signup__button])}
            type="submit"
            onClick={(event) => handleSubmit(event)}
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
