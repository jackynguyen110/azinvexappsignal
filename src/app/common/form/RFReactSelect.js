import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

const SelectInput = ({ input: { onChange, value }, options, name, id }) => (
  <Select
    name={name}
    value={value}
    options={options}
    onChange={onChange}
    onBlurResetsInput={false}
  />
)
export default SelectInput;