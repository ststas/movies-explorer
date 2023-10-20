import Input from "../../Reusable/Input/Input";


function AuthInput (props) {

  return (
    <div className="auth-input">
      <label htmlFor={props.id} className="auth-input__label">{props.labelName}</label>
      <Input
        type={props.type}
        name={props.name}
        id={props.id}
        placeHolder={props.placeHolder}
        inputClassName={props.inputClassName}
        required={props.required}
        minLength={props.minLength}
        maxLength={props.maxLength}
        pattern={props.pattern}
        value={props.value}
        onChange={props.onChange}
      />
      <span className={`auth-input__error ${props.errors && `auth-input__error_visible`}`}>
        {
          props.errors ? (props.errorMessage ? props.errorMessage : props.errors) : ""
        }
      </span>
    </div>
  )
}

export default AuthInput;