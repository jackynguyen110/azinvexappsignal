import React from 'react'

const RadioInput = ({name, input, type, label, title, options}) => {
    const optionsValue = options.map((item, index) =>
        <label class='btn btn-secondary '>
            <input type="radio" name="options" id={index} /> {item.value}
        </label>
    );
  return (
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
        {optionsValue}
    </div>
  )
}

export default RadioInput
