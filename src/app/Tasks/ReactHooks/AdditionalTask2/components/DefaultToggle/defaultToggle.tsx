import useToggle from '../../../../../custom-hooks/useToggle';
// @ts-ignore
import style from './style.module.scss';

const DefaultToggle = () => {
  const [value, toggleBooleanValue] = useToggle();

  return (
    <div className={style.container}>
      <div className={style.container__content}>
        <button
          className={style.container__button}
          onClick={() => toggleBooleanValue()}
        >
          Toggle boolean value
        </button>
        <p className={style.container__text}>
          Current value:{' '}
          <span className={style.container__text_highlight}>
            {value.toString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DefaultToggle;
