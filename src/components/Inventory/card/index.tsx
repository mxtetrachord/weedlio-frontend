import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from '../../Card/'
import ListItem from '../../ListItem/'
import { addStrain, deleteStrain } from '../../../actions/'

import { InventoryState } from '../../../reducers/inventory';
import { StoreState } from '../../../reducers/'
import { Action } from '../../../types/redux'
import { Strain } from '../../../types/cannabis'

import trashcan from '../../../images/trashcan.png'
import './main.css'

type InventoryCardProps = InventoryState & {
  addStrain: (arg0: Strain) => Action<Strain>,
  deleteStrain: (arg0: Strain) => Action<Strain>
}

type InventoryCardState = { 
  strain: string,
  manufacturer: string
}

export class InventoryCard extends Component<InventoryCardProps, InventoryCardState> {
  readonly state = { 
    manufacturer: '', 
    strain: ''
  }

  update = (name: keyof InventoryCardState) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      this.setState({ ...this.state, [name]: event.target.value })

  add = () => {
    this.props.addStrain(this.state)
    this.setState({ manufacturer: '', strain: '' })
  }

  render() {
    const { update, add } = this
    const { manufacturer, strain } = this.state

    const strains = this.props.strains.map(
      (record: Strain) => (
        <ListItem key={record.id}>
          <div className='left'>
            <p className='muted-text'>{record.manufacturer}</p>
            <p>{record.strain}</p>
          </div>

          <div className='right'>
            <div className='img-container'>
              <img src={trashcan}
                alt='delete'
                role='button'
                onClick={() => this.props.deleteStrain(record)}/>
            </div>
          </div>
        </ListItem>
      )
    )

    return (
      <Card header='inventory'>
        <div>
          <ListItem>
            <input type='text'
              value={manufacturer}
              onChange={update('manufacturer')}
              placeholder='manufacturer' />

            <input type='text'
              value={strain}
              onChange={update('strain')}
              placeholder='strain' />

            <button onClick={add}>add</button>
          </ListItem>
          
          <div className='scroll'>
            { strains }
          </div>
        </div>
      </Card>
    )
  }
}

export default connect(
  (state: StoreState) => state.inventory,
  { addStrain, deleteStrain }
)(InventoryCard)
