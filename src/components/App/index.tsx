import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Journal from '../Journal/'
import Controls from '../Controls/'
import Card from '../Card/'

import InventoryCard from '../Inventory/card'
import ControlsCard from '../Controls/card'
import './main.css'

const cardContainer = () =>
  <div className='content card-container'>
    <Journal />
    <ControlsCard />
    <InventoryCard />
    <Card fullwidth header='idfk'>
      <p>i don't fuckin know, like a graph or something?</p>
    </Card>
  </div>

export const App = () =>
  <div className='app-container'>
    <div className='app'>
      <div className='title-bar'>
        <h1>welcome to <span aria-label='sparkle' role='img'>✨</span>
          <i>stoner bullshit land</i>
          <span aria-label='sparkle' role='img'>✨</span></h1>
      </div>

      <BrowserRouter>
        <Switch>
          <Route path='/controls' component={Controls} />
          <Route path='/' component={cardContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>

export default connect(state => state)(App)
