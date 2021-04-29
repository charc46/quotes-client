import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import quotesReducer from './quotesReducer'

export default combineReducers({
  quotes: quotesReducer,
  users: usersReducer
})