import React, { useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchUser } from '../actions'
import history from '../history'
import Layout from './Layout'
import Login from './Login'
import Quote from './Quote'
import NewQuote from './NewQuote'
import EditQuote from './EditQuote'
import Quotes from './Quotes'
import Profile from './Profile'
import EditProfile from './EditProfile'
import Register from './Register'

const App = (props) => {
  const { fetchUser, currentUser, token } = props

  useEffect(() => {
    const getUser = async () => {
      await fetchUser(token)
    }
    getUser()

  }, [fetchUser, token])

  if(!currentUser) {
    return (
      <Router history={history}>
        <div className='ui container'>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
          </Switch>
        </div>
      </Router>
    )
  }

  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path='/' exact component={Quote} />
          <Route path='/register' exact component={Register} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/profile/edit' exact component={EditProfile} />
          <Route path='/quotes' exact component={Quotes} />
          <Route path='/quotes/new' exact component={NewQuote} />
          <Route path='/quote/edit/:id' exact component={EditQuote} />
        </Switch>
      </Layout>
    </Router>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    currentUser: state.users.user,
    token: localStorage.getItem('token')
  }
}

export default connect(mapStateToProps, { fetchUser })(App)