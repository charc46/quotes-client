import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa'
import { connect } from 'react-redux'
import { logout } from '../actions'

import * as navStyles from './styles/nav.module.scss'

const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const menuClass = isOpen ? `${navStyles.open}` : `${navStyles.closed}`

  return (
    <nav className={navStyles.nav}>
      <h1 ><Link to='/' className={navStyles.title}>Quotable</Link></h1>
      <div className={navStyles.actions}>
        <Link to='/quotes/new' className={navStyles.icon}><FaPlus /></Link>
        <div 
          className={navStyles.dropdown}
          onMouseEnter={() => setIsOpen(true)} 
          onMouseLeave={() => setIsOpen(false)}
        >
          <IoSettingsOutline 
            className={navStyles.icon} 
          />
          <div 
            className={`ui primary vertical menu ${menuClass}`}  
          >
            <Link to='/' className="item" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to='/profile/edit' className="item" onClick={() => setIsOpen(false)}>
              Edit Profile
            </Link>
            <Link to='/quotes' className="item" onClick={() => setIsOpen(false)}>
              Your Quotes
            </Link>
            <a className={`item ${navStyles.logout}`} onClick={() => props.logout(localStorage.getItem('token'))}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default connect(null, { logout })(Nav)
