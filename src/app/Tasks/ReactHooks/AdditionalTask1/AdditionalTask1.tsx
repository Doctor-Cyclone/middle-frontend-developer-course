import useWindowScroll from '../../../../app/custom-hooks/useWindowScroll';
// @ts-ignore
import style from './style.module.scss';

const AdditionalTask1 = () => {
  const [position, scrollTo] = useWindowScroll();

  return (
    <div className={style.container}>
      <p className={style.container__text}>
        Scroll position x: {position.x}, y: {position.y}
      </p>
      <button
        className={style.container__button}
        onClick={() => scrollTo({ y: 0 })}
      >
        Scroll to top
      </button>
    </div>
  );
};

export default AdditionalTask1;
