const initialState = {
  user: null,
  token: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, token: `${action.payload.token}` }
    case 'LOGOUT':
      return { ...state, user: null}
    case 'CREATE_USER':
      return { ...state, user: action.payload.user, token: action.payload.token }
    case 'GET_USER':
      return { ...state, user: action.payload.user, token: action.payload.token }
    case 'UPDATE_USER':
      return { ...state, user: action.payload.user }
    case 'DELETE_USER':
      return { ...state, user: null }
    default:
      return state
  }
}