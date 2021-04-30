import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoRefresh } from 'react-icons/io5'

import { fetchQuotes } from '../actions'
import * as quoteStyles from './styles/quote.module.scss'

const Quote = ({ fetchQuotes, quotes, token }) => {
  const [number, setNumber] = useState(Math.floor(Math.random() * quotes.length))

  useEffect(() => {
    const getQuotes = async () => {
      await fetchQuotes(token)
    }
    getQuotes()
  }, [fetchQuotes, token])

  const newQuote = () => {
    setNumber(Math.floor(Math.random() * quotes.length))
  }

  if(quotes.length === 0) {
    return (
      <div className={quoteStyles.container}>
        <div className={quoteStyles.loading}>Uh oh, no quotes here yet!</div>
        <Link to='/quotes/new' className='ui button primary'>Add new quote</Link>
      </div>
    )
  }

  const renderQuotes = quotes.map(quote => {
    return (
      <div key={quote._id} className={quoteStyles.quote}>
        <hr />
        <div>
          <h2>"{quote.quote}"</h2>
          <h3><em>- {quote.source}</em></h3>
        </div>
        <hr/>
        <button className={`ui button ${quoteStyles.button}`} onClick={newQuote}><IoRefresh /></button>
      </div>
    )
  })

  return (
    <div className={quoteStyles.container}>
      <div>
        {renderQuotes[number]}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.quotes,
    user: state.users.user
  }
}

export default connect(mapStateToProps, { fetchQuotes })(Quote)
