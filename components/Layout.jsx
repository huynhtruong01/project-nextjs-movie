import React from 'react'
import { UserAuthContextProvider } from '../context/UserAuthContent'
import Footer from '../features/Footer'
import NavBar from '../features/Header/components/NavBar'

Layout.propTypes = {}

function Layout({ children }) {
  return (
    <div>
      <UserAuthContextProvider>
        <NavBar />
        {children}
        <Footer />
      </UserAuthContextProvider>
    </div>
  )
}

export default Layout
