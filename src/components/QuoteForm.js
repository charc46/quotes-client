import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateQuote } from '../actions'
import { Link } from 'react-router-dom'

import * as editStyles from './styles/editQuote.module.scss'

const QuoteForm = ({quote, updateQuote, token}) => {
  const [quoteQuote, setQuoteQuote] = useState(quote.quote || '')
  const [quoteSource, setQuoteSource] = useState(quote.source || '')
  const id = quote._id

  const handleSubmit = (e) => {
    e.preventDefault()
    updateQuote(token, quoteQuote, quoteSource, id)
  }

  return (
    <div className={editStyles.container}>
      <form onSubmit={handleSubmit} className={`ui form ${editStyles.form}`}>
        <h1>Edit Quote</h1>
        <div className='field'>
          <label htmlfor="quote">Quote: </label>
          <textarea className={editStyles.quote} value={quoteQuote} name='quote' id='quote' onChange={e => setQuoteQuote(e.target.value)}/>
        </div>
        <div className='field'>
          <label htmlfor="source">Source: </label>
          <input type="text" value={quoteSource} name='source' id='source' onChange={e => setQuoteSource(e.target.value)}/>
        </div>
        <button className='ui button'>Update</button>
      </form>
      <p><Link to='/quotes'>Back to quotes</Link></p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    token: state.users.token
  }
}

export default connect(mapStateToProps, { updateQuote })(QuoteForm)
