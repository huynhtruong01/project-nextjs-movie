import React from 'react'
import PropTypes from 'prop-types'

FormItem.propTypes = {}

function FormItem({ type = '', placeholder = '', id = '', label = '' }) {
  return (
    <div className="form-item">
      <input type={type} id={id} className="form-input" />
      <label className="form-label">{label}</label>
    </div>
  )
}

export default FormItem
