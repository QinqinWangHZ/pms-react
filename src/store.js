import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { logger, router, reduxRouterMiddleware } from './middleware'
import createLogger from 'redux-logger';
import rootReducer from './reducers'

const nextReducer = require('./reducers')
export default function configure(initialState) {
  const create = window.devToolsExtension ?
    window.devToolsExtension()(createStore) :
    createStore

  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
		reduxRouterMiddleware,
		createLogger(),
		logger,
    router
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
