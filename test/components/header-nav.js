'use strict'

import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import HeaderNav from '../../app/assets/scripts/components/header/header-nav'

test('header-nav test', t => {
  const component = shallow(<HeaderNav />)

  t.truthy(component.hasClass('header-nav-container'))
})
