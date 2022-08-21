import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className='nav-bar'>
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
      </nav>
    </>
  );
}

export default NavBar;
