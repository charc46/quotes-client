import React from 'react'

import * as footerStyles from './styles/footer.module.scss'

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <p>Created by <a href='https://www.charlescrane.co.uk' target='blank' rel='noreferrer' className={footerStyles.link}>Charles Crane</a></p>
    </div>
  )
}

export default Footer
