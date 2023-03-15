import useViewportSize from '../../../../app/custom-hooks/useViewportSize';
// @ts-ignore
import style from './style.module.scss';

const Task_4 = () => {
  const { height, width } = useViewportSize();

  return (
    <div className={style.container}>
      Width: {width}, height: {height}
    </div>
  );
};

export default Task_4;
