import React from 'react'

const RadioInput = ({ name, input, type, label, title, options, required}) => {
    const optionsValue = options.map((item, index) =>
        <label key={item.key}  className='btn btn-secondary '>
            <input {...required} {...input}type="radio" name="options" value={item.key} id={index} /> {item.value}
        </label>
    );
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {optionsValue}
    </div>
  )
}

export default RadioInput
