import { Action } from '../types/redux'
import { Strain } from '../types/cannabis'

export type InventoryState = {
  strains: Array<Strain>
}

const defaultState: InventoryState = {
  strains: []
}

export function inventory(state = defaultState, { type, payload }: Action) {
  return state
}

export default inventory

