import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {
  handleCheckEmail,
  handleCheckPassword,
  handleCheckRetypePassword,
  handleCheckUsername,
} from '../common/validate'
import { useUserAuth } from '../context/UserAuthContent'
import FormItem from './form-controls/FormItem'

Register.propTypes = {}

function Register(props) {
  const router = useRouter()
  const [valueList, setValueList] = useState({
    username: '',
    email: '',
    password: '',
    retypePassword: '',
  })

  const [errorList, setErrorList] = useState({
    errorUsername: '',
    errorEmail: '',
    errorPassword: '',
    errorRetypePassword: '',
  })

  const { signUp } = useUserAuth()

  const handleChangeValue = (objValue) => {
    setValueList((prev) => ({
      ...prev,
      ...objValue,
    }))
  }

  const handleCheckValidate = () => {
    const arrSuccess = [
      handleCheckUsername(valueList.username, setErrorList),
      handleCheckEmail(valueList.email, setErrorList),
      handleCheckPassword(valueList.password, setErrorList),
      handleCheckRetypePassword(valueList.password, valueList.retypePassword, setErrorList),
    ]

    return arrSuccess.every((item) => item === true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!handleCheckValidate()) return

    try {
      await signUp(valueList.email, valueList.password)
      router.push('/login')
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  return (
    <form className="form-inner__register" onSubmit={handleSubmit}>
      <h2 className="form-title">Sign up</h2>
      <FormItem
        type="text"
        value={valueList.username}
        error={errorList.errorUsername}
        id="username"
        label="Username"
        onChangeValue={handleChangeValue}
      />
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
      <FormItem
        type="password"
        value={valueList.retypePassword}
        error={errorList.errorRetypePassword}
        id="retypePassword"
        label="Retype password"
        onChangeValue={handleChangeValue}
      />
      <button type="submit" className="form-btn__submit">
        Sign up
      </button>
      <div className="form-link__register">
        Already have account?
        <Link href="/login" passHref={true}>
          Login now
        </Link>
      </div>
    </form>
  )
}

export default Register
