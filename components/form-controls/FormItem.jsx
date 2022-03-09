import React, { useState } from 'react'
import PropTypes from 'prop-types'

FormItem.propTypes = {}

function FormItem({
  type = '',
  value = '',
  error = '',
  id = '',
  label = '',
  onChangeValue = null,
}) {
  const [valueInner, setValueInner] = useState(value)

  const handleChangeValue = (e) => {
    setValueInner(e.target.value)

    onChangeValue({ [id]: e.target.value })
  }

  return (
    <div className="form-item">
      <div className="form-item__container">
        <input
          type={type}
          value={valueInner}
          id={id}
          className="form-input"
          placeholder={label}
          onChange={handleChangeValue}
        />
        <label className="form-label">{label}</label>
      </div>
      {error && <p className="form-error">{error}</p>}
    </div>
  )
}

export default FormItem
