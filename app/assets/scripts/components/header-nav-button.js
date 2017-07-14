'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const HeaderNavButton = (props) => {
  return (
      <li className='header-nav-button'>
        <a href={props.item.url} target='_blank'>
          <div className={classnames('nav-button-icon', props.item.iconClass)}></div>
          <div className='nav-button-text'>{props.item.name}</div>
        </a>
      </li>
  )
}

HeaderNavButton.propTypes = {
  item: PropTypes.object
}

export default HeaderNavButton
