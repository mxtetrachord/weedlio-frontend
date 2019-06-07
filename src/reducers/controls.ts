import { Action } from '../types/redux'
import { Dose } from '../types/cannabis'

export type ControlsState = {
  hotkeys: Array<Dose>
}

const defaultState: ControlsState = {
  hotkeys: []
}

export function controls(state = defaultState, { type, payload }: Action) {
  return state
}

export default controls

