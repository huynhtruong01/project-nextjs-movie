import React from 'react'
import PropTypes from 'prop-types'
import Header from '../features/Header'

Layout.propTypes = {}

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
