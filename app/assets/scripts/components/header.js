'use strict'

import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navHintActive: false
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  handleMouseOver () {
    this.setState({navHintActive: true})
  }

  handleMouseOut () {
    this.setState({navHintActive: false})
  }

  render () {
    return (
      <header
        className='header'
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <a href='mailto:nbumbarger@gmail.com'>
          <Motion defaultStyle={{x1: -25, o1: 0, x2: -50, o2: 0}} style={{
            x1: spring(0, {stiffness: 150, damping: 25}),
            o1: spring(1, {stiffness: 30, damping: 15}),
            x2: spring(0, {stiffness: 120, damping: 20}),
            o2: spring(1, {stiffness: 20, damping: 20})
          }}>
            {interpolation => {
              return (
                <div>
                  <div style={{
                    marginLeft: `${interpolation.x1}rem`,
                    opacity: interpolation.o1}}>
                    <h1>Nick B</h1>
                  </div>
                  <div style={{
                    marginLeft: `${interpolation.x2}rem`,
                    opacity: interpolation.o2}}>
                    <h2>Web and Geospatial Developer</h2>
                  </div>
                </div>
              )
            }}
          </Motion>
        </a>
      </header>
    )
  }
}

export default Header
