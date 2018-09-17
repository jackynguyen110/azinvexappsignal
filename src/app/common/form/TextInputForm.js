import React from 'react'

const TextInputForm = ({input, props, width, type, placeholder, title, meta: {touched, error}}) => {
  return (
<<<<<<< HEAD
    <div class={'form-group ' || (touched && !!error && 'issue')}>
      {title &&  <h5>{title}</h5>}
      <div class="control">
        <input className="form-control" {...input} {...props} placeholder={placeholder} type={type}/>
        {touched && error && <div class="help-block"><ul role="alert"><li>{error}</li></ul></div>}
      </div>
=======
    <div className={'form-group ' || (touched && !!error && 'issue')}>
      <input className="form-control" {...input} {...props} placeholder={placeholder} type={type}/>
      {touched && error && <div className="help-block"><ul role="alert"><li>{error}</li></ul></div>}
>>>>>>> 3d0bf229854ef2f9e1a6dac361d7ad7777b5821c
    </div>
  )
}

export default TextInputForm