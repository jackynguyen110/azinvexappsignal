import React from 'react'

const TextInputForm = ({input, props, width, type, placeholder, title, meta: {touched, error}}) => {
  return (
    <div class={'form-group ' || (touched && !!error && 'issue')}>
      {title &&  <h5>{title}</h5>}
      <div class="control">
        <input className="form-control" {...input} {...props} placeholder={placeholder} type={type}/>
        {touched && error && <div class="help-block"><ul role="alert"><li>{error}</li></ul></div>}
      </div>
    </div>
  )
}

export default TextInputForm