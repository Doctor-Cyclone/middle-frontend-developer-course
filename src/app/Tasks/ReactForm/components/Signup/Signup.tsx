import { FunctionComponent } from 'react';
// @ts-ignore
import style from './style.module.scss';
import TextInput from '../../../../../shared/components/Inputs/TextInput/TextInput';
import RadioInput from '../../../../../shared/components/Inputs/RadioInput/RadioInput';

const Signup: FunctionComponent = () => {
  return (
    <div className={style.signup}>
      <h3 className={style.signup__title}>Signup</h3>
      <form className={style.signup__form}>
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
        <div className={style['signup__form-gender']}>
          <RadioInput name="gender" label="Male" />
          <RadioInput name="gender" label="Female" />
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
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};

export default Signup;
