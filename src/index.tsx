import React from 'react'
import { render } from 'react-dom'
import { createStore, Middleware, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App/'
import rootReducer from './reducers'
import middleware from './middleware'

import StorageWrapper from './util/storageWrapper'
import './main.css'

const store = createStore(
  rootReducer, 
  StorageWrapper.retrieve(), 
  applyMiddleware(...middleware as Middleware[])
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

