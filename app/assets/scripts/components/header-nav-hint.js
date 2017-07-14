'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const HeaderNavHint = (props) => {
  return (
    props.navActive
      ? (<ul className={classnames('nav-cancel', {hidden: !props.navActive})}>
          <li className='collecticon-circle-xmark' />
         </ul>)
      : (<ul className={classnames('nav-hint', {hidden: !props.navHintActive})}>
          <li className='collecticon-chevron-up' />
          <li className='collecticon-chevron-up' />
          <li className='collecticon-chevron-up' />
          <li className='collecticon-chevron-up' />
          <li className='collecticon-chevron-up' />
          <li className='collecticon-chevron-up' />
        </ul>)
  )
}

HeaderNavHint.propTypes = {
  navHintActive: PropTypes.bool,
  navActive: PropTypes.bool
}

export default HeaderNavHint
