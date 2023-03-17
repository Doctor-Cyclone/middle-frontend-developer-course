import useWindowScroll from '../../../../app/custom-hooks/useWindowScroll';
// @ts-ignore
import style from './style.module.scss';

const AdditionalTask1 = () => {
  const [position, scrollTo] = useWindowScroll();

  return (
    <div className={style.container}>
      <header className={style.container__header}>
        <h2 className={style.container__title}>- Additional Task 1 -</h2>
      </header>
      <div className={style.container__content}>
        <button
          className={style.container__button}
          onClick={() => scrollTo({ y: 0 })}
        >
          Scroll to top
        </button>
        <p className={style.container__text}>
          Scroll position x:{' '}
          <span className={style.container__text_highlight}>{position.x}</span>,
          y:{' '}
          <span className={style.container__text_highlight}>{position.y}</span>
        </p>
      </div>
    </div>
  );
};

export default AdditionalTask1;
