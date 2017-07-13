'use strict'

import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <a href='mailto:nbumbarger@gmail.com'>
          <Motion defaultStyle={{x: -25, y: 0}} style={{
            x: spring(0, {stiffness: 150, damping: 25}),
            y: spring(1, {stiffness: 30, damping: 15})
          }}>
            {interpolation => {
              return (
                <div style={{
                  marginLeft: `${interpolation.x}rem`,
                  opacity: interpolation.y}}>
                  <h1>Nick B</h1>
                </div>
              )
            }}
            </Motion>
            <Motion defaultStyle={{x: -50, y: 0}} style={{
              x: spring(0, {stiffness: 120, damping: 20}),
              y: spring(1, {stiffness: 20, damping: 20})
            }}>
              {interpolation => {
                return (
                  <div style={{
                    marginLeft: `${interpolation.x}rem`,
                    opacity: interpolation.y}}>
                    <h2>Web and Geospatial Developer</h2>
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
