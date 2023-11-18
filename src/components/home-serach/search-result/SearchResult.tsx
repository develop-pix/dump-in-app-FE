import React from 'react';
import {SearchResultsProps} from '../../../interfaces/HomeSearch.interface';
import EventResult from './EventResult';
import {
  SearchResultContainer,
  PhotoDumpTitle,
} from '../../../styles/layout/home-search/search-result/SearchResult.style';
import PhotoBoothList from '../../photo-booth-list/PhotoBoothList';

export default function SearchResult({
  searchData,
  eventData,
  photoDumpData,
}: SearchResultsProps) {
  return (
    <SearchResultContainer>
      {eventData.map(data => (
        <EventResult searchData={searchData} key={data.eventID} data={data} />
      ))}

      <PhotoDumpTitle>PHOTO DUMP</PhotoDumpTitle>
      <PhotoBoothList data={photoDumpData} />
    </SearchResultContainer>
  );
}
