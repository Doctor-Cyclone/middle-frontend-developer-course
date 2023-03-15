import useLocalStorage from '../../../../app/custom-hooks/useLocalStorage';
// @ts-ignore
import style from './style.module.scss';

const Task_2 = () => {
  const [token, { setItem, removeItem }] = useLocalStorage(
    'Default token',
    'token'
  );

  return (
    <div className={style.container}>
      <header className={style.container__header}>
        <h2 className={style.container__title}>- Task 2 -</h2>
      </header>
      <div className={style.container__content}>
        <div className={style.container__buttons}>
          <button
            className={style.container__button}
            onClick={() => setItem('New Token')}
          >
            Задать токен
          </button>
          <button
            className={style.container__button}
            onClick={() => removeItem()}
          >
            Удалить токен
          </button>
        </div>
        <p className={style.container__text}>
          Твой токен:{' '}
          <span className={style.container__text_highlight}>{token}</span>
        </p>
      </div>
    </div>
  );
};

export default Task_2;
