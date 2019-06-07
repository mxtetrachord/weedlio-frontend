import { combineReducers } from 'redux'

import controls, { ControlsState } from './controls'
import inventory, { InventoryState } from './inventory'

export type StoreState = {
  controls: ControlsState,
  inventory: InventoryState
}

const rootReducer = combineReducers({ controls, inventory })

export default rootReducer

