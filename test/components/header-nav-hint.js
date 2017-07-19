'use strict'

import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import HeaderNavHint from '../../app/assets/scripts/components/header-nav-hint'

test('header-nav-hint test', t => {
  const component = shallow(<HeaderNavHint />)

  t.truthy(component.hasClass('header-nav-hint'))
})
