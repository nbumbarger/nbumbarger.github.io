'use strict'

import React, { Component } from 'react'

import HomeBackground from '../components/home-background'
import Header from '../components/header'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <Header />
        <HomeBackground />
      </div>
    )
  }
}

export default Home
