import useHover from '../../../../app/custom-hooks/useHover';
// @ts-ignore
import style from './style.module.scss';

const Task_3 = () => {
  const { hovered, ref } = useHover();

  return (
    <div className={style.container} ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
};

export default Task_3;
