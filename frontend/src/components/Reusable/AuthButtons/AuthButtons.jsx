import { Link, useLocation } from "react-router-dom";

import { GeneralContext } from "../../../contexts/GeneralContext";
import { useContext } from "react";

function AuthButtons ({ onSubmit, classModifier, isValid }) {
  const { isLoading } = useContext(GeneralContext);
  const location = useLocation();
  const linkPath = (location.pathname === '/signin') ? '/signup' : '/signin';
  const linkText = (location.pathname === '/signin') ? 'Sign up' : 'Log in';
  const buttonName = (location.pathname === '/signin') ? 'Log in' : 'Sign up';
  const titleName = (location.pathname === '/signin') ? `Don't have an account?` : 'Already have an account?';

  return (
    <div className={`auth-buttons ${classModifier}`}>
      <button 
        className={`auth-buttons__submit-button  ${isValid ? "" : "auth-buttons__submit-button_disabled"} ${!isLoading ? "" : "auth-buttons__submit-button_disabled"}`} 
        type="submit" 
        onClick={onSubmit}
      >{buttonName}</button>
      <div className="auth-buttons__link-container">
        <p className="auth-buttons__title">{titleName}</p>
        <Link to={linkPath} className="auth-buttons__link" >{linkText}</Link>
      </div>
    </div>
  )
}

export default AuthButtons;