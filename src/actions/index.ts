import uuid from 'uuid/v4'

import {
  ADD_STRAIN,
  DELETE_STRAIN,
  THINK,
  UNTHINK,
  HIT,
} from './actionTypes'

import { Strain, Thought, Dose } from '../types/cannabis'

export const addStrain = (payload: Strain) => 
  ({ type: ADD_STRAIN, payload: { id: uuid(), ...payload }})

export const deleteStrain = (payload: Strain) =>
  ({ type: DELETE_STRAIN, payload })

export const think = (payload: Thought) =>
  ({ type: THINK, payload: { id: uuid(), timestamp: Date.now(), ...payload }})

export const unThink = (payload: Thought) =>
  ({ type: UNTHINK, payload })

export const hit = (payload: Dose) =>
  ({ type: HIT, payload: { id: uuid(), timestamp: Date.now(), ...payload }})

