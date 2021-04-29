import React from 'react'
import { connect } from 'react-redux'
import { fetchQuote } from '../actions'

import QuoteForm from './QuoteForm'

const EditQuote = ({ quote }) => {
  if(!quote) {
    return (
      <div>Loading..</div>
    )
  }
  return (
    <div>
      <QuoteForm quote={quote} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    quote: state.quotes.quotes.find(quote => quote._id === ownProps.match.params.id),
    token: state.users.user.token
  }
}

export default connect(mapStateToProps, { fetchQuote })(EditQuote)
