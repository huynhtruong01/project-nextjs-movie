import React from 'react'
import PropTypes from 'prop-types'
import Login from '../components/Login'

FormLogin.propTypes = {}

function FormLogin(props) {
  return (
    <div className="form-login">
      <div className="form-container">
        <Login />
      </div>
    </div>
  )
}

export default FormLogin
