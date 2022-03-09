import React from 'react'
import PropTypes from 'prop-types'
import Register from '../components/Register'

FormRegister.propTypes = {}

function FormRegister(props) {
  return (
    <div className="form-login">
      <div className="form-container">
        <Register />
      </div>
    </div>
  )
}

export default FormRegister
