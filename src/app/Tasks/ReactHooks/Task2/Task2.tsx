import useLocalStorage from '../../../../app/custom-hooks/useLocalStorage';
// @ts-ignore
import style from './style.module.scss';

const Task_2 = () => {
  const [token, { setItem, removeItem }] = useLocalStorage('token', 'token');

  return (
    <div className={style.container}>
      <p className={style.container__text}>Твой токен: {token}</p>
      <div>
        <button
          className={style.container__button}
          onClick={() => setItem('new-token')}
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
    </div>
  );
};

export default Task_2;
