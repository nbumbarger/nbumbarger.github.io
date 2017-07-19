'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import config from '../config'
import { mapSettings, mapPOIs, staticSettings } from '../constants'
import { getBearing } from '../utils/map'

class HomeBackground extends Component {
  constructor (props) {
    super(props)
    this.state = {
      poiIndex: Math.floor(Math.random() * mapPOIs.length)
    }
  }

  initializeMap () {
    this.props.mapboxgl.accessToken = config.accessToken
    const map = new this.props.mapboxgl.Map({
      container: mapSettings.container,
      style: mapSettings.style,
      center: mapPOIs[this.state.poiIndex].coords,
      zoom: mapSettings.zoom
    })
    map.on('load', () => {
      this.mapZoomTo(map)
    })
    map.on('moveend', () => {
      this.mapZoomTo(map)
    })
  }

  mapZoomTo (map) {
    // Set bearing to slowly rotate transition view towards next point
    const newIndex = Math.floor(Math.random() * mapPOIs.length)
    const startCoord = mapPOIs[this.state.poiIndex].coords
    const endCoord = mapPOIs[newIndex].coords
    const bearing = getBearing(startCoord, endCoord)

    map.flyTo({
      center: endCoord,
      zoom: mapSettings.zoom,
      bearing: bearing,
      pitch: mapSettings.pitch,
      speed: mapSettings.speed,
      curve: mapSettings.curve,
      easing: (t) => t
    })

    this.setState({poiIndex: newIndex})
  }

  addStatic () {
    const { staticOverlay, scaleFactor, FPS, scanSpeed, SAMPLE_COUNT } = staticSettings
    let { scanSize, scanOffsetY } = staticSettings

    const canvas = document.querySelector(`#${staticOverlay}`)
    const context = canvas.getContext('2d')

    let samples = []
    let sampleIndex = 0

    window.onresize = function () {
      canvas.width = canvas.offsetWidth / scaleFactor
      canvas.height = canvas.width / (canvas.offsetWidth / canvas.offsetHeight)
      scanSize = (canvas.offsetHeight / scaleFactor) / 3

      samples = []
      for (let i = 0; i < SAMPLE_COUNT; i++) {
        samples.push(generateRandomSample(context, canvas.width, canvas.height))
      }
    }

    const interpolate = (x, x0, y0, x1, y1) => {
      return y0 + (y1 - y0) * ((x - x0) / (x1 - x0))
    }

    const generateRandomSample = (context, w, h) => {
      const intensity = []
      const factor = h / 50

      const intensityCurve = []
      for (let i = 0; i < Math.floor(h / factor) + factor; i++) {
        intensityCurve.push(Math.floor(Math.random() * 15))
      }

      for (let i = 0; i < h; i++) {
        const value = interpolate((i / factor), Math.floor(i / factor), intensityCurve[Math.floor(i / factor)], Math.floor(i / factor) + 1, intensityCurve[Math.floor(i / factor) + 1])
        intensity.push(value)
      }

      const imageData = context.createImageData(w, h)
      for (let i = 0; i < (w * h); i++) {
        const k = i * 4
        let color = Math.floor(36 * Math.random())

        color += intensity[Math.floor(i / w)]
        imageData.data[k] = imageData.data[k + 1] = imageData.data[k + 2] = color
        imageData.data[k + 3] = 255
      }
      return imageData
    }

    const render = () => {
      context.putImageData(samples[Math.floor(sampleIndex)], 0, 0)

      sampleIndex += 30 / FPS
      if (sampleIndex >= samples.length) sampleIndex = 0

      const grd = context.createLinearGradient(-1, scanOffsetY, 0, scanSize + scanOffsetY)

      grd.addColorStop(0, 'rgba(255,255,255,0)')
      grd.addColorStop(0.1, 'rgba(255,255,255,0)')
      grd.addColorStop(0.2, 'rgba(255,255,255,0.2)')
      grd.addColorStop(0.45, 'rgba(255,255,255,0.1)')
      grd.addColorStop(0.5, 'rgba(255,255,255,0.25)')
      grd.addColorStop(0.55, 'rgba(255,255,255,0.2)')
      grd.addColorStop(0.6, 'rgba(255,255,255,0.15)')
      grd.addColorStop(1, 'rgba(255,255,255,0)')

      context.fillStyle = grd
      context.fillRect(0, scanOffsetY, canvas.width, scanSize + scanOffsetY)
      context.globalCompositeOperation = 'lighter'

      scanOffsetY += (canvas.height / (FPS * scanSpeed))
      if (scanOffsetY > canvas.height) scanOffsetY = -(scanSize / 2)

      window.setTimeout(function () {
        window.requestAnimationFrame(render)
      }, 1000 / FPS)
    }
    window.onresize()
    window.requestAnimationFrame(render)
  }

  componentDidMount () {
    this.initializeMap()
    this.addStatic()
  }

  render () {
    return (
      <div className='home-background'>
        <canvas id='static-overlay'></canvas>
        <div id='map'></div>
      </div>
    )
  }
}

HomeBackground.propTypes = {
  mapboxgl: PropTypes.object
}

export default HomeBackground
