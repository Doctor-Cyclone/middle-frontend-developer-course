import useViewportSize from '../../../../app/custom-hooks/useViewportSize';
// @ts-ignore
import style from './style.module.scss';

const Task_4 = () => {
  const { height, width } = useViewportSize();

  return (
    <div className={style.container}>
      <header className={style.container__header}>
        <h2 className={style.container__title}>- Task 4 -</h2>
      </header>
      <div className={style.container__content}>
        <span className={style.container__text}>
          Width:{' '}
          <span className={style.container__text_highlight}>{width}</span>
        </span>
        <span className={style.container__text}>
          Height:{' '}
          <span className={style.container__text_highlight}>{height}</span>
        </span>
      </div>
    </div>
  );
};

export default Task_4;
