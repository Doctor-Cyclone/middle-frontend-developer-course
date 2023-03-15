import useToggle from '../../../../../custom-hooks/useToggle';
// @ts-ignore
import style from 'src/app/Tasks/ReactHooks/AdditionalTask2/components/DefaultToggle/style.module.scss';

const DefaultToggle = () => {
  const [booleanValue, toggleBooleanValue] = useToggle();

  return (
    <div className={style.container}>
      <header className={style.container}>
        <p className={style.container__text}>
          Current theme: {booleanValue.toString()}
        </p>
        <button
          className={style.container__button}
          onClick={() => toggleBooleanValue()}
        >
          Toggle boolean value
        </button>
      </header>
    </div>
  );
};

export default DefaultToggle;
