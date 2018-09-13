import React from 'react'

const TextInputForm = ({input, props, width, type, placeholder, meta: {touched, error}}) => {
  return (
    <div className={'form-group ' || (touched && !!error && 'issue')}>
      <input className="form-control" {...input} {...props} placeholder={placeholder} type={type}/>
      {touched && error && <div className="help-block"><ul role="alert"><li>{error}</li></ul></div>}
    </div>
  )
}

export default TextInputForm