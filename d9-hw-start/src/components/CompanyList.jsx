

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';

const companyData = [
  { id: 1, name: 'Company A' },
  { id: 2, name: 'Company B' },
  // Aggiungi altre aziende
];

const CompanyList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.companies);

  const isFavorite = (company) => {
    return favorites.some(fav => fav.id === company.id);
  };

  const handleAddFavorite = (company) => {
    dispatch(addFavorite(company));
  };

  const handleRemoveFavorite = (company) => {
    dispatch(removeFavorite(company));
  };

  return (
    <div>
      <h1>Lista Aziende</h1>
      {companyData.map(company => (
        <div key={company.id}>
          <span>{company.name}</span>
          {isFavorite(company) ? (
            <button onClick={() => handleRemoveFavorite(company)}>Rimuovi dai preferiti</button>
          ) : (
            <button onClick={() => handleAddFavorite(company)}>Aggiungi ai preferiti</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CompanyList;