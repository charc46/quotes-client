import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { createUser } from '../actions'
import * as registerStyles from './styles/register.module.scss'

const Register = ({ createUser }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    createUser(username, email, password)
  }

  return (
    <div className={registerStyles.container}>
      <h1>Quotes App</h1>
      <form onSubmit={handleSubmit} className={`ui form ${registerStyles.form}`}>
        <h3>Sign Up</h3>
        <div className='field'>
          <input type="text" value={username} placeholder='Username' onChange={e => setUsername(e.target.value)} />
        </div>
        <div className='field'>
          <input type="email" value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='field'>
          <input type="password" value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
        </div>
        <button className='ui button'>Register!</button>
      </form>
      <p>Not supposed to be here? <Link to='/login'>Log In here!</Link></p>
    </div>
  )
}

export default connect(null, { createUser })(Register)
