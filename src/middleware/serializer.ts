import { Middleware, MiddlewareAPI, Dispatch, Action, AnyAction } from 'redux'

import StorageWrapper from '../util/storageWrapper'

// serialize all user data into localStorage on state change.
// this allows the user to refresh the page and retain data.
const logger: Middleware = (store: MiddlewareAPI<Dispatch<AnyAction>>) =>
  (next: Dispatch<AnyAction>) =>
    (action: Action) => {
      next(action)
      StorageWrapper.persist(store.getState())
    }

export default logger

