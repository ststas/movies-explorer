import Profile from "../../components/Profile/Profile";
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext, useEffect } from "react";
import InfoToolTip from "../../components/InfoToolTip/InfoTooltip"

function ProfilePage () {
  const { setIsUpdated } = useContext(GeneralContext);

  useEffect(() => {
    setIsUpdated(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <main>
      <InfoToolTip/>
      <section className="profile-page">
        <Profile/>
      </section>
    </main>
  )
}

export default ProfilePage;