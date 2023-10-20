import Promo from '../../components/Promo/Promo';
import AboutProject from '../../components/AboutProject/AboutProject';
import Techs from '../../components/Techs/Techs';
import AboutMe from '../../components/AboutMe/AboutMe';
import InfoToolTip from "../../components/InfoToolTip/InfoTooltip"
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext, useEffect } from "react";

function MainPage () {
  const { setIsUpdated } = useContext(GeneralContext);
  
  useEffect(() => { 
    setIsUpdated(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <main>
      <InfoToolTip/>
      <section className="main-page">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
      </section>
    </main>
  )
}

export default MainPage;