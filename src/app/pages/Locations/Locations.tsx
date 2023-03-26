import { FunctionComponent } from 'react';
import location from './location.json';
// @ts-ignore
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const Locations: FunctionComponent = () => {
  return (
    <section className={style.locations}>
      <div className={style.locations__container}>
        <h2 className={style.locations__title}>Characters</h2>
        <div className={style.locations__list}>
          {location.map((location) => {
            return (
              <NavLink
                to={location.name.split(' ').join('')}
                className={style.locations__location}
                key={location.id}
              >
                <div className={style['locations__location-info']}>
                  <span className={style['locations__location-name']}>
                    {location.name}
                  </span>
                  <span
                    className={cn([
                      style['locations__location-status'],
                      style[
                        `locations__location-status_${location.type.toLowerCase()}`
                      ]
                    ])}
                  >
                    {location.type}
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

export default Locations;
