import { useContext } from "react";
import useEscOverlayClose from '../../hooks/useEscOverlayClose'
import { GeneralContext } from "../../contexts/GeneralContext";

import unionTrue from '../../images/union-true.svg'
import unionFalse from '../../images/union-false.svg'

function InfoTooltip () {
  const { isOpen, setIsOpen, messageInfo, isRequestSuccessful } = useContext(GeneralContext);  
  
  function handlePopupClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  } 
  
  useEscOverlayClose(isOpen, handlePopupClick)

  return (
      <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
        <div className={`popup__container`}>
          <button className='popup__close-button' type='button' onClick={handlePopupClick}/>
          <img 
          src={isRequestSuccessful ? unionTrue : unionFalse} 
          className="popup__image"
          alt={isRequestSuccessful ? 'picture with success sign' : 'picture with unsuccess sign'}
        />
        <h2 className="popup__title">
          {messageInfo}
        </h2>
        </div>
      </section>
  )
}

export default InfoTooltip;