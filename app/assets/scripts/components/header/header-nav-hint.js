'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const HeaderNavHint = (props) => {
  return (
    props.navActive
      ? (<ul className={classnames('header-nav-hint nav-cancel', {hidden: !props.navActive})}>
          <li className='collecticon-circle-xmark' />
         </ul>)
      : (<ul className={classnames('header-nav-hint nav-activate', {hidden: !props.navHintActive && !props.mobileWidth})}>
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
  navActive: PropTypes.bool,
  mobileWidth: PropTypes.bool
}

export default HeaderNavHint
