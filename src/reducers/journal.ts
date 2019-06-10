import { 
  THINK,
  UNTHINK,
  HIT
} from '../actions/actionTypes'

import { Action } from '../types/redux'
import { Thought } from '../types/cannabis'

export type JournalState = {
  entries: Thought[]
}

const defaultState: JournalState = {
  entries: []
}

export function journal(state = defaultState, { type, payload }: Action<Thought>) {
  switch(type) {
    case THINK:
    case HIT:
      return payload
        ? { entries: [ ...state.entries, payload ] }
        : state
    case UNTHINK:
      return payload 
        ? { entries: state.entries.filter(r => r.id !== payload.id) }
        : state
    default:
      return state
  }
}

export default journal

