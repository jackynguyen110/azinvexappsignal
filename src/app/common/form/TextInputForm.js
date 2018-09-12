import React from 'react'

const TextInputForm = ({input, props, width, type, placeholder, meta: {touched, error}}) => {
  return (
    <div class={'form-group ' || (touched && !!error && 'issue')}>
      <input className="form-control" {...input} {...props} placeholder={placeholder} type={type}/>
      {touched && error && <div class="help-block"><ul role="alert"><li>{error}</li></ul></div>}
    </div>
  )
}

export default TextInputForm