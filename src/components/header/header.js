import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='header'>
      <h1 className={scrollPosition > 0 ? 'logo' : 'logo_hidden'}>
        יונתן לוגו
      </h1>
      <NavBar />
    </header>
  );
}

export default Header;
