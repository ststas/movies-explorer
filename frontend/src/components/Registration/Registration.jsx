import AuthInput from "../Reusable/AuthInput/AuthInput";
import useFormValidation from '../../hooks/useFormValidation'
import AuthButtons from "../Reusable/AuthButtons/AuthButtons";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../../contexts/GeneralContext";
import { PasswordError, RegExPassword } from "../../utils/constants"


function Registration () {
  const {values, errors, isValid, handleChange, resetForm }  = useFormValidation()
  const {name, email, password} = values
  const navigate = useNavigate()
  const { signUp, isLoading } = useContext(GeneralContext);

  function handleSubmit (event) {
    event.preventDefault()
    if(!isLoading) {
      signUp(name, email, password, resetForm, navigate)
    }
  }

  return (
    <section className="registration">
      <form name="registration-form" className="registration__form" noValidate onSubmit={handleSubmit}>
        <AuthInput 
          labelName={'Name'}
          type={'text'}
          name={'name'}
          id={'name'}
          placeHolder={'Name'}
          inputClassName={'auth-input__input'}
          required={true}
          minLength={'2'}
          maxLength={'30'}
          value={name}
          onChange={handleChange}
          errors={errors.name}
        >  
        </AuthInput> 
        <AuthInput 
          labelName={'E-mail'}
          type={'email'}
          name={'email'}
          id={'email'}
          placeHolder={'E-mail'}
          inputClassName={'auth-input__input'}
          required={true}
          minLength={'5'}
          value={email}
          pattern="^\S+@\S+\.[a-zA-Z]{2,}"
          onChange={handleChange}
          errors={errors.email}
        />
        <AuthInput 
          labelName={'Password'}
          type={'password'}
          name={'password'}
          id={'password'}
          placeHolder={'Password'}
          inputClassName={`auth-input__input ${errors.password ? "auth-input__input_color_pink" : ""}`}
          required={true}
          minLength={'8'}
          pattern={RegExPassword}
          value={password}
          onChange={handleChange}
          errors={errors.password}
          errorMessage={PasswordError}
        />
        <AuthButtons
          onSubmit={handleSubmit}
          classModifier={'auth-buttons_type_registration'}
          isValid={isValid}
        />        
      </form>
    </section>
  )
}

export default Registration;