import Login from "../../components/Login/Login";
import InfoToolTip from "../../components/InfoToolTip/InfoTooltip"
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage () {
  const { isLoggedIn } = useContext(GeneralContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      return navigate('/movies', {replace: true});
    }
  }, [isLoggedIn, navigate]);

  return (
    <main>
      <InfoToolTip/>
      <section className="login-page">
        <Login/>
      </section>
    </main>
  )
}

export default LoginPage;