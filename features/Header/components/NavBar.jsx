import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { ImSearch } from 'react-icons/im'

NavBar.propTypes = {}

const navList = [
  { name: 'Movies', path: '/movies' },
  { name: 'TV Shows', path: '/tv-shows' },
  { name: 'Contact', path: '/contact' },
]

function NavBar(props) {
  const navbarRef = useRef(null)
  const [changeNav, setChangeNav] = useState('')

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

  const handleClick = (name) => {
    setChangeNav(name)
  }

  return (
    <div className="header__navbar" ref={navbarRef}>
      <div className="wrapper__container flex align-items-center">
        <div className="navbar__home">
          <Link href="/">Watchflix</Link>
        </div>
        <nav className="navbar__link-list">
          <ul>
            {navList.map((nav) => (
              <li
                key={nav.name}
                className={`${changeNav === nav.name ? 'active' : ''}`}
                onClick={() => handleClick(nav.name)}
              >
                <Link href={nav.path}>{nav.name}</Link>
              </li>
            ))}
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
