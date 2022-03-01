import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { ImSearch } from 'react-icons/im'

NavBar.propTypes = {}

function NavBar(props) {
  return (
    <div className="header__navbar">
      <div className="wrapper__container flex align-items-center">
        <div className="navbar__home">
          <Link href="/">Watchflix</Link>
        </div>
        <nav className="navbar__link-list">
          <ul>
            <li>
              <Link href="/movies">Movies</Link>
            </li>
            <li>
              <Link href="/tvshow">TV Show</Link>
            </li>
            <li>
              <Link href="/video">Video</Link>
            </li>
            <li>
              <Link href="contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="navbar__features flex align-items-center">
          <button className="navbar__search ">
            <ImSearch />
          </button>
          <div className="navbar__auth flex align-items-center">
            <button className="navbar__login">Login</button>
            <button className="navbar__register">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
