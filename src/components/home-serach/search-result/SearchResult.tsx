import React, {useState} from 'react';
import {SearchResultProps} from '../../../interfaces/HomeSearch.interface';
import EventResult from './EventResult';
import {
  SearchResultContainer,
  EventTitleContainer,
  EventTitle,
  MoreText,
  PhotoDumpTitle,
  PhotoDumpContainer,
} from '../../../styles/layout/home-search/search-result/SearchResult.style';
import SearchNoData from '../../reuse/alert/SearchNoData';
import {SearchResultAlertContainer} from '../../../styles/layout/home-search/input/ReviewSearchInput.style';
import ReviewFrame from '../../home/photo-booth-list/ReviewFrame';
import {TouchableOpacity} from 'react-native';
import MoreEventResult from './MoreEventResult';
import {Modal} from 'react-native';

export default function SearchResult({
  searchData,
  eventData,
  photoDumpData,
}: SearchResultProps) {
  // 이벤트 더보기 모달
  const [showMoreEventModal, setShowMoreEventModal] = useState(false);
  const closeMoreEventModal = () => {
    setShowMoreEventModal(false);
  };

  const {eventData: eventList, finishedEvent} = eventData;

  return (
    <SearchResultContainer>
      {finishedEvent ? (
        <>
          <SearchResultAlertContainer>
            <SearchNoData
              alertText="종료된 이벤트입니다"
              recommendText="그래도 관련 리뷰는 찾아볼 수 있어요!"
            />
          </SearchResultAlertContainer>
          {photoDumpData.length > 0 && (
            <>
              <PhotoDumpTitle>PHOTO DUMP</PhotoDumpTitle>
              <PhotoDumpContainer>
                {photoDumpData.map(data => (
                  <ReviewFrame key={data.reviewID} data={data} />
                ))}
              </PhotoDumpContainer>
            </>
          )}
        </>
      ) : (
        <>
          <EventTitleContainer>
            <EventTitle>Event</EventTitle>
            {eventList.length > 3 && (
              <TouchableOpacity onPress={() => setShowMoreEventModal(true)}>
                <MoreText>더보기</MoreText>
              </TouchableOpacity>
            )}
          </EventTitleContainer>
          {eventList.slice(0, 3).map(data => (
            <EventResult
              searchData={searchData}
              key={data.eventID}
              data={data}
            />
          ))}

          {photoDumpData.length > 0 && (
            <>
              <PhotoDumpTitle>PHOTO DUMP</PhotoDumpTitle>
              <PhotoDumpContainer>
                {photoDumpData.map(data => (
                  <ReviewFrame key={data.reviewID} data={data} />
                ))}
              </PhotoDumpContainer>
            </>
          )}
        </>
      )}

      <Modal
        animationType="slide"
        transparent={false}
        visible={showMoreEventModal}
        onRequestClose={closeMoreEventModal}>
        <MoreEventResult
          eventData={eventList}
          searchData={searchData}
          closeMoreEventModal={closeMoreEventModal}
        />
      </Modal>
    </SearchResultContainer>
  );
}
