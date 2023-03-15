import DefaultToggle from './components/DefaultToggle/defaultToggle';
import ThemeToggle from './components/ThemeToggle/themeToggle';
import MultiToggle from './components/MultiToggle/multiToggle';
// @ts-ignore
import style from './style.module.scss';

const AdditionalTask2 = () => {
  return (
    <div className={style.container}>
      <header className={style.container__header}>
        <h2 className={style.container__title}>- Additional Task 2 -</h2>
      </header>
      <DefaultToggle />
      <ThemeToggle />
      <MultiToggle />
    </div>
  );
};

export default AdditionalTask2;
