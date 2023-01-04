import { NavLink, useLocation } from 'react-router-dom';
import { CgMenuGridO, CgClose } from 'react-icons/cg';
import { BsSuitHeartFill, BsStars, BsStopwatchFill } from 'react-icons/bs';
import { useMenu } from '../hooks/useMenu';
import useScrollClass from '../hooks/useScrollClass';
import Searcher from './Searcher';

const Header = () => {
  const { pathname } = useLocation();
  const { handleMenu, menuStatus } = useMenu();
  const scrollClass = useScrollClass('header__down');
  const scrollClassHome = useScrollClass('header__down--home');
  const scrollClassName =
    pathname === '/'
      ? `${scrollClassHome} header header--home`
      : `${scrollClass} header`;
  const menuLinks = [
    {
      icon: <BsStars />,
      label: 'Popular',
      path: '/popular',
    },
    {
      icon: <BsStopwatchFill />,
      label: 'Próximamente',
      path: '/upcoming',
    },
    {
      icon: <BsSuitHeartFill />,
      label: 'Favoritos',
      path: '/favorites',
    },
  ];

  return (
    <div className={scrollClassName}>
      <div className='header__content ml-padding'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'header__logo header__logo--active' : 'header__logo'
          }
          to='/'
        >
          Movie<span>List</span>
        </NavLink>

        <div className='header__info'>
          <Searcher />
          <button className='header__info--menu' onClick={handleMenu}>
            {menuStatus ? <CgClose /> : <CgMenuGridO />}
          </button>
          <ul
            className={`header__info-list ${
              menuStatus ? 'header__info-list--active' : ''
            }`}
            onClick={handleMenu}
          >
            {menuLinks.map(({ icon, label, path }) => (
              <li className='header__info-item' key={path}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'header__info-link header__info-link--active'
                      : 'header__info-link'
                  }
                  to={path}
                >
                  {icon} {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
