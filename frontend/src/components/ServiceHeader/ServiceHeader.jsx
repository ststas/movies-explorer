import { Link, useLocation } from "react-router-dom";

function ServiceHeader () {
  const location = useLocation();
  const title = (location.pathname === '/signin') ? 'Welcome back!' : 'Welcome!';
  return (
    <header className="service-header">
      <Link to="/" className="service-header__logo"/>
      <h1 className="service-header__title">{title}</h1>
    </header>
  )
}

export default ServiceHeader;