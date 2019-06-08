import uuid from 'uuid/v4'

import {
  ADD_STRAIN,
  DELETE_STRAIN,
} from './actionTypes'

import { Strain } from '../types/cannabis'

export const addStrain = (payload: Strain) => 
  ({ type: ADD_STRAIN, payload: { id: uuid(), ...payload }})

export const deleteStrain = (payload: Strain) =>
  ({ type: DELETE_STRAIN, payload })

