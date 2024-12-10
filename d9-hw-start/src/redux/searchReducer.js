import { SET_SEARCH_RESULTS, SET_LOADING, SET_ERROR } from './actionTypes'

const initialState = {
  results: [],
  isLoading: false,
  error: null,
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return { ...state, results: action.payload }
    case SET_LOADING:
      return { ...state, isLoading: action.payload }
    case SET_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default searchReducer
