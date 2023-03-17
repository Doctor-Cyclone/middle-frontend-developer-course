import React from 'react';
import Task1 from './Task1/Task1';
import Task2 from './Task2/Task2';
import Task3 from './Task3/Task3';
import Task4 from './Task4/Task4';
import AdditionalTask1 from './AdditionalTask1/AdditionalTask1';
import AdditionalTask2 from './AdditionalTask2/AdditionalTask2';
// @ts-ignore
import style from './style.module.scss';

const ReactHooks = () => {
  return (
    <div className={style.container}>
      <AdditionalTask2 />
      <AdditionalTask1 />
      <Task4 />
      <Task3 />
      <Task2 />
      <Task1 />
    </div>
  );
};

export default ReactHooks;
