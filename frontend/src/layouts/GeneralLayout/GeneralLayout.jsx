import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function GeneralLayout () {
  const location = useLocation()

  return (
    <div className="general-layout">
      <Header />
      <Outlet />
      {location.pathname !== '/profile' && <Footer />}
    </div>
  )
}

export default GeneralLayout;