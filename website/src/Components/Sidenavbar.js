import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  useEffect(() => {
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    fontAwesomeLink.rel = 'stylesheet';

    document.head.appendChild(fontAwesomeLink);

    return () => {
      document.head.removeChild(fontAwesomeLink);
    };
  }, []);

  const location = useLocation();

  return (
    <header>
      <nav className="sidenav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}><i className="fa fa-fw fa-home"></i> Home</Link> 
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}><i className="fa fa-fw fa-user"></i> Projekt</Link> 
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}><i className="fa fa-fw fa-envelope"></i> Kontakt</Link>
      </nav>
    </header>
  );
}

export default Header;
