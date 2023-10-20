import Input from "../Reusable/Input/Input"
import useFormValidation from '../../hooks/useFormValidation'
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { GeneralContext } from "../../contexts/GeneralContext";


function Profile () {
  const { values, errors, setValues, isValid, handleChange, resetForm }  = useFormValidation()
  const { name, email } = values
  const currentUser = useContext(CurrentUserContext)
  const { isLoading, updateUserInfo, signOut } = useContext(GeneralContext)
  
  useEffect(() => {
    resetForm()
    setValues({name: currentUser.name, email: currentUser.email })
  }, [currentUser, setValues, resetForm ]); 
  

  function handleSubmit (event) {
    event.preventDefault()
    if(!isLoading) {
      if(isValid) {
        updateUserInfo(values)
      }
    }
  }

  return (
    <section className="profile">
      <h1 className="profile__title">{`Hello, ${currentUser.name || ""}!`}</h1>
      <form name="profile-form" className="profile__form" noValidate onSubmit={handleSubmit}>
        <div className="profile__form-container">
          <div className="profile__input-container">
            <label htmlFor="name" className="profile__label">Name</label>
            <Input
              type={'text'}
              name={'name'}
              id={'name'}
              placeHolder={'Your name'}
              inputClassName={'profile__input'}
              required={true}
              minLength={'2'}
              maxLength={'30'}
              value={name || ""}
              onChange={handleChange}
            />
          </div>
          <span className={`profile__error ${errors.name && `profile__error_visible`}`}>{errors.name}</span>
        </div>
        <span className="profile__divider"></span>
        <div className="profile__form-container">
          <div className="profile__input-container">
            <label htmlFor="name" className="profile__label">E&#8209;mail</label>
            <Input
              type={'email'}
              name={'email'}
              id={'email'}
              placeHolder={'Your e-mail'} 
              inputClassName={'profile__input'}
              required={true}
              minLength={'5'}
              value={email || ""}
              pattern="^\S+@\S+\.[a-zA-Z]{2,}$"
              onChange={handleChange}
            />
          </div>  
          <span className={`profile__error ${errors.email && `profile__error_visible`}`}>{errors.email}</span>
        </div>
        <div className="profile__buttons-container">
        <button 
          type="submit" 
          className={`profile__button profile__button_type_submit ${(isValid && (name !== currentUser.name || email !== currentUser.email)) ? "": "profile__button_disabled"} ${!isLoading ? "" : "auth-buttons__submit-button_disabled"}`}
          onClick={handleSubmit}
        >Edit profile</button>
        <button type='button' className="profile__button profile__button_type_logout" onClick={signOut}>Log out</button>
      </div>
      </form>
    </section>
  )
}

export default Profile;