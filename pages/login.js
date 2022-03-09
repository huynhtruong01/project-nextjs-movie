import React from 'react'
import PropTypes from 'prop-types'
import Login from '../components/Login'
import Head from 'next/head'
import { useUserAuth } from '../context/UserAuthContent'

FormLogin.propTypes = {}

function FormLogin(props) {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="form form-login">
        <div className="form-container">
          <Login />
        </div>
      </div>
    </>
  )
}

export default FormLogin
