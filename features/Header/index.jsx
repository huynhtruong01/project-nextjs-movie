import React from 'react'
import HeaderMain from './components/HeaderMain'
import NavBar from './components/NavBar'

Header.propTypes = {}

function Header(props) {
  return (
    <header className="header">
      <NavBar />
      <HeaderMain />
    </header>
  )
}

export default Header
