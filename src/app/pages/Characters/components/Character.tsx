import { FunctionComponent } from 'react';
import character from '../characters.json';
// @ts-ignore
import style from './style.module.scss';
import { useParams, NavLink } from 'react-router-dom';

const Character: FunctionComponent = () => {
  const params = useParams();
  const currentCharacter = character.filter(
    (character) => character.name.split(' ').join('') === params.character
  )[0];
  return (
    <section className={style.character}>
      <div className={style.character__container}>
        <NavLink to="/characters">Back</NavLink>
        <h2 className={style.character__title}>{currentCharacter.name}</h2>
        <div className={style.character__content}>
          <img
            className={style['character__image']}
            src={currentCharacter.image}
            alt={currentCharacter.name}
          />
          <div className={style.character__info}>
            <span className={style['character__info-item']}>
              ID: {currentCharacter.id}
            </span>
            <span className={style['character__info-item']}>
              Name: {currentCharacter.name}
            </span>
            <span className={style['character__info-item']}>
              Status: {currentCharacter.status}
            </span>
            <span className={style['character__info-item']}>
              Species: {currentCharacter.species}
            </span>
            <span className={style['character__info-item']}>
              Type:{' '}
              {currentCharacter.type !== '' ? currentCharacter.type : 'unknown'}
            </span>
            <span className={style['character__info-item']}>
              Gender: {currentCharacter.gender}
            </span>
            <span className={style['character__info-item']}>
              Created: {currentCharacter.created}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Character;
