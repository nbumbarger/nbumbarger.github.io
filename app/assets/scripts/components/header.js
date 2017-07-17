'use strict'

import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

import HeaderNavHint from './header-nav-hint'
import HeaderNav from './header-nav'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mobileWidth: false,
      navHintActive: false,
      navActive: false
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.handleHeaderMouseOver = this.handleHeaderMouseOver.bind(this)
    this.handleHeaderMouseOut = this.handleHeaderMouseOut.bind(this)
    this.handleHeaderClick = this.handleHeaderClick.bind(this)
  }

  componentDidMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions () {
    this.setState({
      mobileWidth: window.innerWidth <= 543
    })
  }

  handleHeaderMouseOver () {
    this.setState({navHintActive: true})
  }

  handleHeaderMouseOut () {
    this.setState({navHintActive: false})
  }

  handleHeaderClick () {
    this.setState({navActive: !this.state.navActive})
  }

  render () {
    const navOffsetY = this.state.mobileWidth ? 5 : 4
    return (
      <div>
      <Motion defaultStyle={{y: 2}} style={{y: spring(this.state.navActive ? navOffsetY : 2, {stiffness: 100, damping: 20})}}>
      {interpolation => {
        return (
          <header
            className='header'
            style={{bottom: `${interpolation.y}rem`}}
            onMouseOver={this.handleHeaderMouseOver}
            onMouseOut={this.handleHeaderMouseOut}
            onClick={this.handleHeaderClick}
          >
            <div className='header-text'>
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
                      <h1>Nick </h1>
                      <h1>B</h1>
                    </div>
                    <div className='description' style={{
                      marginLeft: `${interpolation.x2}rem`,
                      opacity: interpolation.o2}}>
                        <h2>
                          <span className='description-part1'>Web and Geospatial </span>
                          <span className='description-part2'>Developer</span>
                        </h2>
                    </div>
                  </div>
                )
              }}
              </Motion>
            </div>
            <HeaderNavHint
              navHintActive={this.state.navHintActive}
              navActive={this.state.navActive}
              mobileWidth={this.state.mobileWidth} />
          </header>
        )
      }
    }
    </Motion>
    <HeaderNav
      navActive={this.state.navActive} />
  </div>)
  }
}

export default Header
