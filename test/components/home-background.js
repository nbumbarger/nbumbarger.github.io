import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import proxyquire from 'proxyquire'
import mockboxGL from 'mapbox-gl-js-mock'

const { HomeBackground } = proxyquire.noCallThru().load('../../app/assets/scripts/components/home-background', {
  'mapbox-gl': mockboxGL
})

test('home test', t => {
  const view = shallow(<HomeBackground />)

  t.truthy(view.hasClass('home__background'))
})
