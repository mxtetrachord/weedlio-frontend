import React from 'react'
import { connect } from 'react-redux'

import { StoreState } from '../../../reducers/'
import Card from '../../Card/'
import { InventoryState } from '../../../reducers/inventory';

export const InventoryCard: React.FC<InventoryState> = (props: InventoryState) =>
  <Card header='inventory'>
    <p>{JSON.stringify(props)}</p>
  </Card>

export default connect(
  (state: StoreState) => state.inventory
)(InventoryCard)
