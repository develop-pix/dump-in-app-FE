import React from 'react';
import {LocationSearchContainer} from '../styles/layout/location-search/Location.style';
import LocactionSearchForm from '../components/search-location/LocactionSearchForm';

export default function LocationSearch() {
  return (
    <LocationSearchContainer>
      <LocactionSearchForm />
    </LocationSearchContainer>
  );
}
