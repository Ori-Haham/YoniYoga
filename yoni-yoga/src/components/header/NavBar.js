import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      {/* <nav className='nav-bar'>
        <NavLink className='nav-bar__link text__medium-bold' to='/'>
          בית
        </NavLink>
        <NavLink className='nav-bar__link text__medium-bold' to='/'>
          קצת עלי
        </NavLink>
        <NavLink className='nav-bar__link text__medium-bold' to='/yoga'>
          יוגה
        </NavLink>
        <NavLink className='nav-bar__link text__medium-bold' to='/martialarts'>
          לחימה
        </NavLink>
        <NavLink className='nav-bar__link text__medium-bold' to='/therapy'>
          טיפולי
        </NavLink>
        <NavLink className='nav-bar__link text__medium-bold' to='/'>
          צור קשר
        </NavLink>
      </nav> */}

      <input type='checkbox' id='menuToggler' className='input-toggler' />
      <label for='menuToggler' className='menu-toggler'>
        <span className='menu-toggler__line'></span>
        <span className='menu-toggler__line'></span>
        <span className='menu-toggler__line'></span>
      </label>
      <aside className='sidebar'>
        <ul className='menu'>
          <li className='menu__item'>
            <NavLink className='menu__link' to='/'>
              בית
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink className='menu__link' to='/'>
              קצת עלי
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink className='menu__link' to='/yoga'>
              יוגה
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink className='menu__link' to='/martialarts'>
              לחימה
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink className='menu__link' to='/therapy'>
              טיפולי
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink className='menu__link' to='/'>
              צור קשר
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default NavBar;
