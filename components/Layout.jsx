import React from 'react'
import PropTypes from 'prop-types'
import Header from '../features/Header'
import Footer from '../features/Footer'

Layout.propTypes = {}

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
