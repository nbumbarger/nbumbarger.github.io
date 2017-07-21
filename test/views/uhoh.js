'use strict'

import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import UhOh from '../../app/assets/scripts/views/uhoh'

test('uhoh', t => {
  const view = shallow(<UhOh />)

  t.truthy(view.hasClass('page__uhoh'))
})
