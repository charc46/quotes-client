import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { fetchUser } from '../actions'

import * as profileStyles from './styles/profile.module.scss'

const Profile = ({ token, user }) => {
  useEffect(() => {
    const getUser = async () => {
      await fetchUser(token)
    }
    getUser()
  }, [token])
  
  return (
    <div className={profileStyles.container}>
      <h1>Your profile</h1>
      <h3>Username: <em>{user.username}</em></h3>
      <h3>Email: <em>{user.email}</em></h3>
      <Link to='/profile/edit'>Edit account details</Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.users.user,
    token: state.users.token
  }
}

export default connect(mapStateToProps, { fetchUser })(Profile)
