import Registration from "../../components/Registration/Registration";
import InfoToolTip from "../../components/InfoToolTip/InfoTooltip"
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationPage () {
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
      <section className="registration-page">
        <Registration/>
      </section>
    </main>
  )
}

export default RegistrationPage;