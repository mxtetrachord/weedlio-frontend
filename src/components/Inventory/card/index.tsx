import React, { Component } from 'react'
import { connect } from 'react-redux'

import { StoreState } from '../../../reducers/'
import Card from '../../Card/'
import ListItem from '../../ListItem/'
import { InventoryState } from '../../../reducers/inventory';

import './main.css'

type InventoryCardProps = InventoryState
type InventoryCardState = { 
  manufacturer: string,
  strain: string
}

export class InventoryCard extends Component<InventoryCardProps, InventoryCardState> {
  constructor(props: InventoryState) {
    super(props)
    this.state = { manufacturer: '', strain: '' }
    this.update = this.update.bind(this)
  }

  update(name: keyof InventoryCardState) {
    return ({ target }: React.FormEvent<HTMLInputElement>) =>
      this.setState({ [name]: target.value })
  }

  render() {
    const { update } = this

    return (
      <Card header='inventory'>
        <div>
          <ListItem>
            <input type='text'
              onChange={update('manufacturer')}
              placeholder='manufacturer' />

            <input type='text'
              onChange={update('strain')}
              placeholder='strain' />

            <button>add</button>
          </ListItem>
    
          <ListItem>
            <p>liberty critical jack</p>
          </ListItem>
        </div>
      </Card>
    )
  }
}

export default connect(
  (state: StoreState) => state.inventory
)(InventoryCard)
