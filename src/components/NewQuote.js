import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createQuote } from '../actions'
import { Link } from 'react-router-dom'

import * as newStyles from './styles/newQuote.module.scss'

const NewQuote = ({ createQuote, token, quotes }) => {
  const [quoteQuote, setQuoteQuote] = useState('')
  const [quoteSource, setQuoteSource] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createQuote(token, quoteQuote, quoteSource)
  }

  if(quotes.length === 0) {
    return (
      <div>
        <h4>Add your first quote here! Your quotes will be displayed randomly each time you open a new tab!</h4>
        <form onSubmit={handleSubmit}>
          <h3>Add a new quote</h3>
          <input type="text" value={quoteQuote} onChange={e => setQuoteQuote(e.target.value)}/>
          <input type="text" value={quoteSource} onChange={e => setQuoteSource(e.target.value)}/>
          <button>Create</button>
        </form>
        <p><Link to='/quotes'>Back to your quotes</Link></p>
      </div>
    )
  }

  return (
    <div className={newStyles.container}>
      <form onSubmit={handleSubmit} className={`ui form ${newStyles.form}`}>
        <h3>Add a new quote</h3>
        <div className='field'>
          <textarea value={quoteQuote} placeholder='A quote you would like to remember...' onChange={e => setQuoteQuote(e.target.value)} className={newStyles.quote}/>
        </div>
        <div className='field'>
          <input type="text" value={quoteSource} placeholder='The wise one who said it..' onChange={e => setQuoteSource(e.target.value)}/>
        </div>
        <button className='ui button'>Create</button>
      </form>
      <p><Link to='/'>Cancel</Link></p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.quotes,
    token: state.users.token
  }
}

export default connect(mapStateToProps, { createQuote })(NewQuote)
