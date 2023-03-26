import { FunctionComponent } from 'react';
import character from './characters.json';
// @ts-ignore
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const Characters: FunctionComponent = () => {
  return (
    <section className={style.characters}>
      <div className={style.characters__container}>
        <h2 className={style.characters__title}>Characters</h2>
        <div className={style.characters__list}>
          {character.map((character) => {
            return (
              <NavLink
                to={character.name.split(' ').join('')}
                className={style.characters__character}
                key={character.id}
              >
                <img
                  className={style['characters__character-image']}
                  src={character.image}
                  alt={character.name}
                />
                <div className={style['characters__character-info']}>
                  <span className={style['characters__character-name']}>
                    {character.name.split(' ')[0]}
                  </span>
                  <span
                    className={cn([
                      style['characters__character-status'],
                      style[
                        `characters__character-status_${character.status.toLowerCase()}`
                      ]
                    ])}
                  >
                    {character.status !== 'unknown' ? character.status : '-'}
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

export default Characters;
