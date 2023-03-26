import useFetch from '../../../../app/custom-hooks/useFetch';
// @ts-ignore
import style from './style.module.scss';

const Task_1 = () => {
  const { data, isLoading, error, reFetch } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <div className={style.container}>
      <header className={style.container__header}>
        <h2 className={style.container__title}>- Task 1 -</h2>
      </header>
      <button
        className={style.container__button}
        onClick={() => reFetch({ params: { _limit: 3 } })}
      >
        re-REQUEST
      </button>
      {isLoading && (
        <span className={style.container__loading}>loading...</span>
      )}
      {error && (
        <span className={style.container__error}>Произошла ошибка</span>
      )}
      <div className={style.container__list}>
        {data &&
          !isLoading &&
          data.map((item) => (
            <div className={style['container__list-item']} key={item.id}>
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Task_1;
