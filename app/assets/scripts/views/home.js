'use strict'

import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

import HomeBackground from '../components/home-background'
import Header from '../components/header/header'

export class Home extends Component {
  render () {
    return (
      <div className='page__home'>
        <Header />
        <HomeBackground mapboxgl={mapboxgl} />
      </div>
    )
  }
}

export default Home
