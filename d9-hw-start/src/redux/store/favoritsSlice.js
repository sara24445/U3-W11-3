import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    companies: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.companies.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.companies = state.companies.filter(
        (company) => company.id !== action.payload.id
      )
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
