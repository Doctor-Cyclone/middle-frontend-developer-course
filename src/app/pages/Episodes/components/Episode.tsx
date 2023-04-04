import { FunctionComponent } from 'react';
import episodes from '../episode.json';
// @ts-ignore
import style from './style.module.scss';
import { useParams, NavLink } from 'react-router-dom';

const Location: FunctionComponent = () => {
  const params = useParams();
  const { id, name, air_date, episode, created } = episodes.filter(
    (episode) => episode.name.split(' ').join('') === params.episode
  )[0];
  return (
    <section className={style.location}>
      <div className={style.location__container}>
        <NavLink to="/episodes">Back</NavLink>
        <h2 className={style.location__title}>{name}</h2>
        <div className={style.location__content}>
          <div className={style.location__info}>
            <span className={style['location__info-item']}>ID: {id}</span>
            <span className={style['location__info-item']}>Name: {name}</span>
            <span className={style['location__info-item']}>
              Air Date: {air_date}
            </span>
            <span className={style['location__info-item']}>
              Episode: {episode}
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
