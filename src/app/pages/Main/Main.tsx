import React, { FunctionComponent } from 'react';
// @ts-ignore
import style from './style.module.scss';

const Main: FunctionComponent = () => {
  return (
    <section className={style.component}>
      <div className={style.component__container}>
        <h2>Welcome</h2>
      </div>
    </section>
  );
};

export default Main;
