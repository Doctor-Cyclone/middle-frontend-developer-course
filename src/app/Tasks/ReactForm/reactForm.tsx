import { FunctionComponent } from 'react';
// @ts-ignore
import style from './style.module.scss';
import Signup from './components/Signup/Signup';

const ReactForm: FunctionComponent = () => {
  return (
    <section className={style.container}>
      <Signup />
    </section>
  );
};

export default ReactForm;
