import React from 'react'
import PropTypes from 'prop-types'
import FormItem from './form-controls/FormItem'
import Link from 'next/link'

Login.propTypes = {}

function Login(props) {
  return (
    <form className="form-inner__login">
      <h2 className="form-title">Sign in</h2>
      <FormItem type="text" id="email" label="Email" />
      <FormItem type="password" id="password" label="Password" />
      <button type="submit" className="form-btn__submit">
        Login
      </button>
      <div className="form-link__register">
        Don{`'`}t have account?
        <Link href="/register" passHref={true}>
          Register now
        </Link>
      </div>
    </form>
  )
}

export default Login
