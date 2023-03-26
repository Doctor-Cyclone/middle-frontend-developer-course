import React, { FunctionComponent } from 'react';
// @ts-ignore
import style from './style.module.scss';
import ReactForm from '../../Tasks/ReactForm/reactForm';
import ReactHooks from '../../Tasks/ReactHooks/reactHooks';

const PreviousHomeWork: FunctionComponent = () => {
  return (
    <section className={style.component}>
      <div className="header">
        <h1 className="title">React</h1>
      </div>
      <main className={style.component__content}>
        <h2 className={style.component__subtitle}>React Form</h2>
        <ReactForm />
        <h2 className={style.component__subtitle}>React Hooks</h2>
        <ReactHooks />
      </main>
    </section>
  );
};

export default PreviousHomeWork;
