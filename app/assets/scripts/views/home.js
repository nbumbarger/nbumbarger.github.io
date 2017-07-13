'use strict'

import React, { Component } from 'react'

import MapBackground from '../components/map-background'
import Header from '../components/header'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <Header />
        <MapBackground />
      </div>
    )
  }
}

export default Home
