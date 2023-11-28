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
import MoreEventResult from './MoreEventResult';
import {ReviewProps} from '../../../interfaces/Home.interface';
import {
  TouchableOpacity,
  FlatList,
  Modal,
  ActivityIndicator,
} from 'react-native';

export default function SearchResult({
  searchData,
  eventData,
  photoDumpData,
}: SearchResultProps) {
  const [loadedReviews, setLoadedReviews] = useState(6);

  // 이벤트 더보기 모달
  const [showMoreEventModal, setShowMoreEventModal] = useState(false);
  const closeMoreEventModal = () => {
    setShowMoreEventModal(false);
  };

  const {eventData: eventList, finishedEvent} = eventData;

  const onEndReached = () => {
    // 스크롤 시 새로운 데이터
    const newReviewData: ReviewProps[] = [
      {
        reviewID: 5,
        'branch-name': '포토부스 서울대점',
        'representative-image':
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      },
      {
        reviewID: 6,
        'branch-name': '포토부스 홍대점',
        'representative-image':
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      },
      {
        reviewID: 7,
        'branch-name': '포토그레이 서울대점',
        'representative-image':
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      },
      {
        reviewID: 8,
        'branch-name': '인생네컷 홍대점',
        'representative-image':
          'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      },
    ];

    // 데이터가 있을 경우에 loadedReviews 업데이트
    if (newReviewData.length > 0) {
      setLoadedReviews(
        prevLoadedReviews => prevLoadedReviews + newReviewData.length,
      );
    }
  };

  const renderReviewItem = ({item}: {item: ReviewProps}) => (
    <ReviewFrame key={item.reviewID} data={item} />
  );

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
              <FlatList
                data={photoDumpData}
                keyExtractor={item => item.reviewID.toString()}
                renderItem={renderReviewItem}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<ActivityIndicator />}
              />
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
              <FlatList
                data={photoDumpData}
                keyExtractor={item => item.reviewID.toString()}
                renderItem={renderReviewItem}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<ActivityIndicator />}
              />
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
