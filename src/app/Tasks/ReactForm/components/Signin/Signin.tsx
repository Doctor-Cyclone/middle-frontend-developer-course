import { FunctionComponent } from 'react';
// @ts-ignore
import style from './style.module.scss';

const Signin: FunctionComponent = () => {
  return (
    <div className={style.container}>
      <form className={style.container__form}>
        <input type="email" />
        <input type="password" />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Signin;
