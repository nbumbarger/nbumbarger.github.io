import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class HeaderNavHint extends Component {
  render () {
    return (
      this.props.navActive
        ? (<ul className={classnames('nav-cancel', {hidden: !this.props.navActive})}>
            <li className='collecticon-circle-xmark' />
           </ul>)
        : (<ul className={classnames('nav-hint', {hidden: !this.props.navHintActive})}>
            <li className='collecticon-chevron-up' />
            <li className='collecticon-chevron-up' />
            <li className='collecticon-chevron-up' />
            <li className='collecticon-chevron-up' />
            <li className='collecticon-chevron-up' />
            <li className='collecticon-chevron-up' />
          </ul>)
    )
  }
}

HeaderNavHint.propTypes = {
  navHintActive: PropTypes.bool,
  navActive: PropTypes.bool
}

export default HeaderNavHint
