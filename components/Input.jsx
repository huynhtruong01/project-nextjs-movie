import React from 'react'

Input.propTypes = {}

function Input({ placeholder = '', onChange = null, value = '' }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e) => onChange(e) : null}
        className="input"
      />
    </div>
  )
}

export default Input
