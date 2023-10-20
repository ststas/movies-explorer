import { NavLink, useLocation } from "react-router-dom";
import useEscOverlayClose from '../../hooks/useEscOverlayClose'


function NavMenu ({ isOpen, onClose }) {
  const location = useLocation()
  useEscOverlayClose(isOpen, onClose)
  
  return (
    <nav className={`nav-menu ${isOpen ? "nav-menu_visible" : ""}`}>
      <div className={`nav-menu__container ${isOpen ? "nav-menu__container_open" : ""}`}>
        <button className={`nav-menu__close-button ${!isOpen ? "nav-menu__close-button_clicked" : ""} `}onClick={onClose}></button>
          <div className="nav-menu__main">
            <NavLink 
              to="/"
              className={`nav-menu__link ${location.pathname === "/" ? "nav-menu__link_active" : ""}`}
              onClick={onClose}
            >Main</NavLink>
            <NavLink 
              to="/movies"
              className={`nav-menu__link ${location.pathname === "/movies" ? "nav-menu__link_active" : ""}`}
              onClick={onClose}
            >Movies</NavLink>
            <NavLink
              to="/saved-movies"
              className={`nav-menu__link ${location.pathname === "/saved-movies" ? "nav-menu__link_active" : ""}`}
              onClick={onClose}
            >Liked Movies</NavLink>
          </div>
          <div className="nav-menu__profile">
            <NavLink
              to="/profile"
              className="nav-menu__link nav-menu__link_type_profile" 
              onClick={onClose}
            >Profile</NavLink>
            <NavLink to="/profile" className="nav-menu__profile-icon" onClick={onClose}></NavLink>
          </div> 
      </div>
    </nav>
  )
}

export default NavMenu;