import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import favoritesReducer from './favoritesReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  search: searchReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
