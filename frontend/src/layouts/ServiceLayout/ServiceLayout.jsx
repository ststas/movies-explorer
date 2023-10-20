import { Outlet, useLocation } from "react-router-dom";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";

function ServiceLayout () {
  const location = useLocation()
  return (
    <div className="service-layout">
      {(location.pathname === '/signin' || location.pathname === '/signup') && <ServiceHeader/>}
      <Outlet />
    </div>
  )
}

export default ServiceLayout;