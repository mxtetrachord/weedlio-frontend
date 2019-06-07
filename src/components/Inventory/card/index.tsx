import React from 'react'
import { connect } from 'react-redux'

import { StoreState } from '../../../reducers/'
import Card from '../../Card/'

export const InventoryCard = (props: StoreState) =>
  <Card header='inventory'>
    <p>{JSON.stringify(props)}</p>
  </Card>

export default connect(
  (state: StoreState) => state.inventory
)(InventoryCard)

