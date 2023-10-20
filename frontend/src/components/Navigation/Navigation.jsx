import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';

function Navigation () {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const linkTextColor = `${location.pathname === "/" ? "" : "nav__link_text_black" }`
  const linkClass = ({ isActive }) => `nav__link ${linkTextColor}  ${isActive ? 'nav__link_active' : ''}`
  const linkFilmClass = ({ isActive }) => `nav__link nav__link_type_films ${linkTextColor} ${isActive ? 'nav__link_active' : ''}`
  

function handleMenuClick() {
  isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
} 
  
  
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__films">
          <NavLink to="/movies" className={linkFilmClass}>Movies</NavLink>
          <NavLink to="/saved-movies" className={linkFilmClass}>Liked Movies</NavLink>
        </div>
        <div className="nav__profile">
          <NavLink to="/profile" className={linkClass}>Profile</NavLink>
          <NavLink to="/profile" className="nav__profile-icon"></NavLink>
        </div>
      </div>
      <NavMenu
        isOpen={isMenuOpen}
        onClose={handleMenuClick}
      />
      <div className={`nav__sandwich ${isMenuOpen ? "nav__sandwich_clicked": ""}`} onClick={handleMenuClick}></div>
    </nav>
  )
}

export default Navigation;