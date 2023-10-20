import NotFound from "../../components/NotFound/NotFound";
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext, useEffect } from "react";

function NotFoundPage () {
  const { setIsUpdated } = useContext(GeneralContext);
  
  useEffect(() => { 
    setIsUpdated(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <main className="notfound-page">
      <NotFound/>
    </main>

  )
}

export default NotFoundPage;