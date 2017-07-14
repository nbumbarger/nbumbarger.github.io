'use strict'

import React from 'react'
import { Motion, spring } from 'react-motion'
import PropTypes from 'prop-types'

const HeaderNav = (props) => {
  return (
    <Motion defaultStyle={{x: -10, o: 0.5}} style={{
      x: spring(props.navActive ? 1.5 : -10, {stiffness: 60, damping: 15}),
      o: spring(props.navActive ? 1 : 0, {stiffness: 60, damping: 20})
    }}>
      {interpolation => {
        return (
            <nav className='header-nav' style={{left: `${interpolation.x}rem`, opacity: interpolation.o}}>
              Nav Links
            </nav>
        )
      }
    }
  </Motion>)
}

HeaderNav.propTypes = {
  navActive: PropTypes.bool
}

export default HeaderNav
