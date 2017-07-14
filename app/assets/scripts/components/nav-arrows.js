import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class NavArrows extends Component {
  render () {
    return (
      <ul className={classnames('nav-arrows', {hidden: !this.props.navHintActive})}>
        <li className='collecticon-chevron-up' />
        <li className='collecticon-chevron-up' />
        <li className='collecticon-chevron-up' />
        <li className='collecticon-chevron-up' />
        <li className='collecticon-chevron-up' />
        <li className='collecticon-chevron-up' />
      </ul>
    )
  }
}

NavArrows.propTypes = {
  navHintActive: PropTypes.bool
}

export default NavArrows
