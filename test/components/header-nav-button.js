'use strict'

import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import HeaderNavButton from '../../app/assets/scripts/components/header/header-nav-button'
const item = {name: 'LinkedIn', iconClass: 'collecticon-linkedin', url: 'https://www.linkedin.com/in/nbumbarger/'}

test('header-nav-button', t => {
  const component = shallow(
    <HeaderNavButton
      key={`nav-button-${item.name}`}
      item={item} />)

  t.truthy(component.hasClass('header-nav-button'))
})
