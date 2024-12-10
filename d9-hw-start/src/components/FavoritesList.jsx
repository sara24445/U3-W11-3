

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites.companies);

  return (
    <div>
      <h1>Aziende Preferite</h1>
      {favorites.length === 0 ? (
        <p>Nessuna azienda preferita</p>
      ) : (
        favorites.map(company => (
          <div key={company.id}>
            <Link to={`/companies/${company.id}`}>{company.name}</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;