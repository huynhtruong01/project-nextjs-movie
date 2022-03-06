import React from 'react'
import Footer from '../features/Footer'
import Header from '../features/Header'
import NavBar from '../features/Header/components/NavBar'

Layout.propTypes = {}

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
