function Input (props){

  return (
    <>
      <input 
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeHolder} 
        className={props.inputClassName}
        required={props.required}
        minLength={props.minLength} 
        maxLength={props.maxLength}
        pattern={props.pattern}
        value={props.value ?? ''}
        onChange={props.onChange}
        checked={props.checked}
      />
    </>
  )
}

export default Input