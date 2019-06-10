import { Action } from '../types/redux'
import { Dose, Method } from '../types/cannabis'

export type ControlsState = {
  hotkeys: Array<Dose>
}

const defaultState: ControlsState = {
  hotkeys: [
    {
      text: Method.dynavap.toString(),
      size: 1,
    },
    {
      text: Method.bowl.toString(),
      size: 1,
    },
    {
      text: Method.bong.toString(),
      size: 1,
    },
  ]
}

export function controls(state = defaultState, { type, payload }: Action<any>) {
  return defaultState
}

export default controls

