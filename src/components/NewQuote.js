import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createQuote } from '../actions'
import { Link } from 'react-router-dom'

import * as newStyles from './styles/newQuote.module.scss'

const NewQuote = ({ createQuote, token, quotes, user }) => {
  const [quoteQuote, setQuoteQuote] = useState('')
  const [quoteSource, setQuoteSource] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createQuote(token, quoteQuote, quoteSource)
  }

  if(quotes.length === 0) {
    return (
      <div>
        <h3 className={newStyles.firstquote}>Add your first quote here {`${user.username}`}! Your quotes will be displayed randomly each time you open a new tab!</h3>
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
    token: state.users.token,
    user: state.users.user
  }
}

export default connect(mapStateToProps, { createQuote })(NewQuote)
