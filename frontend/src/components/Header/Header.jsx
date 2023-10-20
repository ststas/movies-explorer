import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext"

function Header () {
  const location = useLocation();
  const headerBackground = location.pathname === '/' ? "": "header_background-color";
  const isLoggedIn = useContext(GeneralContext).isLoggedIn

  return (
    <header className={`header ${headerBackground}`}>
          <Link to="/" className="header__logo"/>
            {isLoggedIn ? 
              (<Navigation/>)
            :
              (<div>
                <Link to="/signup" className="header__link">Sign up</Link>
                <Link to="/signin"><button className="header__button">Log in</button></Link>
              </div>)
            }  
    </header>
  )
}

export default Header