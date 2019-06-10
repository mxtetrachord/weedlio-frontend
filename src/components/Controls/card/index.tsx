import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from '../../Card/'
import ListItem from '../../ListItem/'
import { hit } from '../../../actions/'

import { Dose, Method } from '../../../types/cannabis'
import { Action } from '../../../types/redux'
import { StoreState } from '../../../reducers/'

import './main.css'

type ControlsCardProps = {
  hotkeys: Dose[],
  hit: (arg0: Dose) => Action<Dose>
}

export class ControlsCard extends Component<ControlsCardProps> {
  state = { method: '' }

  update = (event: React.ChangeEvent<HTMLSelectElement>) =>
    this.setState({ method: event.target.value })
  
  render() {
    const { hotkeys, hit } = this.props
    const { method } = this.state
    const { update } = this

    return (
      <Card header='controls'>
        <div>
          <ListItem>
            <div className='left'>
              <select onChange={update}>
                {
                  Object.keys(Method)
                    .filter(k => typeof Method[k as any] === 'number')
                    .map(method =>
                      <option key={method} value={method}>
                        {method} 
                      </option>
                    )
                }
              </select>

              <button onClick={() => hit({ text: method })}>add</button>
            </div>

            <div className='right'>
              <button>add to hotkeys</button>
            </div>
          </ListItem>

          <div className='button-container scroll'>
            {
              hotkeys.map((d: Dose) =>
                <div key={d.text} 
                  onClick={() => hit(d)}
                  className='dose-button' role='button'>
                  <small>{Method[Number(d.text)]}</small>
                </div>
              )
            }
          </div>
        </div>
      </Card>
    )
  }
}


export default connect(
  (state: StoreState) => state.controls,
  { hit }
)(ControlsCard)
