import { combineReducers, Reducer } from 'redux'

import controls, { ControlsState } from './controls'
import inventory, { InventoryState } from './inventory'
import journal, { JournalState } from './journal'

export type StoreState = {
  controls: ControlsState,
  inventory: InventoryState,
  journal: JournalState,
}

const rootReducer: Reducer<StoreState> = 
  combineReducers<StoreState>({ controls, inventory, journal })

export default rootReducer
