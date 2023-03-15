import useToggle from '../../../../../custom-hooks/useToggle';
import cn from 'classnames';
// @ts-ignore
import style from 'src/app/Tasks/ReactHooks/AdditionalTask2/components/ThemeToggle/style.module.scss';

const ThemeToggle = () => {
  const [theme, toggleTheme] = useToggle(['dark', 'light']);

  return (
    <div className={style.container}>
      <header
        className={cn([
          style.container__head,
          style[`container__head_${theme}`]
        ])}
      >
        <p className={style.container__text}>
          Current theme: {theme.toString()}
        </p>
      </header>
      <button className={style.container__button} onClick={() => toggleTheme()}>
        Toggle theme
      </button>
    </div>
  );
};

export default ThemeToggle;
