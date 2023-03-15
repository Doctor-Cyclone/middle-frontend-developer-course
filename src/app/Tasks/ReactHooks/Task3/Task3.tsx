import useHover from '../../../../app/custom-hooks/useHover';
// @ts-ignore
import style from './style.module.scss';

const Task_3 = () => {
  const { hovered, ref } = useHover();

  return (
    <div className={style.container}>
      <header className={style.container__header}>
        <h2 className={style.container__title}>- Task 3 -</h2>
      </header>
      <button className={style.container__button} ref={ref}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </button>
    </div>
  );
};

export default Task_3;
