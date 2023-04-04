import { NavLink } from 'react-router-dom';
// @ts-ignore
import style from './style.module.scss';
import { useIsAuth } from '../../../context/Auth/AuthContext';

const Header = () => {
  const { user, signOut } = useIsAuth();

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <nav className={style['header__nav-container']}>
          <ul className={style.header__list}>
            <li className={style['header__list-item']}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'header__link_active' : 'header__link'
                }
              >
                Home
              </NavLink>
            </li>
            {user.isAuth ? (
              <>
                <li className={style['header__list-item']}>
                  <NavLink
                    to="/characters"
                    className={({ isActive }) =>
                      isActive ? 'header__link_active' : 'header__link'
                    }
                  >
                    Characters
                  </NavLink>
                </li>
                <li className={style['header__list-item']}>
                  <NavLink
                    to="/locations"
                    className={({ isActive }) =>
                      isActive ? 'header__link_active' : 'header__link'
                    }
                  >
                    Locations
                  </NavLink>
                </li>
                <li className={style['header__list-item']}>
                  <NavLink
                    to="/episodes"
                    className={({ isActive }) =>
                      isActive ? 'header__link_active' : 'header__link'
                    }
                  >
                    Episodes
                  </NavLink>
                </li>
              </>
            ) : null}
            <li className={style['header__list-item']} onClick={signOut}>
              <NavLink
                to="/signIn"
                className={({ isActive }) =>
                  isActive ? 'header__link_active' : 'header__link'
                }
              >
                {user.isAuth ? 'Sign Out' : 'Sign In'}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
