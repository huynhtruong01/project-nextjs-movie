import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { ImSearch } from 'react-icons/im'
import { useUserAuth } from '../../../context/UserAuthContent'
import HeaderAccount from './HeaderAccount'

NavBar.propTypes = {}

const navList = [
  { name: 'Movies', path: '/movies' },
  { name: 'TV Shows', path: '/tv-shows' },
  { name: 'Top Rated', path: '/top-rated' },
]

function NavBar(props) {
  const navbarRef = useRef(null)

  const { user } = useUserAuth()

  useEffect(() => {
    const shrinkNavbar = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbarRef.current.classList.add('shrink')
      } else {
        navbarRef.current.classList.remove('shrink')
      }
    }
    window.addEventListener('scroll', shrinkNavbar)
    return () => {
      window.removeEventListener('scroll', shrinkNavbar)
    }
  }, [])

  return (
    <div className="header__navbar" ref={navbarRef}>
      <div className="wrapper__container flex align-items-center">
        <div className="navbar__home">
          <Link href="/">Watchflix</Link>
        </div>
        <nav className="navbar__link-list">
          <ul>
            {navList.map((nav) => (
              <li key={nav.name}>
                <Link href={nav.path}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {!user ? (
          <div className="navbar__features flex align-items-center">
            <div className="navbar__auth flex align-items-center">
              <Link href="/login" passHref={true}>
                <button className="navbar__login">Login</button>
              </Link>
              <Link href="/register" passHref={true}>
                <button className="navbar__register">Register</button>
              </Link>
            </div>
          </div>
        ) : (
          <HeaderAccount />
        )}
      </div>
    </div>
  )
}

export default NavBar
