import { 
  ADD_STRAIN,
  DELETE_STRAIN
} from '../actions/actionTypes'

import { Action } from '../types/redux'
import { Strain } from '../types/cannabis'

export type InventoryState = {
  strains: Array<Strain>
}

const defaultState: InventoryState = {
  strains: []
}

export function inventory(state = defaultState, { type, payload }: Action<Strain>) {
  switch(type) {
    case ADD_STRAIN:
      return { strains: payload ? state.strains.concat(payload) : state.strains }
    case DELETE_STRAIN:
      return payload 
        ? { strains: state.strains.filter(r => r.id !== payload.id) }
        : state
    default:
      return state
  }
}

export default inventory

