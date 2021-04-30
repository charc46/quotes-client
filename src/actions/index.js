import axios from 'axios'
import history from '../history'

const url = 'https://crane-quotable-api.herokuapp.com'

// User Actions
export const login = (email, password) => async dispatch => {
  const res = await axios.post(`${url}/users/login`, {
      email,
      password, 
  })

  localStorage.setItem('token', res.data.token)

  dispatch({ type: 'LOGIN', payload: res.data })
  history.push('/')
}

export const logout = (token) => async (dispatch) => {
  const res = await axios.post(`${url}/users/logout`, {}, {
    headers: {
      Authorization: `Bearer ${token}` 
    }
  }, { withCredentials: true })

  localStorage.setItem('token', '')

  dispatch({ type: 'LOGOUT', payload: res.data })
  history.push('/login')
}

export const createUser = (username, email, password) => async dispatch => {
  const res = await axios.post(`${url}/users`, {
    username,
    email,
    password
  }, { withCredentials: true })

  localStorage.setItem('token', res.data.token)

  dispatch({ type: 'CREATE_USER', payload: res.data})
  window.location.href = '/quotes/new'
}

export const fetchUser = (token) => async dispatch => {
  const res = await axios.get(`${url}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}` 
    }
  }, { withCredentials: true })

  dispatch({ type: 'GET_USER', payload: res.data })
}

// User enters new details for required updates, password set to current password by default
// User gets authenticated via jwt but current password is required to make changes
export const updateUser = (token, username, email, currentPassword, password) => async dispatch => {
  const res = await axios.patch(`${url}/users/me`, {
    username,
    email,
    password: password || currentPassword,
    currentPassword
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }, { withCredentials: true })

  console.log(res.data);
  dispatch({ type: 'UPDATE_USER', payload: res.data })
  history.push('/profile', { state: { token: res.data.token }})
}


// Quote actions
export const createQuote = (token, quote, source) => async dispatch => {
  const res = await axios.post(`${url}/quotes`, {
    quote,
    source
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }, { withCredentials: true })

  dispatch({ type: 'CREATE_QUOTE', payload: res.data})
  history.push('/quotes')
}

export const fetchQuotes = (token) => async (dispatch) => {
  const res = await axios.get(`${url}/quotes`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }, { withCredentials: true })

  dispatch({ type: 'FETCH_QUOTES', payload: res.data })
}

export const fetchQuote = (token, id) => async dispatch => {
  const res = await axios.get(`${url}/quotes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }, { withCredentials: true })

  dispatch({ type: 'GET_QUOTE', payload: res.data })
}

export const updateQuote = (token, quote, source, id) => async dispatch => {
  const res = await axios.patch(`${url}/quotes/${id}`, {
    quote,
    source
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }, { withCredentials: true })

  dispatch({ type: 'UPDATE_QUOTE', payload: res.data })
  history.push('/quotes')
}

export const deleteQuote = (token, id) => async dispatch => {
  const res = await axios.delete(`${url}/quotes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }, { withCredentials: true })

  dispatch({ type: 'DELETE_QUOTE', payload: res.data })
  history.push('/quotes')
}
