import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateUser } from '../actions'

import * as editStyles from './styles/editProfile.module.scss'

const EditProfile = ({ user, token, updateUser }) => {
  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)
  const [currentPassword, setCurrentPassword] = useState('')
  const [password, setPassword] = useState(currentPassword)

  const handleSubmit = e => {
    e.preventDefault()
    updateUser(token, username, email, currentPassword, password)
  }

  return (
    <div className={editStyles.container}>
      <form onSubmit={handleSubmit} className={`ui form ${editStyles.form}`}>
        <h3>Edit account details</h3>
        <div className='field'>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className='field'>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='field'>
          <label>Enter your current password to save changes</label>
          <input type="password" value={currentPassword} placeholder='Current Password' onChange={e => setCurrentPassword(e.target.value)} />
        </div>
        <div className='field'>
          <label>Leave blank if you do not wish to change your password</label>
          <input type="password" value={password} placeholder='New Password' onChange={e => setPassword(e.target.value)} />
        </div>
        <button className='ui button'>Update</button>
      </form>
      <p><Link to='/'>Cancel</Link></p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.users.user,
    token: state.users.token
  }
}

export default connect(mapStateToProps, { updateUser })(EditProfile)
