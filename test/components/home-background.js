'use strict'

import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import mockboxGL from 'mapbox-gl-js-mock'

import HomeBackground from '../../app/assets/scripts/components/home-background'

test('home-background test', t => {
  const component = shallow(<HomeBackground mapboxgl={mockboxGL}/>)

  t.truthy(component.hasClass('home-background'))
})
