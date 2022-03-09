import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormItem from './form-controls/FormItem'
import Link from 'next/link'
import { handleCheckEmail, handleCheckPassword } from '../common/validate'

Login.propTypes = {}

function Login(props) {
  const [valueList, setValueList] = useState({
    email: '',
    password: '',
  })

  const [errorList, setErrorList] = useState({
    errorEmail: '',
    errorPassword: '',
  })

  const handleChangeValue = (objValue) => {
    setValueList((prev) => ({
      ...prev,
      ...objValue,
    }))
  }

  const handleCheckValidate = () => {
    const arrError = [
      handleCheckEmail(valueList.email, setErrorList),
      handleCheckPassword(valueList.password, setErrorList),
    ]

    return arrError.every((item) => item)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!handleCheckValidate()) return
  }

  return (
    <form className="form-inner__login" onSubmit={handleSubmit}>
      <h2 className="form-title">Sign in</h2>
      <FormItem
        type="text"
        value={valueList.email}
        error={errorList.errorEmail}
        id="email"
        label="Email"
        onChangeValue={handleChangeValue}
      />
      <FormItem
        type="password"
        value={valueList.password}
        error={errorList.errorPassword}
        id="password"
        label="Password"
        onChangeValue={handleChangeValue}
      />
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
