const checkUsername = (username) => {
  if (!username) return false
  if (username.trim().split(' ').length < 2) return false

  return true
}

const checkEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  if (!email.trim()) return false

  if (!regex.test(email.trim())) return false

  return true
}

const checkPassword = (password) => {
  if (!password.trim()) return false

  if (password.length < 6 || password.length > 20) return false

  return true
}

export const handleCheckUsername = (username, setErrorList) => {
  let err

  if (!username.trim()) {
    err = 'Username is empty!'
    setErrorList((prev) => ({
      ...prev,
      errorUsername: err,
    }))

    return false
  }

  if (!checkUsername(username)) {
    err = 'Username has least two character!'
    setErrorList((prev) => ({
      ...prev,
      errorUsername: err,
    }))

    return false
  }

  err = ''
  setErrorList((prev) => ({
    ...prev,
    errorUsername: err,
  }))

  return true
}

export const handleCheckEmail = (email, setErrorList) => {
  let err

  if (!email.trim()) {
    err = 'Email is empty!'
    setErrorList((prev) => ({
      ...prev,
      errorEmail: err,
    }))

    return false
  }

  if (!checkEmail(email)) {
    err = 'Email is invalid'
    setErrorList((prev) => ({
      ...prev,
      errorEmail: err,
    }))

    return false
  }

  setErrorList((prev) => ({
    ...prev,
    errorEmail: '',
  }))

  return true
}

export const handleCheckPassword = (password, setErrorList) => {
  let err

  if (!password) {
    err = 'Password is empty!'
    setErrorList((prev) => ({
      ...prev,
      errorPassword: err,
    }))

    return false
  }

  if (!checkPassword(password)) {
    err = 'Password must greater than 6 or less than 20!'
    setErrorList((prev) => ({
      ...prev,
      errorPassword: err,
    }))

    return false
  }

  setErrorList((prev) => ({
    ...prev,
    errorPassword: '',
  }))

  return true
}

export const handleCheckRetypePassword = (password, retypePassword, setErrorList) => {
  let err

  if (!retypePassword) {
    err = 'Retype password is empty!'
    setErrorList((prev) => ({
      ...prev,
      errorRetypePassword: err,
    }))

    return false
  }

  if (password !== retypePassword) {
    err = 'Retype password not equal password!'
    setErrorList((prev) => ({
      ...prev,
      errorRetypePassword: err,
    }))

    return false
  }

  setErrorList((prev) => ({
    ...prev,
    errorRetypePassword: '',
  }))

  return true
}
