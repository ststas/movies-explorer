import AuthInput from "../Reusable/AuthInput/AuthInput";
import useFormValidation from '../../hooks/useFormValidation'
import AuthButtons from "../Reusable/AuthButtons/AuthButtons";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../../contexts/GeneralContext";

import { PasswordError, RegExPassword } from "../../utils/constants"

function Login () {
  const {values, errors, isValid, handleChange, resetForm }  = useFormValidation()
  const {email, password} = values
  const navigate = useNavigate()
  const { signIn, isLoading } = useContext(GeneralContext);

  function handleSubmit (event) {
    event.preventDefault()
    if(!isLoading) {
      signIn(email, password, resetForm, navigate)
    }
  }

  return (
    <section className="login">
      <form name="login-form" className="login__form" noValidate onSubmit={handleSubmit}>
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
          pattern="^\S+@\S+\.[a-zA-Z]{2,}$"
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
          classModifier={'auth-buttons_type_login'}
          isValid={isValid}
        />
      </form>
    </section>
  )
}

export default Login;