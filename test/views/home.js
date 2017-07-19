'use strict'

import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import proxyquire from 'proxyquire'
import mockboxGL from 'mapbox-gl-js-mock'

const { Home } = proxyquire.noCallThru().load('../../app/assets/scripts/views/home', {
  'mapbox-gl': mockboxGL
})

test('home', t => {
  const view = shallow(<Home />)

  t.truthy(view.hasClass('home'))
})
