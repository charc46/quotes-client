import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchQuotes, deleteQuote } from '../actions'

import * as quotesStyles from './styles/quotes.module.scss'

const Quotes = ({ token, quotes, fetchQuotes, deleteQuote }) => {
  useEffect(() => {
    const getQuotes = async() => {
      await fetchQuotes(token)
    }
    getQuotes()
  }, [fetchQuotes, token, quotes.length])

  const handleDelete = async (id) => {
    let check = window.confirm("Are you sure?")
    if(!check) return
    deleteQuote(token, id)
    await fetchQuotes(token)
  }

  if(quotes.length < 1) {
    return (
      <div>
        <div>Loading..</div>
        <Link to='/quotes/new' className='ui button primary'>Add new quote</Link>
      </div>
    )
  }

  const renderQuotes = quotes.map(quote => {
    return (
      <div key={quote._id} className={quotesStyles.card}>
        <div>
          <h2>"{quote.quote}"</h2>
          <h3><em>- {quote.source}</em></h3>
        </div>
        <div className={quotesStyles.actions}>
          <Link to={`/quote/edit/${quote._id}`} className={`ui button ${quotesStyles.button}`}>Edit</Link>
          <button className={`ui button negative ${quotesStyles.button}`} onClick={() => handleDelete(quote._id)}>Delete</button>
        </div>
      </div>
    )
  })

  return (
    <div className={quotesStyles.container}>
      <h1>Your Quotes</h1>
      {renderQuotes}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.quotes,
    token: state.users.token
  }
}

export default connect(mapStateToProps, { fetchQuotes, deleteQuote })(Quotes)
