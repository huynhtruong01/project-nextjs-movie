import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormItem from './form-controls/FormItem'
import Link from 'next/link'
import { handleCheckEmail, handleCheckPassword } from '../common/validate'
import { useUserAuth } from '../context/UserAuthContent'
import { useRouter } from 'next/router'
import { FcGoogle } from 'react-icons/fc'

Login.propTypes = {}

function Login(props) {
  const router = useRouter()
  const [valueList, setValueList] = useState({
    email: '',
    password: '',
  })

  const [errorList, setErrorList] = useState({
    errorEmail: '',
    errorPassword: '',
  })

  const { logIn, googleSignIn } = useUserAuth()

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!handleCheckValidate()) return

    try {
      await logIn(valueList.email, valueList.password)
      router.push('/')
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const handleSubmitGoogle = async () => {
    await googleSignIn()
    router.push('/')
  }

  return (
    <>
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
      <div className="form-login__google">
        <button onClick={handleSubmitGoogle}>
          <FcGoogle />
          <span>Sign in with google</span>
        </button>
      </div>
    </>
  )
}

export default Login
