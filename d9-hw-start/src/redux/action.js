import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_SEARCH_RESULTS,
  SET_LOADING,
  SET_ERROR,
} from './actionTypes'

// Aggiungi ai preferiti
export const addToFavorites = (item) => ({
  type: ADD_TO_FAVORITES,
  payload: item,
})

// Rimuovi dai preferiti
export const removeFromFavorites = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id,
})

// Setta i risultati della ricerca
export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
})

// Imposta lo stato di caricamento
export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
})

// Imposta l'errore
export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
})

// Action creator speciale per la fetch
export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    dispatch(setError(null))

    try {
      const response = await fetch(`API_URL?q=${query}`)
      const data = await response.json()
      dispatch(setSearchResults(data.results))
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
