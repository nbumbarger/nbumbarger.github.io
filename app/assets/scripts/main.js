'use strict'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { HashRouter, Switch, Route } from 'react-router-dom'

import config from './config'
import reducer from './reducers'

require('../styles/main.scss')
require.context('../graphics/', true, /\.(png|jpg|jpeg|gif|svg|ico)$/)
require.context('../fonts/', true, /\.(eot|svg|ttf|woff|woff2)$/)

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => {
    return (config.environment !== 'production')
  }
})

const store = createStore(reducer, applyMiddleware(
  logger
))

// Components
import Home from './views/home'
import UhOh from './views/uhoh'

render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={UhOh} />
      </Switch>
    </HashRouter>
  </Provider>
), document.querySelector('#app-container'))
