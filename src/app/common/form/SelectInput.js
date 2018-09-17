import React from 'react'

const SelectInput = ({input, type, placeholder, multiple, options, title, meta: {touched, error}}) => {
  const optionsValue = options.map((item) =>
  // Wrong! The key should have been specified here:
    <option value={item.key}>{item.value}</option>
  );
  return (
    <div class="form-group validate">
        {title &&  <h5>{title}</h5>}
        <div class="controls">
            <select name="select" id="select" class="form-control">
                {optionsValue}
            </select>
        </div>
    </div>
  )
}

export default SelectInput

