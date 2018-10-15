import React from 'react'

const TextAreaForm = ({input, props, width, type, placeholder, title, meta: {touched, error}}) => {
  return (
    <div className={'form-group ' || (touched && !!error && 'issue')}>
      {title &&  <h5>{title}</h5>}
      <div className="control">
        <textarea className="form-control" {...input} placeholder={placeholder} type={type}/>
        {touched && error && <div className="help-block"><ul role="alert"><li>{error}</li></ul></div>}
      </div>
    </div>
  )
}

export default TextAreaForm