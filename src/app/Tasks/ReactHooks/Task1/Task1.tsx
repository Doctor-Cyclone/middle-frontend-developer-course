import useFetch from '../../../../app/custom-hooks/useFetch';
// @ts-ignore
import style from './style.module.scss';

const Task_1 = () => {
  const { data, isLoading, error, reFetch } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <div className={style.container}>
      <button
        className={style.container__button}
        onClick={() => reFetch({ params: { _limit: 3 } })}
      >
        Перезапросить
      </button>
      <span>{isLoading && 'Загрузка...'}</span>
      <span>{error && 'Произошла ошибка'}</span>
      <div>
        {data &&
          !isLoading &&
          data.map((item) => <div key={item.id}>{item.title}</div>)}
      </div>
    </div>
  );
};

export default Task_1;
