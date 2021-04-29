import React from 'react'
import { Link } from 'react-router-dom'

import * as footerStyles from './styles/footer.module.scss'

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <p>Created by <Link to='https://www.charlescrane.co.uk' className={footerStyles.link}>Charles Crane</Link></p>
    </div>
  )
}

export default Footer
