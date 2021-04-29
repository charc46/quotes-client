import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

import * as layoutStyles from './styles/layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
