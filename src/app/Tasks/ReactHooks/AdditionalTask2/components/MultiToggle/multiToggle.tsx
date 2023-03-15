import useToggle from '../../../../../custom-hooks/useToggle';
// @ts-ignore
import style from 'src/app/Tasks/ReactHooks/AdditionalTask2/components/MultiToggle/style.module.scss';

const MultiToggle = () => {
  const [value, toggleValue] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <div className={style.container}>
      <header className={style.container}>
        <p className={style.container__text}>
          Current value: {value.toString()}
        </p>
        <button
          className={style.container__button}
          onClick={() => toggleValue()}
        >
          Toggle array
        </button>
      </header>
    </div>
  );
};

export default MultiToggle;
