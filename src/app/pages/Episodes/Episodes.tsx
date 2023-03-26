import { FunctionComponent } from 'react';
import episodes from './episode.json';
// @ts-ignore
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';

const Episodes: FunctionComponent = () => {
  return (
    <section className={style.episodes}>
      <div className={style.episodes__container}>
        <h2 className={style.episodes__title}>Characters</h2>
        <div className={style.episodes__list}>
          {episodes.map((episode) => {
            return (
              <NavLink
                to={episode.name.split(' ').join('')}
                className={style.episodes__episode}
                key={episode.id}
              >
                <div className={style['episodes__episode-info']}>
                  <span>
                    Name:{' '}
                    <span className={style['episodes__episode-info_colored']}>
                      {episode.name}
                    </span>
                  </span>
                  <span>
                    Ait Data:{' '}
                    <span className={style['episodes__episode-info_colored']}>
                      {episode.air_date}
                    </span>
                  </span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Episodes;
