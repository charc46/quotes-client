const initialState = {
  quotes: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUOTES':
      return { ...state, quotes: action.payload }
    case 'UPDATE_QUOTE':
      return { ...state, quote: action.payload }
    case 'CREATE_QUOTE':
      return { ...state, quote: action.payload }
    case 'DELETE_QUOTE':
      return { ...state, deleted: action.payload }
    default:
      return state;
  }
}