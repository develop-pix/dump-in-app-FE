import React from 'react';
import {SearchResultProps} from '../../../interfaces/HomeSearch.interface';
import EventResult from './EventResult';
import {
  SearchResultContainer,
  PhotoDumpTitle,
} from '../../../styles/layout/home-search/search-result/SearchResult.style';
import PhotoBoothList from '../../photo-booth-list/PhotoBoothList';
import SearchNoData from '../../reuse/alert/SearchNoData';
import {SearchResultAlertContainer} from '../../../styles/layout/home-search/input/ReviewSearchInput.style';

export default function SearchResult({
  searchData,
  eventData,
  photoDumpData,
}: SearchResultProps) {
  const {eventData: eventList, finishedEvent} = eventData;

  return (
    <SearchResultContainer>
      {finishedEvent ? (
        <SearchResultAlertContainer>
          <SearchNoData
            alertText="종료된 이벤트입니다"
            recommendText="그래도 관련 리뷰는 찾아볼 수 있어요!"
          />
        </SearchResultAlertContainer>
      ) : (
        <>
          {eventList.map(data => (
            <EventResult
              searchData={searchData}
              key={data.eventID}
              data={data}
            />
          ))}

          <PhotoDumpTitle>PHOTO DUMP</PhotoDumpTitle>
          <PhotoBoothList data={photoDumpData} />
        </>
      )}
    </SearchResultContainer>
  );
}
