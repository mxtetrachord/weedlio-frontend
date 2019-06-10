import React, { Component } from 'react'
import { connect } from 'react-redux'

import { think, unThink } from '../../../actions'
import { newestFirst, formatDate, isNumeric } from '../../../util/'
import Card from '../../Card/'
import ListItem from '../../ListItem/'

import { StoreState } from '../../../reducers/'
import { JournalState } from '../../../reducers/journal'
import { Action } from '../../../types/redux'
import { Thought, Level, Method } from '../../../types/cannabis'

import trashcan from '../../../images/trashcan.png'
import './main.css'

type JournalProps = JournalState & {
  think: (arg0: Thought) => Action<Thought>,
  unThink: (arg0: Thought) => Action<Thought>,
}

type JournalComponentState = {
  text: string
}

export class Journal extends Component<JournalProps, JournalComponentState> {
  state = { text: '' }

  update = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ text: event.target.value })

  add = (baked: Level) => () => {
    this.props.think({ baked, text: this.state.text })
    this.setState({ text: '' })
  }

  render() {
    const { update, add }  = this
    const { text } = this.state

    const thoughts = this.props.entries.sort(newestFirst).map(entry =>
      <ListItem key={entry.id} color={entry.baked}>
        <div className='left'>
          <p className='muted-text'>
            { entry.timestamp ? formatDate(entry.timestamp) : 'never' }
          </p>

          <p>{ isNumeric(entry.text) ? Method[Number(entry.text)] : entry.text }</p>
        </div>

        <div className='right'>
          <div className='img-container'>
            <img src={trashcan}
              alt='delete'
              role='button'
              onClick={() => this.props.unThink(entry)}/>
          </div>
        </div>
      </ListItem>
    )

    return (
      <Card header='journal' fullwidth>
        <div>
          <ListItem>
            <div className='left'>
              <input type='text'
                value={text}
                onChange={update}
                placeholder='thought' />
  
              <button className='green' onClick={add('green')} />
              <button className='yellow' onClick={add('yellow')} />
              <button className='red' onClick={add('red')} />
            </div>
          </ListItem>
          
          <div className='scroll'>
            { thoughts }
          </div>
        </div>
      </Card>
    )
  }
}

export default connect(
  (state: StoreState) => state.journal,
  { think, unThink }
)(Journal)
