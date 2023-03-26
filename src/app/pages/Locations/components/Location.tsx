import { FunctionComponent } from 'react';
import location from '../location.json';
// @ts-ignore
import style from './style.module.scss';
import { useParams, NavLink } from 'react-router-dom';

const Location: FunctionComponent = () => {
  const params = useParams();
  const { id, name, type, dimension, created } = location.filter(
    (location) => location.name.split(' ').join('') === params.location
  )[0];
  return (
    <section className={style.location}>
      <div className={style.location__container}>
        <NavLink to="/locations">Back</NavLink>
        <h2 className={style.location__title}>{name}</h2>
        <div className={style.location__content}>
          <div className={style.location__info}>
            <span className={style['location__info-item']}>ID: {id}</span>
            <span className={style['location__info-item']}>Name: {name}</span>
            <span className={style['location__info-item']}>Type: {type}</span>
            <span className={style['location__info-item']}>
              Gender: {dimension}
            </span>
            <span className={style['location__info-item']}>
              Created: {created}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
