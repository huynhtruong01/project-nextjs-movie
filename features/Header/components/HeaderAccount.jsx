import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useUserAuth } from '../../../context/UserAuthContent'
import { FaUserCircle } from 'react-icons/fa'

HeaderAccount.propTypes = {}

function HeaderAccount(props) {
  const { user, logOut } = useUserAuth()
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive((prev) => !prev)
  }

  const handleLogOut = async () => {
    await logOut()
  }

  console.log(active)

  return (
    <div className="header__account">
      <div className="header__account--img" onClick={handleActive}>
        <FaUserCircle />
      </div>
      <div className={`header__account--sign-out ${active ? 'active' : ''}`}>
        <button onClick={handleLogOut}>Sign out</button>
      </div>
    </div>
  )
}

export default HeaderAccount
