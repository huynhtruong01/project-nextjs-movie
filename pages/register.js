import React from 'react'
import PropTypes from 'prop-types'
import Register from '../components/Register'
import Head from 'next/head'

FormRegister.propTypes = {}

function FormRegister(props) {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className="form form-register">
        <div className="form-container">
          <Register />
        </div>
      </div>
    </>
  )
}

export default FormRegister
