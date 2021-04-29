import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'

import * as loginStyles from './styles/login.module.scss'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.login(email, password)
  }

  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.title}>
        <h1>Welcome to Quotable</h1>
        <h5>An app to remind you of all your favourite quotes.</h5>
      </div>
      <form onSubmit={handleSubmit} className={`ui form ${loginStyles.form}`}>
        <h3>Login</h3>
        <div className='field'>
          <input 
            name='email' 
            type="email" 
            value={email} 
            placeholder="Enter your Email" 
            onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div className='field'>
          <input 
            name='password' 
            type="password" 
            value={password} 
            placeholder="Enter your password" 
            onChange={e => setPassword(e.target.value)}
            />
          </div>
        <button className='ui button'>Login</button>
      </form>
      <p>No acccount? <Link to='/register'>Sign up here!</Link></p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.user
  }
}

export default connect(mapStateToProps, { login })(Login)
