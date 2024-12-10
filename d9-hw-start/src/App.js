import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CompanyList from './components/CompanyList'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CompanyList} />
        <Route path="/favourites" component={FavoritesList} />
        <Route
          path="/companies/:id" /* qui potresti voler aggiungere un componente per dettagli aziendali */
        />
      </Switch>
    </Router>
  )
}

export default App
