import { combineReducers, Reducer } from 'redux'

import controls, { ControlsState } from './controls'
import inventory, { InventoryState } from './inventory'

export type StoreState = {
  controls: ControlsState,
  inventory: InventoryState
}

const rootReducer: Reducer<StoreState> = 
  combineReducers<StoreState>({ controls, inventory })

export default rootReducer
