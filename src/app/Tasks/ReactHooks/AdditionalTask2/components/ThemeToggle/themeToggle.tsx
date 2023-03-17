import useToggle from '../../../../../custom-hooks/useToggle';
import cn from 'classnames';
// @ts-ignore
import style from './style.module.scss';

const ThemeToggle = () => {
  const [value, toggleTheme] = useToggle(['dark', 'light']);

  return (
    <div className={cn([style.container, style[`container_${value}`]])}>
      <div className={style.container__content}>
        <button
          className={style.container__button}
          onClick={() => toggleTheme()}
        >
          Toggle theme
        </button>
        <button
          className={style.container__button}
          onClick={() => toggleTheme('light')}
        >
          Toggle light theme
        </button>
        <p className={style.container__text}>
          Current value:{' '}
          <span
            className={cn([
              style.container__text_highlight,
              style[`container__text_highlight_${value}`]
            ])}
          >
            {value.toString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ThemeToggle;
